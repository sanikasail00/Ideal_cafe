

// export default Home;
import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import "../App.css";

// ✅ Correctly Import Images
import cafe1 from "../assets/images/cafe1.jpg";
import gudbud from "../assets/images/gudbud.jpg";
import mango from "../assets/images/mango.jpg";
import munchoori from "../assets/images/munchoori.jpg";  // Correct path
import icecream from "../assets/images/icecream.jpg";
import cafe3 from "../assets/images/cafe3.jpg";
import cafe2 from "../assets/images/cafe2.jpg";
import thiramisu from "../assets/images/thiramisu.jpg";
// Custom component
import IceCreamOfTheDay from './Icecreamofday';

// Sample data for carousel, dishes, and testimonials
const carouselImages = [
  { src: munchoori, caption: "Award-Winning Flavors" },
  { src: icecream, caption: "Delicious & Creamy" },
  // { src: cafe, caption: "Refreshing & Tasty" },
  { src: cafe3, caption: "Savor Moments Over Scoop" },

];

const popularDishes = [
  { name: "Gadbad Ice Cream", img: gudbud, desc: "A delightful mix of flavors and textures!" },
  { name: "Tiramisu Ice Cream", img: thiramisu, desc: "A creamy fusion of coffee, cocoa, and mascarpone magic!" },

  { name: "Icecream Thali", img: cafe2, desc: "Rich and creamy Icecream Thali!" },
  // { name: "Mango Delight", img: mango, desc: "Fresh mango ice cream with a smooth texture!" },
];

const testimonials = [
  { name: "Amit Sharma", review: "Best ice cream I've ever had!", rating: "⭐⭐⭐⭐⭐" },
  { name: "Priya R.", review: "Absolutely delicious flavors, will visit again!", rating: "⭐⭐⭐⭐⭐" },
];

const Home = () => {
  return (
    <Container fluid className="p-0">
      {/* Hero Banner - Carousel */}
      <Carousel className="mt-5">
        {carouselImages.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={`Slide ${index}`}
              style={{
                height: "400px",               // Fixed height
                width: "auto",                 // Auto width to maintain aspect ratio
                objectFit: "cover",            // Cover the space while maintaining aspect ratio
                margin: "0 auto",              // Center the image horizontally
              }}
            />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Ice Cream of the Day Section */}
      <IceCreamOfTheDay />

      {/* Popular Dishes Section */}
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

      {/* Testimonials Section */}
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

      {/* Exclusive Offers Section */}
      <Container className="mt-5 text-center bg-warning p-4">
        <h2>Exclusive Offers</h2>
        <p>Happy Hours: Buy 1 Get 1 Free (4 PM - 6 PM)!</p>
        <p>Seasonal Specials Available Now!</p>
      </Container>

     
    </Container>
  );
};

export default Home;
