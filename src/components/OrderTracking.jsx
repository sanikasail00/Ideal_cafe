// src/OrderTracking.js
import React, { useState } from "react";

const OrderTracking = () => {
  // Define the initial order status
  const [orderStatus, setOrderStatus] = useState("Order Placed");


  // Function to simulate order status updates
  const updateOrderStatus = () => {
    switch (orderStatus) {

      case "Order Placed":
        setOrderStatus("Preparing");
        break;
      case "Preparing":
        setOrderStatus("Out for Delivery");
        break;
      case "Out for Delivery":
        setOrderStatus("Delivered");
        break;
      case "Delivered":
        setOrderStatus("Order Completed");
        break;
      default:
        setOrderStatus("Order Placed");

    }
  };

  return (

    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Order Tracking</h1>
      <h2>Status: {orderStatus}</h2>
      <button
        onClick={updateOrderStatus}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          border: "none",
        }}
      >
        Update Order Status
      </button>

    </div>
  );
};

export default OrderTracking;

