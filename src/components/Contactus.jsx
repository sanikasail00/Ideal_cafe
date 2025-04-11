import React from 'react';


const ContactUs = () => {
  return (
    <div>
      <header className="bg-dark text-white text-center py-4">
        <h1>Ideal Café</h1>
        <p>We’d love to hear from you!</p>
      </header>

      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
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
