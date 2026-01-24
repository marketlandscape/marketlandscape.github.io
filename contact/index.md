---
layout: default
title: Contact
---

<h1>Contact</h1>

<p>For questions, feedback, or collaboration.</p>

<form action="https://formspree.io/f/mnjpydrq" method="POST">
  <label>
    Name
    <input type="text" name="name" required>
  </label>

  <label>
    Email
    <input type="email" name="email" required>
  </label>

  <label>
    Message
    <textarea name="message" rows="5" required></textarea>
  </label>

  <input type="text" name="_gotcha" style="display:none">

  <input type="hidden" name="_redirect" value="/contact/thanks/">

  <button type="submit">Send</button>
</form>

<hr>

<p>
  You can also email us directly at  
  <span id="email"></span>
  <button type="button" onclick="copyEmail()">Copy email</button>
</p>

<script>
  const user = "marketlandscape";
  const domain = "proton.me";
  const email = user + "@" + domain;
  document.getElementById("email").textContent = email;

  function copyEmail(){
    navigator.clipboard.writeText(email);
  }
</script>
