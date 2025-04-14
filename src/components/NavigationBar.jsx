import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Form,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo/ideal.png";
import { useCart } from "../components/contexts/CartContext"; // Import the useCart hook

export default function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);
  const { cartItems } = useCart();  // Get cartItems from CartContext

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar expand="lg" className={darkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"}>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" width="100" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex flex-grow-1 me-3" style={{ maxWidth: "900px" }}>
              <Form.Control
                type="search"
                placeholder="Search for ice creams 🍨"
                className="me-2"
                style={{
                  width: "100%",
                  backgroundColor: darkMode ? "#2c2c2c" : "#fff",
                  color: darkMode ? "#fff" : "#000",
                  borderColor: darkMode ? "#444" : "#ccc",
                }}
              />
            </Form>

            <Nav className="d-flex align-items-center ms-auto gap-3">
              <Nav.Link as={Link} to="/" className={darkMode ? "text-white" : "text-dark"}>Home</Nav.Link>
              <Nav.Link as={Link} to="/menu" className={darkMode ? "text-white" : "text-dark"}>Menu</Nav.Link>
              <Nav.Link as={Link} to="/Offers" className={darkMode ? "text-white" : "text-dark"}>Offers</Nav.Link>
              <Nav.Link as={Link} to="/location" className={darkMode ? "text-white" : "text-dark"}>Locations</Nav.Link>
              <Nav.Link as={Link} to="/Contact Us" className={darkMode ? "text-white" : "text-dark"}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/Sign In"className={darkMode ? "text-white" : "text-dark"}>Sign In</Nav.Link>

              {/* Cart Icon with Item Count */}
              <Nav.Link as={Link} to="/cart" className={darkMode ? "text-white" : "text-dark"}>
                <FaShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="badge bg-warning text-dark ms-1">
                    {totalItems}
                  </span>
                )}
              </Nav.Link>

              {/* Dark Mode Toggle */}
              <Nav.Link
                onClick={() => setDarkMode(!darkMode)}
                className={darkMode ? "text-white" : "text-dark"}
                style={{ cursor: "pointer" }}
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
