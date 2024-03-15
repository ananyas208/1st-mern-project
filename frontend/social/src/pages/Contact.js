

import React from 'react';
import './Contact.css'; // Import your CSS file

export default function Contact() {
  return (
    <div className="contact-container">
      <h2> Get in Touch</h2>
      <div className="contact-info">
        <p>Feel free to reach out to us!</p>
        
      </div>
      <form className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit" id="bt1">Send Message</button>
      </form>
    </div>
  );
}