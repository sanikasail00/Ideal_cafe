import React, { useState, useEffect } from "react";
import "./OrderTracking.css"; 

const stages = ["Order Placed", "Preparing", "Out for Delivery", "Delivered", "Order Completed"];
const statusIcons = {
  "Order Placed": "📝",
  "Preparing": "👨‍🍳",
  "Out for Delivery": "🚚",
  "Delivered": "📦",
  "Order Completed": "✅"
};

const OrderTracking = () => {
  const [stageIndex, setStageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins countdown

  const currentStatus = stages[stageIndex];

  const updateOrderStatus = () => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);
      setTimeLeft(300 - stageIndex * 60); // mock new ETA
    }
  };

  useEffect(() => {
    let timer;
    if (timeLeft > 0 && stageIndex < 3) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft, stageIndex]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Order Tracking</h1>
      <h2>{statusIcons[currentStatus]} {currentStatus}</h2>

      {stageIndex < 3 && (
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Estimated Time Remaining: <strong>{formatTime(timeLeft)}</strong>
        </p>
      )}

      {/* Progress bar */}
      <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
        {stages.map((stage, i) => (
          <div key={i} style={{ textAlign: "center", margin: "0 10px" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: i <= stageIndex ? "#28a745" : "#ccc",
                margin: "auto",
              }}
            />
            <div style={{ fontSize: "12px", marginTop: "5px" }}>{stage.split(" ")[0]}</div>
          </div>
        ))}
      </div>

      <button
        onClick={updateOrderStatus}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 25px",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        disabled={stageIndex >= stages.length - 1}
      >
        Update Order Status
      </button>
    </div>
  );
};

export default OrderTracking;
