import React, { useState } from 'react';
import '../Contact.css';

const ContactFormContainer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('API response:', response); 

      if (response.ok) {
        setSubmitMessage('Thanks bro! Ur message has been sent.');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        throw new Error('Failed to send mezzage');
      }
    } catch (error) {
      setSubmitMessage(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-title">
        <div>Leave us a message</div>
        <div>for any information.</div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Name*" 
          className="contact-input" 
          value={formData.name}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email*" 
          className="contact-input" 
          value={formData.email}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
        <textarea 
          name="message"
          placeholder="Your Message*" 
          className="contact-message" 
          value={formData.message}
          onChange={handleInputChange}
          disabled={isSubmitting}
        ></textarea>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          Send Message<i className="fas fa-arrow-right"></i>
        </button>
      </form>
      {submitMessage && <div className="form-message">{submitMessage}</div>}
    </div>
  );
}

export default ContactFormContainer;