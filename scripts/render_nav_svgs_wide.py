#!/usr/bin/env python3
"""
Render NAV timeseries JSON -> SVG images (WIDE, pre-rendered assets).

Input:  exports/nav_*.json
  rows: [{"t": "...", "box1": 0-100, "box2": 0-100, "box3": 0-100, "box4": 0-100}, ...]

Output: renders/wide/nav_*.svg
  (720x300, transparent, 5 zones, 3 or 4 lines)

Additionally:
- Embed label metadata JSON inside each SVG as:
    <desc id="nav-meta">{...json...}</desc>

This version uses TRUE TIME on the x-axis:
- x is based on UTC timestamps (not point index)
- missing values are interpolated over time
- label meta dates are chosen at equal time intervals (not equal point indices)
- enforces 1 point per UTC day (keeps last point of each day) to avoid noisy tails
"""

from __future__ import annotations

import argparse
import json
import math
import re
from pathlib import Path
from typing import Any, List, Optional
from datetime import datetime, timezone

import matplotlib
matplotlib.use("Agg")  # headless
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import numpy as np


# ---- WIDE canonical size ----
W_PX = 720
H_PX = 300
DPI = 180

# Toggle: show/hide box4 line on SVG (data still exported elsewhere)
SHOW_BOX4 = False

# Line colors — fully opaque (keep consistent with small charts)
C_BTC = (245/255, 132/255, 30/255, 1.0)    # gold/orange
C_ETH = (74/255, 141/255, 1.0, 1.0)        # blue
C_ALTS = (190/255, 190/255, 190/255, 1.0)  # grey (box3)
C_MID  = (160/255, 160/255, 160/255, 1.0)  # slightly darker grey (box4)

# Subtle separator lines between zones
SEP_COLOR = (0.70, 0.70, 0.70, 0.35)
SEP_LW = 0.8  # slightly heavier than small


def clamp(x: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, x))


def safe_float(x: Any) -> Optional[float]:
    try:
        n = float(x)
    except Exception:
        return None
    if not math.isfinite(n):
        return None
    return n


def parse_dt_utc(t: Any) -> Optional[datetime]:
    """
    Parse common timestamp formats into timezone-aware UTC datetime.

    Supports:
      - 'YYYY-MM-DD'
      - 'YYYY-MM-DDTHH:MM:SSZ'
      - ISO 8601 with offset
      - 'YYYY-MM-DD HH:MM UTC'
    """
    s = str(t or "").strip()
    if not s:
        return None

    # '2026-02-03 12:34 UTC'
    if s.endswith(" UTC"):
        try:
            dt = datetime.strptime(s, "%Y-%m-%d %H:%M UTC")
            return dt.replace(tzinfo=timezone.utc)
        except Exception:
            pass

    # 'YYYY-MM-DD'
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", s):
        try:
            dt = datetime.strptime(s, "%Y-%m-%d")
            return dt.replace(tzinfo=timezone.utc)
        except Exception:
            return None

    # ISO forms
    try:
        if s.endswith("Z"):
            dt = datetime.fromisoformat(s[:-1] + "+00:00")
        else:
            dt = datetime.fromisoformat(s)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc)
    except Exception:
        return None


def pretty_date_from_dt(dt: datetime) -> str:
    """Format UTC datetime as 'DD.MM' (stable, compact)."""
    return dt.strftime("%d.%m")


def downsample_rows_daily_last(dts: List[datetime], rows_sorted: List[dict]) -> tuple[List[datetime], List[dict]]:
    """
    Keep exactly 1 row per UTC day: the LAST observation of that day.
    Preserves chronological order.
    """
    if not dts:
        return dts, rows_sorted

    out_dts: List[datetime] = []
    out_rows: List[dict] = []

    last_day = None
    for dt, row in zip(dts, rows_sorted):
        day = dt.date()
        if last_day is None or day != last_day:
            out_dts.append(dt)
            out_rows.append(row)
            last_day = day
        else:
            # same day: overwrite (keep last)
            out_dts[-1] = dt
            out_rows[-1] = row

    return out_dts, out_rows


