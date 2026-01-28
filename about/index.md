---
layout: default
title: About
lang: en
---

# About

## Purpose

Market Landscape is intended to provide a calmer, context-oriented way of looking at markets, where decision pressure and behavioural distortions tend to increase during both drawdowns and late-cycle advances. Many decisions made by retail participants are shaped by pressure rather than analysis: fear, excitement, and constant noise in between. The goal is to counter this by providing stable reference points that help frame market conditions using data interpreted in a broader cycle context.

## Approach

Market Landscape is a cycle-level navigation system built on a relative normalisation framework that interprets markets through position and phase rather than absolute price levels. Its primary implementation is the Market Navigation Index, which expresses market conditions on a bounded contextual scale representing relative cycle position and risk–reward asymmetry. By mapping assets and market segments into a shared reference space, the framework enables comparison and orientation across a cycle without relying on price targets or short-term forecasting.

## Scope

This project is not a trading platform and does not provide financial or investment advice. It is an interpretative framework designed to inform practical market decisions through cycle-level perspective and contextual understanding. Market Landscape is an independent framework with no affiliations, sponsorships, or paid promotions.

## Publication and versioning

First published: 2026-01  

Included in the first publication:  
BTC Navigation Index v0.1 | ETH Navigation Index v0.1 | Altcoin Navigation Index v0.1 | Risk Level Indicator v0.1  

Active versions:  
BTC Navigation Index v0.1 | Initial release | 2026-01  
ETH Navigation Index v0.1 | Initial release | 2026-01  
Altcoin Navigation Index v0.1 | Initial release | 2026-01  
Risk Level Indicator v0.1 | Initial release | 2026-01  

## Publication and versioning

First published: {{ site.data.publication.first_published }}  

Included in the first publication:  
{{ site.data.publication.included_first_publication · join: " · " }}  

Active versions:  
{% for v in site.data.publication.active_versions %}  
{{ v.name }} · {{ v.status }} · {{ v.date }}{% unless forloop.last %}<br>{% endunless %}
{% endfor %}  

## Data sources

Price and market data are obtained from public APIs and processed into index values. Availability and accuracy depend on upstream sources; occasional gaps or revisions may occur.


## Official presence

This project is published exclusively at [marketlandscape.github.io](https://marketlandscape.github.io/). No other websites or domains are affiliated with this project.

## Contact

For methodology, corrections, or publication issues:  
marketlandscape<span style="display:none">x</span>@proton<span style="display:none">y</span>.me

<!--
·
<style>
  .logo-box {
    display: inline-flex;
    align-items: center;

    height: 60px;
    padding-top: 24px;
    box-sizing: border-box;

    gap: 16px;
    background: transparent;
  }

  .theme-logo {
    max-width: 60px;
    max-height: 100%;
    display: block;
    opacity: 0.80;             /* light */
  }

  @media (prefers-color-scheme: dark) {
    .theme-logo {
      opacity: 0.75;           /* dark */
    }
  }
</style>

<div class="logo-box">

  <picture>
    <source srcset="/assets/img/ml-dark-standard.svg"
            media="(prefers-color-scheme: dark)">
    <img class="theme-logo"
         src="/assets/img/ml-light-standard.svg"
         alt="ML logo">
  </picture>

  <picture>
    <source srcset="/assets/img/ni-dark-standard.svg"
            media="(prefers-color-scheme: dark)">
    <img class="theme-logo"
         src="/assets/img/ni-light-standard.svg"
         alt="NI logo">
  </picture>
</div>
-->

