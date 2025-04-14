import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import StarRating from "../components/StarRating";
import Belgian from "../assets/Menu/Belgian/Belgian.jpg";
import Caramel from "../assets/Menu/Caramel/Caramel.jpg";
import Mocha from "../assets/Menu/Mocha/Mocha.jpg";
import Paneer from "../assets/Menu/Paneer/Paneer.jpg";
import Vanilla from "../assets/Menu/Vanilla/vanilla.jpg";
import CheesyNacho from "../assets/Menu/CheesyNacho/cheesynacho.jpg";
import ChocoLava from "../assets/Menu/ChocoLava/chocolava.jpg";
import ColdBrewKick from "../assets/Menu/ColdBrewKick/coldbrewkick.jpg";
import BanoffeeBliss from "../assets/Menu/BanoffeeBliss/BanoffeeBliss.jpg";
import ClassicLemonIcedTea from "../assets/Menu/ClassicLemonIcedTea/ClassicLemonIcedTea.jpg";
import SpicyPotatoTwisters from "../assets/Menu/SpicyPotatoTwisters/SpicyPotatoTwisters.jpg";
import TropicalTango from "../assets/Menu/TropicalTango/TropicalTango.jpg";
import { useCart } from "./contexts/CartContext";

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
    image: Mocha,
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
    image: Paneer,
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
    description:
      "Warm chocolate cake with a gooey molten center, served fresh.",
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
  {
    id: 9,
    name: "Banoffee Bliss",
    category: "Desserts",
    image: BanoffeeBliss,
    description: "Rich banana and toffee dessert with a crunchy biscuit base.",
    price: 120,
    rating: 4.7,
    popularity: 85,
    isNew: true,
  },
  {
    id: 10,
    name: "Classic Lemon Iced Tea",
    category: "Beverages",
    image: ClassicLemonIcedTea,
    description: "Refreshing iced tea with a splash of lemon and mint.",
    price: 90,
    rating: 4.3,
    popularity: 77,
    isNew: false,
  },
  {
    id: 11,
    name: "Spicy Potato Twisters",
    category: "Snacks",
    image: SpicyPotatoTwisters,
    description: "Crispy spiral potatoes seasoned with fiery spices.",
    price: 100,
    rating: 4.5,
    popularity: 82,
    isNew: true,
  },
  {
    id: 12,
    name: "Tropical Tango",
    category: "Beverages",
    image: TropicalTango,
    description:
      "A vibrant tropical fruit blend with mango, pineapple, and orange.",
    price: 105,
    rating: 4.4,
    popularity: 80,
    isNew: true,
  },
];
export default function CafeMenu() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [reviews, setReviews] = useState({});
  const [userPreferences, setUserPreferences] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);

  const handleFilter = (e) => setFilter(e.target.value);
  const handleSort = (e) => setSortBy(e.target.value);

  useEffect(() => {
    if (userPreferences.length > 0) {
      const recommendations = menuData.filter((item) =>
        userPreferences.includes(item.category)
      );
      setRecommendedItems(recommendations);
    }
  }, [userPreferences]);

  const handleReviewSubmit = (id, rating, text) => {
    setReviews((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), { rating, text }],
    }));
  };

  const handlePreference = (category) => {
    setUserPreferences((prev) => [...new Set([...prev, category])]);
  };

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
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
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

      <h4>Recommended Based on Your Preferences:</h4>
      <Row>
        {recommendedItems.length > 0 ? (
          recommendedItems.map((item) => (
            <Col key={item.id} md={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>
                    <strong>₹{item.price}</strong>
                  </Card.Text>
                  <Button variant="primary" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No recommendations available based on your preferences.</p>
        )}
      </Row>

      <h4>Select Your Favorite Categories:</h4>
      <Row>
        {["Ice Creams", "Desserts", "Beverages", "Snacks"].map((category) => (
          <Col key={category} md={3} className="mb-4">
            <Button
              variant="outline-primary"
              onClick={() => handlePreference(category)}
            >
              {category}
            </Button>
          </Col>
        ))}
      </Row>

      <h4 className="mt-4">All Menu Items</h4>
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
                    <strong>₹{item.price}</strong>
                  </Card.Text>

                  <Form.Group className="mb-2">
                    <Form.Label style={{ fontSize: "0.9em" }}>
                      Choose Your Flavor:
                    </Form.Label>
                    <Form.Select name={`flavor-${item.id}`} className="mb-1">
                      <option value="">Select a flavor</option>
                      {[
                        "Chocolate",
                        "Vanilla",
                        "Caramel",
                        "Coffee",
                        "Spicy",
                        "Cheesy",
                      ].map((flavor) => (
                        <option key={flavor} value={flavor}>
                          {flavor}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  {reviews[item.id] && reviews[item.id].length > 0 ? (
                    <>
                      <Card.Text className="mb-1">
                        <strong>Users Rated:</strong>{" "}
                        <StarRating
                          rating={Math.round(
                            reviews[item.id].reduce(
                              (sum, r) => sum + r.rating,
                              0
                            ) / reviews[item.id].length
                          )}
                        />
                        <span style={{ fontSize: "0.85em", color: "#555" }}>
                          ({reviews[item.id].length} review
                          {reviews[item.id].length > 1 ? "s" : ""})
                        </span>
                      </Card.Text>
                    </>
                  ) : (
                    <Card.Text>
                      <strong>Total Rating:</strong> ⭐ {item.rating}
                    </Card.Text>
                  )}

                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const rating = parseInt(e.target.rating.value);
                      const text = e.target.review.value;
                      handleReviewSubmit(item.id, rating, text);
                      e.target.reset();
                    }}
                  >
                    <Form.Group className="mt-2">
                      <Form.Label style={{ fontSize: "0.9em" }}>
                        Rate this:
                      </Form.Label>
                      <Form.Select name="rating" size="sm" required>
                        {[1, 2, 3, 4, 5].map((val) => (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control
                        name="review"
                        placeholder="Write a short review..."
                        className="mt-1"
                        size="sm"
                        required
                      />
                      <Button
                        type="submit"
                        variant="success"
                        size="sm"
                        className="mt-2"
                      >
                        Submit
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
                <Button
                  variant="success"
                  className="mt-3"
                  onClick={() => {
                    addToCart(item);
                    alert(`${item.name} has been added to your cart!`);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
