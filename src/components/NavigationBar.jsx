import React from "react";
import {
  Container,
  Navbar,
  Form,
  NavDropdown,
  Button,
  Nav,
} from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-light">
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex flex-grow-1" style={{ maxWidth: "900px" }}>
              <Form.Control
                type="search"
                placeholder="Search for ice creams 🍨"
                className="me-2"
                style={{ width: "100%" }}
              />
            </Form>
            <Nav className="d-flex flex-wrap">
               <Nav.Link >Home</Nav.Link>
               <Nav.Link >Menu</Nav.Link>
               <Nav.Link >Offers</Nav.Link>
               <Nav.Link >Location</Nav.Link>
               <Nav.Link >Contact Us</Nav.Link>
               <Nav.Link >Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
