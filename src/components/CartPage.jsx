// src/components/CartPage.js
import React from 'react';
import { useCart } from "../components/contexts/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cartItems and removeFromCart functions from context

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId); // Remove item from cart
  };

  return (
    <div>
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
