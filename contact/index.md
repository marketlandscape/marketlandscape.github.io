---
layout: default
title: Contact
---

<h1>Contact</h1>

<style>
  .contact-form{
    max-width: 520px;
  }

  .contact-form label{
    display: block;
    margin-bottom: 18px;
    font-size: 0.9rem;
  }

  .contact-form input,
  .contact-form textarea{
    width: 100%;
    padding: 10px 12px;
    margin-top: 6px;
    font-size: 1rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
  }

  .contact-form textarea{
    min-height: 140px;
    resize: vertical;
  }

  .contact-form button{
    margin-top: 8px;
    padding: 10px 18px;
    font-size: 0.95rem;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text);
    cursor: pointer;
  }

  .contact-form button:hover{
    background: rgba(0,0,0,0.03);
  }
</style>

<form class="contact-form"
      action="https://formspree.io/f/mnjpydrq"
      method="POST">

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
    <textarea name="message" required></textarea>
  </label>

  <input type="text" name="_gotcha" style="display:none">
  <input type="hidden" name="_redirect" value="/contact/thanks/">

  <button type="submit">Send</button>
</form>
