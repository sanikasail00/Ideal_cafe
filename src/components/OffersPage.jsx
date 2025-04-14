import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const offersData = [
  {
    id: 1,
    title: "Ice Cream Sundae",
    description: "Delicious ice cream sundae topped with nuts and chocolate syrup.",
    price: "$5.99",
    image: "path/to/ice-cream-sundae.jpg", // Replace with your image path
  },
  {
    id: 2,
    title: "Falooda",
    description: "Traditional falooda with rose syrup, vermicelli, and basil seeds.",
    price: "$4.99",
    image: "path/to/falooda.jpg", // Replace with your image path
  },
  // Add more offers as needed
];

const OffersPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Special Offers</h1>
      <Row>
        {offersData.map((offer) => (
          <Col md={4} key={offer.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={offer.image} alt={offer.title} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Text className="font-weight-bold">{offer.price}</Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffersPage;