import React, { useState } from 'react';

const ContactUs = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setAlertMessage('Thank you for reaching out! We will get back to you soon.');

    // Optionally, clear the form after submission
    e.target.reset();
    
    // Hide the alert after 5 seconds
    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  };

  return (
    <div>
      <header className="bg-dark text-white text-center py-4">
        <h1>Ideal Café</h1>
        <p>We’d love to hear from you!</p>
      </header>

      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Contact Us</h2>

        {/* Alert Message */}
        {alertMessage && (
          <div className="alert alert-success text-center mb-4">
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn btn-dark w-100">Send Message</button>
        </form>
      </div>

      <footer className="bg-light text-center py-3">
        © 2025 Ideal Café. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactUs;
