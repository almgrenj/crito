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
  const [errors, setErrors] = useState({});

  const namePattern = /^[A-Za-z\s]{2,50}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = namePattern.test(formData.name) ? '' : 'Invalid name, lol.';
    tempErrors.email = emailPattern.test(formData.email) ? '' : 'Invalid email format, lol.';
    tempErrors.message = formData.message ? '' : 'MeSSage iS rEqUiReD, lol.';
    setErrors(tempErrors);

    return Object.values(tempErrors).every(x => x === '');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitMessage('Please correct the errors before submitting, lol.');
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

      if (response.ok) {
        setSubmitMessage('Thanks! Ur message has been zent.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
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
        {errors.name && <div className="error-message">{errors.name}</div>}

        <input 
          type="email" 
          name="email"
          placeholder="Email*" 
          className="contact-input" 
          value={formData.email}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <textarea 
          name="message"
          placeholder="Your Message*" 
          className="contact-message" 
          value={formData.message}
          onChange={handleInputChange}
          disabled={isSubmitting}
        ></textarea>
        {errors.message && <div className="error-message">{errors.message}</div>}

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          Send Message<i className="fas fa-arrow-right"></i>
        </button>
      </form>
      {submitMessage && <div className="form-message">{submitMessage}</div>}
    </div>
  );
}

export default ContactFormContainer;
