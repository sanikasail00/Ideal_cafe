// src/components/Checkout.js
import React, { useState } from 'react';
import { useCart } from './contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useCart();  // Get cart items from context
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('dine-in');  // default option is dine-in
  const navigate = useNavigate();

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation or further actions like sending order data
    alert('Order placed successfully!');
    navigate('/');  // Redirect to home page after order is placed
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="deliveryOption" className="form-label">Delivery Option</label>
          <select
            id="deliveryOption"
            className="form-control"
            value={deliveryOption}
            onChange={(e) => setDeliveryOption(e.target.value)}
          >
            <option value="dine-in">Dine-in</option>
            <option value="takeaway">Takeaway</option>
          </select>
        </div>

        <h4>Order Summary</h4>
        <ul className="list-group mb-3">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - {item.quantity} x ${item.price}
              <span className="badge bg-primary rounded-pill">${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-between">
          <h5>Total:</h5>
          <h5>${calculateTotal().toFixed(2)}</h5>
        </div>

        <button type="submit" className="btn btn-success w-100 mt-4">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
