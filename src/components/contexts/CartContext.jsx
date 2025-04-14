import React, { createContext, useState, useContext } from 'react';

// Create a context to provide cart state globally
const CartContext = createContext();

// Create a provider component to wrap the app and provide cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Initialize cartItems state

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context in components
export const useCart = () => useContext(CartContext);
