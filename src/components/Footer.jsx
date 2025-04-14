import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <Container>
        <Row>
          <Col>
            <h5>About Us</h5>
            <p>
              Your favorite place for ice cream and desserts. We offer a wide
              variety of delicious flavors that everyone loves.
            </p>
          </Col>
          <Col>
            <h5>Follow Us</h5>
            <p>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Facebook
              </a>
              <br />
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Instagram
              </a>
              <br />
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Twitter
              </a>
            </p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p>Email: info@icecreamparadise.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
        </Row>
        <p className="mt-4 mb-0">
          © 2025 Ice Cream Paradise. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
