import React from 'react';
import '../Contact.css';

const ContactFormContainer = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-title">
        <div>Leave us a message</div>
        <div>for any information.</div>
      </div>
      <form className="contact-form">
        {/* Self-closing input tags */}
        <input type="text" placeholder="Name*" className="contact-input" />
        <input type="email" placeholder="Email*" className="contact-input" />
        <textarea placeholder="Your Message*" className="contact-message"></textarea>
        <button type="submit" className="submit-button">
          Send Message<i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
}

export default ContactFormContainer;
