---
layout: default
title: Logo Preview
---

<style>
.logo-preview {
  display: flex;
  gap: 24px;
}

.logo-box {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  box-sizing: border-box;

  border: none;
  outline: none;
  box-shadow: none;
}

.logo-box.dark {
  background-color: #242424ff;
}

.logo-box.light {
  background-color: #ffffff;
}

.logo-box img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>

<div class="logo-preview">
  <div class="logo-box dark">
    <img src="assets/img/logo-dark.svg" alt="Logo on dark background">
  </div>
  <div class="logo-box light">
    <img src="assets/img/logo-light.svg" alt="Logo on light background">
  </div>
</div>
