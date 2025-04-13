import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import Belgian from "../assets/Menu/Belgian/Belgian.jpg"
import Caramel from "../assets/Menu/Caramel/Caramel.jpg"
import Mocha from "../assets/Menu/Mocha/Mocha.jpg"
import Paneer from "../assets/Menu/Paneer/Paneer.jpg"
import Vanilla from "../assets/Menu/Vanilla/vanilla.jpg"
import CheesyNacho from "../assets/Menu/CheesyNacho/cheesynacho.jpg";
import ChocoLava from "../assets/Menu/ChocoLava/chocolava.jpg"
import ColdBrewKick from "../assets/Menu/ColdBrewKick/coldbrewkick.jpg"


const menuData = [
  {
    id: 1,
    name: "Belgian Bliss",
    category: "Ice Creams",
     image: Belgian,
    description: "Decadent Belgian chocolate ice cream with dark fudge swirls.",
    price: 120,
    rating: 4.8,
    popularity: 90,
    isNew: true,
  },
  {
    id: 2,
    name: "Caramel Crumble",
    category: "Desserts",
    image: Caramel,
    description: "Crunchy caramel bits over creamy vanilla pudding.",
    price: 150,
    rating: 4.7,
    popularity: 95,
    isNew: false,
  },
  {
    id: 3,
    name: "Mocha Frappe",
    category: "Beverages",
    image:Mocha,
    description: "Iced coffee blended with mocha and whipped cream.",
    price: 80,
    rating: 4.5,
    popularity: 80,
    isNew: true,
  },
  {
    id: 4,
    name: "Paneer Tikka Roll",
    category: "Snacks",
    image:Paneer,
    description: "Spicy paneer tikka rolled in a soft tortilla wrap.",
    price: 90,
    rating: 4.6,
    popularity: 85,
    isNew: false,
  },
  {
    id: 5,
    name: "Vanilla Velvet",
    category: "Ice Creams",
    image: Vanilla,
    description: "Classic vanilla ice cream with a smooth, creamy finish.",
    price: 100,
    rating: 4.4,
    popularity: 75,
    isNew: true,
  },
  {
  id: 6,
  name: "Cheesy Nacho",
  category: "Snacks",
  image: CheesyNacho,
  description: "Crispy nachos topped with melted cheese and spicy jalapeños.",
  price: 110,
  rating: 4.3,
  popularity: 78,
  isNew: false,
  },
  {
    id: 7,
    name: "Choco Lava Cake",
    category: "Desserts",
    image: ChocoLava,
    description: "Warm chocolate cake with a gooey molten center, served fresh.",
    price: 130,
    rating: 4.9,
    popularity: 92,
    isNew: true,
  },
  {
    id: 8,
    name: "Cold Brew Kick",
    category: "Beverages",
    image: ColdBrewKick,
    description: "Smooth cold brew coffee with a bold caffeine punch.",
    price: 110,
    rating: 4.6,
    popularity: 88,
    isNew: true,
  },
];

export default function CafeMenu() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const handleFilter = (e) => setFilter(e.target.value);
  const handleSort = (e) => setSortBy(e.target.value);

  const filteredMenu = menuData.filter((item) => {
    if (filter === "Only Ice Creams") return item.category === "Ice Creams";
    if (filter === "Popular") return item.popularity > 85;
    if (filter === "New Arrivals") return item.isNew;
    if (filter === "All") return true;
    return item.category === filter;
  });
  

  const sortedMenu = [...filteredMenu].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "popularity") return b.popularity - a.popularity;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Our Cafe Menu</h2>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Select onChange={handleFilter}>
            <option value="All">All Categories</option>
            <option value="Only Ice Creams">Only Ice Creams</option>
            <option value="Popular">Popular</option>
            <option value="New Arrivals">New Arrivals</option>
            <option value="Ice Creams">Ice Creams</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages"> Beverages</option>
            <option value="Snacks"> Snacks</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Select onChange={handleSort}>
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {sortedMenu.map((item) => (
          <Col key={item.id} md={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                src={item.image}
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>
                    <strong>₹{item.price}</strong> | ⭐ {item.rating}
                  </Card.Text>
                </div>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