def fill_missing_linear_time(y: List[Optional[float]], x: np.ndarray) -> np.ndarray:
    """
    Fill missing values linearly across the series using TIME-based x.

    If fewer than 2 finite points exist, returns array as-is (with NaNs).
    """
    arr = np.array([np.nan if v is None else float(v) for v in y], dtype=float)
    if len(arr) != len(x):
        return arr

    m = np.isfinite(arr)
    if m.sum() < 2:
        return arr

    arr2 = arr.copy()
    arr2[~m] = np.interp(x[~m], x[m], arr[m])
    return arr2


def pick_equal_time_ticks(dts: List[datetime], target: int = 4) -> List[datetime]:
    """Pick up to `target` tick datetimes equally spaced in TIME between first and last."""
    if not dts:
        return []
    if len(dts) == 1 or target <= 1:
        return [dts[0]]

    t0 = dts[0]
    t1 = dts[-1]
    if t1 <= t0:
        return [t0]

    k = max(2, int(target))
    ticks: List[datetime] = []
    span = (t1 - t0)
    for i in range(k):
        frac = i / (k - 1)
        ticks.append(t0 + span * frac)
    return ticks


def snap_ticks_to_nearest(dts: List[datetime], ticks: List[datetime]) -> List[datetime]:
    """Snap each tick to the nearest existing dt (stable labels tied to data)."""
    if not dts or not ticks:
        return []
    xs = np.array([dt.timestamp() for dt in dts], dtype=float)

    snapped: List[datetime] = []
    for t in ticks:
        tx = float(t.timestamp())
        j = int(np.argmin(np.abs(xs - tx)))
        snapped.append(dts[j])

    # Deduplicate (same nearest point can occur)
    out: List[datetime] = []
    seen = set()
    for dt in snapped:
        k = dt.isoformat()
        if k in seen:
            continue
        seen.add(k)
        out.append(dt)
    return out


def embed_svg_metadata(svg_path: Path, meta: dict) -> None:
    """
    Insert <desc id="nav-meta">{...json...}</desc> inside <svg ...>.
    """
    s = svg_path.read_text(encoding="utf-8")

    meta_json = json.dumps(meta, ensure_ascii=False, separators=(",", ":"))

    # Remove any existing nav-meta
    s = re.sub(r'<desc id="nav-meta">.*?</desc>\s*', "", s, flags=re.DOTALL)

    m = re.search(r"<svg\b[^>]*>", s)
    if not m:
        svg_path.write_text(s, encoding="utf-8")
        return

    insert_at = m.end()
    desc = f'\n<desc id="nav-meta">{meta_json}</desc>\n'
    s2 = s[:insert_at] + desc + s[insert_at:]
    svg_path.write_text(s2, encoding="utf-8")


