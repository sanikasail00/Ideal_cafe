import React from 'react'
import { Container, Navbar, Form, NavDropdown, Button, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
        <Navbar expand="lg" className="bg-light">
            <Container>
            <Form className="d-flex flex-grow-1" style={{ maxWidth: "900px" }}>
              <Form.Control
                type="search"
                placeholder="Search for ice creams 🍨"
                className="me-2"
                style={{ width: "100%" }}
              />
            </Form>
            </Container>

        </Navbar>
      
    </div>
  )
}
