import React from "react";
import { useCart } from "../components/contexts/CartContext";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncrease = (itemId) => {
    updateQuantity(itemId, 1); // Increase by 1
  };

  const handleDecrease = (itemId) => {
    updateQuantity(itemId, -1); // Decrease by 1
  };

  // Calculate total cost of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Rating: ⭐ {item.rating}</p>

                  {/* Customizations Display */}
                  {item.customizations && (
                    <div className="mb-2">
                      {item.customizations.flavor && (
                        <p className="card-text">
                          Flavor: {item.customizations.flavor}
                        </p>
                      )}
                      {item.customizations.toppings?.length > 0 && (
                        <p className="card-text">
                          Toppings: {item.customizations.toppings.join(", ")}
                        </p>
                      )}
                      {item.customizations.size && (
                        <p className="card-text">
                          Size: {item.customizations.size}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Quantity Controls */}
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => handleDecrease(item.id)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => {
                      handleRemoveFromCart(item.id);
                      alert(`${item.name} has been removed from your cart!`);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total Price */}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <h4>Total: ${totalPrice}</h4>

          {/* Checkout Button */}
          <Link to="/checkout">
            <button className="btn btn-primary mt-3">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
