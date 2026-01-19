---
layout: default
lang: en
---

# About

## Purpose

Market Landscape is intended to provide a calmer, context-oriented way of looking at markets, where decision pressure and behavioural distortions tend to increase during both drawdowns and late-cycle advances. Many decisions made by retail participants are shaped by pressure rather than analysis: fear, excitement, and constant noise in between. The goal is to counter this by providing stable reference points that help frame market conditions using data interpreted in a broader cycle context.

## Approach

The primary framework developed within Market Landscape is the Market Navigation Index. It expresses market positioning on a 25-point contextual scale, describing where the market sits relative to its own historical and cyclical position rather than absolute price levels. More broadly, Market Landscape functions as a strategic navigation framework, helping distinguish market regimes and clarify risk–reward asymmetries across a cycle.

## Scope

This project is not a trading platform and does not provide financial or investment advice. It is an interpretative framework designed to inform practical market decisions through cycle-level perspective and contextual understanding.

## Publication and versioning

First published: 2026-01  

Included in the first publication:  
BTC Index v0.1 · ETH Index v0.1 · Altcoin Index v0.1  

Active index versions:  
BTC — v0.1 · Initial release · 2026-01  
ETH — v0.1 · Initial release · 2026-01  
Altcoin — v0.1 · Initial release · 2026-01

## Official presence

This project is published exclusively at [marketlandscape.github.io](https://marketlandscape.github.io/). No other websites or domains represent this project.

## Contact

marketlandscape [at] proton [dot] me


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Theme-aware logo opacity</title>

  <style>
    /* container */
    .logo-box {
      width: 60px;
      height: 60px;
      border-radius: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }

    /* shared image rules */
    .theme-logo {
      max-width: 100%;
      max-height: 100%;
      display: block;
      opacity: 0.95; /* light theme default */
    }

    /* dark theme override */
    @media (prefers-color-scheme: dark) {
      .theme-logo {
        opacity: 0.85;
      }
    }
  </style>
</head>

<body>
  <div class="logo-box">
    <picture>
      <source
        srcset="/assets/img/logo-ml-dark-box.svg"
        media="(prefers-color-scheme: dark)"
      >
      <img
        class="theme-logo"
        src="/assets/img/logo-ml-light-box.svg"
        alt="Theme-aware logo"
      >
    </picture>
  </div>
</body>
</html>
