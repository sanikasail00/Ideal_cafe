// components/Cart.jsx
import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => {
    alert("Payment Successful!");
    clearCart();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                {item.name} x {item.qty} = ₹{item.price * item.qty}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>
          <button onClick={handlePayment} style={{ backgroundColor: "green", color: "white" }}>
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}
