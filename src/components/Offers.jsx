import React, { useState } from 'react';
import './Offers.css'; 

const Offers = () => {
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const rewards = [
    "🎂 10% Discount",
    "🧁 Free Cupcake",
    "🍰 20% Off",
    "😅 Try Again!",
    "🚚 Free Delivery",
    "🎉 5% Discount",
    "🍩 Buy 1 Get 1",
    "🙁 Better Luck Next Time!",
  ];

  const spinWheel = () => {
    setIsSpinning(true);
    setResult('');

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const degree = 360 * 5 + (360 / rewards.length) * randomIndex;

    const wheel = document.getElementById('wheel');
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${degree}deg)`;

    setTimeout(() => {
      setResult(rewards[randomIndex]);
      setIsSpinning(false);
    }, 3100);
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">🎯 Spin the Wheel & Win Exciting Offers!</h2>

      <div className="wheel-container mx-auto position-relative mb-4">
        <div id="wheel" className="wheel border border-dark rounded-circle">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="segment"
              style={{
                transform: `rotate(${(360 / rewards.length) * index}deg)`,
              }}
            >
              {reward}
            </div>
          ))}
        </div>
        <div className="pointer position-absolute top-0 start-50 translate-middle-x" />
      </div>

      <button
        className="btn btn-danger"
        onClick={spinWheel}
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>

      {result && (
        <div className="alert alert-success mt-4">
          🎊 <strong>You got:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default Offers;