def render_svg(rows: List[dict], out_path: Path, window_tag: str, label_count_meta: int, w_px: int, h_px: int, dpi: int) -> None:
    # Parse timestamps and sort
    parsed: List[tuple[datetime, dict]] = []
    for r in rows:
        dt = parse_dt_utc(r.get("t"))
        if dt is None:
            continue
        parsed.append((dt, r))

    if not parsed:
        return

    parsed.sort(key=lambda p: p[0])
    dts = [p[0] for p in parsed]
    rows_sorted = [p[1] for p in parsed]

    # enforce 1 point per UTC day (keeps last point of each day)
    dts, rows_sorted = downsample_rows_daily_last(dts, rows_sorted)

    # time x axis (matplotlib date numbers)
    x = mdates.date2num(dts)

    # meta labels (equal time intervals)
    ticks = pick_equal_time_ticks(dts, target=max(2, int(label_count_meta)))
    snapped = snap_ticks_to_nearest(dts, ticks)
    labels_meta = [pretty_date_from_dt(dt) for dt in snapped]

    meta = {
        "window": window_tag,
        "count": len(labels_meta),
        "labels": labels_meta,
        "tick_utc": [dt.strftime("%Y-%m-%dT%H:%M:%SZ") for dt in snapped],
        "w": int(w_px),
        "h": int(h_px),
    }

    # series (0–100)
    y1 = [safe_float(r.get("box1")) for r in rows_sorted]
    y2 = [safe_float(r.get("box2")) for r in rows_sorted]
    y3 = [safe_float(r.get("box3")) for r in rows_sorted]

    y4 = None
    if SHOW_BOX4:
        y4 = [safe_float(r.get("box4")) for r in rows_sorted]

    # clamp
    y1 = [None if v is None else clamp(v, 0.0, 100.0) for v in y1]
    y2 = [None if v is None else clamp(v, 0.0, 100.0) for v in y2]
    y3 = [None if v is None else clamp(v, 0.0, 100.0) for v in y3]
    if y4 is not None:
        y4 = [None if v is None else clamp(v, 0.0, 100.0) for v in y4]

    # fill missing over TIME axis
    s1 = fill_missing_linear_time(y1, x)
    s2 = fill_missing_linear_time(y2, x)
    s3 = fill_missing_linear_time(y3, x)
    s4 = fill_missing_linear_time(y4, x) if y4 is not None else None

    # exact pixel sizing
    fig_w = w_px / dpi
    fig_h = h_px / dpi
    fig = plt.figure(figsize=(fig_w, fig_h), dpi=dpi)

    # wide gets a bit more breathing room than small
    ax = fig.add_axes([0.03, 0.10, 0.94, 0.86])

    # fully transparent backgrounds
    fig.patch.set_alpha(0)
    ax.set_facecolor((0, 0, 0, 0))

    # zone separators
    for yy in (20, 40, 60, 80):
        ax.axhline(yy, color=SEP_COLOR, linewidth=SEP_LW)

    # line widths scaled up for 720×300
    lw_alts = 1.1
    lw_eth  = 1.3
    lw_btc  = 1.5

    ax.plot(x, s3, linewidth=lw_alts, color=C_ALTS, solid_capstyle="round")

    if SHOW_BOX4 and s4 is not None:
        ax.plot(
            x, s4,
            linewidth=1.2,
            color=C_MID,
            linestyle=(0, (2.0, 3.0)),
            solid_capstyle="round"
        )

    ax.plot(x, s2, linewidth=lw_eth, color=C_ETH, solid_capstyle="round")
    ax.plot(x, s1, linewidth=lw_btc, color=C_BTC, solid_capstyle="round")

    # limits
    ax.set_ylim(0, 100)
    if len(x) == 1:
        ax.set_xlim(x[0] - 0.5, x[0] + 0.5)
    else:
        ax.set_xlim(float(x[0]), float(x[-1]))
    ax.margins(x=0)

    # no ticks/labels (HTML uses nav-meta)
    ax.set_xticks([])
    ax.set_yticks([])

    # clean frame
    for sp in ax.spines.values():
        sp.set_visible(False)
    ax.tick_params(axis="x", length=0)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(out_path, format="svg", transparent=True)
    plt.close(fig)

    embed_svg_metadata(out_path, meta)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--in_dir", default="exports", help="Directory containing nav_*.json")
    ap.add_argument("--out_dir", default="renders/wide", help="Directory to write nav_*.svg (wide set)")
    ap.add_argument("--windows", default="1w,2w,1m,3m,6m,1y", help="Comma-separated windows")
    ap.add_argument("--label_count", type=int, default=4, help="Target number of labels embedded in SVG")
    ap.add_argument("--w_px", type=int, default=W_PX, help="Output width in pixels")
    ap.add_argument("--h_px", type=int, default=H_PX, help="Output height in pixels")
    ap.add_argument("--dpi", type=int, default=DPI, help="Matplotlib DPI")
    args = ap.parse_args()

    in_dir = Path(args.in_dir)
    out_dir = Path(args.out_dir)
    windows = [w.strip() for w in str(args.windows).split(",") if w.strip()]

    for w in windows:
        src = in_dir / f"nav_{w}.json"
        if not src.exists():
            continue
        rows = json.loads(src.read_text(encoding="utf-8"))
        dst = out_dir / f"nav_{w}.svg"   # keep same names, just in /wide/
        render_svg(
            rows,
            dst,
            window_tag=w,
            label_count_meta=args.label_count,
            w_px=args.w_px,
            h_px=args.h_px,
            dpi=args.dpi,
        )


if __name__ == "__main__":
    main()
