import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import images from "../assets/images/choco.jpg"
// Sample data for carousel, dishes, and testimonials
const carouselImages = [
  { src: {images}, caption: "Award-Winning Flavors" },
  { src: "/images/icecream2.jpg", caption: "Delicious & Creamy" },
  { src: "/images/icecream3.jpg", caption: "Refreshing & Tasty" },
];

const popularDishes = [
  { name: "Gadbad Ice Cream", img: "/images/gadbad.jpg", desc: "A delightful mix of flavors and textures!" },
  { name: "Chocolate Fudge", img: "/images/choclate_fudge.jpg", desc: "Rich and creamy chocolate delight!" },
  { name: "Mango Delight", img: "/images/mango.jpg", desc: "Fresh mango ice cream with a smooth texture!" },
];

const testimonials = [
  { name: "Amit Sharma", review: "Best ice cream I've ever had!", rating: "⭐⭐⭐⭐⭐" },
  { name: "Priya R.", review: "Absolutely delicious flavors, will visit again!", rating: "⭐⭐⭐⭐⭐" },
];

const Home = () => {
  return (
    <Container fluid className="p-0">
      {/* Hero Banner - Carousel (Moved Down with margin-top) */}
      <Carousel className="mt-5">
        {carouselImages.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.src} alt={`Slide ${index}`} />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Popular Dishes */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <Row>
          {popularDishes.map((dish, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={dish.img} />
                <Card.Body>
                  <Card.Title>{dish.name}</Card.Title>
                  <Card.Text>{dish.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Customer Testimonials */}
      <Container className="mt-5 bg-light p-4">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Row>
          {testimonials.map((test, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card className="p-3">
                <Card.Body>
                  <Card.Title>{test.name}</Card.Title>
                  <Card.Text>{test.review}</Card.Text>
                  <Card.Text>{test.rating}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Exclusive Offers */}
      <Container className="mt-5 text-center bg-warning p-4">
        <h2>Exclusive Offers</h2>
        <p>Happy Hours: Buy 1 Get 1 Free (4 PM - 6 PM)!</p>
        <p>Seasonal Specials Available Now!</p>
      </Container>
    </Container>
  );
};

export default Home;
