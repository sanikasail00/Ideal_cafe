import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Belgian from "../assets/Menu/Belgian/Belgian.jpg";
import Caramel from "../assets/Menu/Caramel/Caramel.jpg";
import Mocha from "../assets/Menu/Mocha/Mocha.jpg";
import Vanilla from "../assets/Menu/Vanilla/vanilla.jpg";

const iceCreams = [
  {
    id: 1,
    name: "Belgian Bliss",
    image: Belgian,
    description: "Decadent Belgian chocolate ice cream with dark fudge swirls.",
    price: 120,
  },
  {
    id: 2,
    name: "Caramel Crumble",
    image: Caramel,
    description: "Crunchy caramel bits over creamy vanilla pudding.",
    price: 150,
  },
  {
    id: 3,
    name: "Mocha Frappe",
    image: Mocha,
    description: "Iced coffee blended with mocha and whipped cream.",
    price: 80,
  },
  {
    id: 4,
    name: "Vanilla Velvet",
    image: Vanilla,
    description: "Classic vanilla ice cream with a smooth, creamy finish.",
    price: 100,
  },
];

const IceCreamOfTheDay = () => {
  const [iceCreamOfTheDay, setIceCreamOfTheDay] = useState(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("lastViewedDate");

    if (storedDate !== today) {
      const randomIceCream = iceCreams[Math.floor(Math.random() * iceCreams.length)];
      setIceCreamOfTheDay(randomIceCream);
      localStorage.setItem("lastViewedDate", today);
    } else {
      const storedIceCream = JSON.parse(localStorage.getItem("iceCreamOfTheDay"));
      if (storedIceCream) {
        setIceCreamOfTheDay(storedIceCream);
      }
    }
  }, []);

  useEffect(() => {
    if (iceCreamOfTheDay) {
      localStorage.setItem("iceCreamOfTheDay", JSON.stringify(iceCreamOfTheDay));
    }
  }, [iceCreamOfTheDay]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Ice Cream of the Day</h2>
      {iceCreamOfTheDay ? (
        <div className="card ice-cream-card">
          <img src={iceCreamOfTheDay.image} className="card-img-top" alt={iceCreamOfTheDay.name} />
          <div className="card-body">
            <h5 className="card-title">{iceCreamOfTheDay.name}</h5>
            <p className="card-text">{iceCreamOfTheDay.description}</p>
            <p><strong>Price: ₹{iceCreamOfTheDay.price}</strong></p>
            <Button variant="primary">Add to Cart</Button>
          </div>
        </div>
      ) : (
        <p>Loading Ice Cream of the Day...</p>
      )}
    </div>
  );
};

export default IceCreamOfTheDay;
