import React, { useState, useEffect } from 'react';
import { FaLocationArrow, FaPlus, FaHome, FaClock, FaEllipsisH, FaShareAlt } from 'react-icons/fa';
import { Card, Form, Button, Row, Col, ListGroup, Badge } from 'react-bootstrap';

const deliveryPins = ['574142', '575001', '576101'];

const LocationSelector = () => {
  const [pinCode, setPinCode] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [locationText, setLocationText] = useState('Detecting...');
  const [item, setItem] = useState({ name: '', price: '' });
  const [menu, setMenu] = useState([
    { id: 1, name: 'Cappuccino', price: 150 },
    { id: 2, name: 'Cheese Sandwich', price: 120 },
    { id: 3, name: 'Cold Coffee', price: 100 }
  ]);

  const savedAddresses = [
    {
      label: "Home",
      address: "thekkunje house, Mithakodi, Karnataka, India",
      phone: "+91-7204720276",
      distance: "17 km"
    }
  ];

  const recentLocations = [
    { label: "Balthila", address: "India", time: "0 m" },
    { label: "Balthila", address: "India", time: "27 m" },
    { label: "Home", address: "thekkunje house, Mithakodi, Karnataka, India", time: "17 km" }
  ];

  const checkDelivery = (pincode) => {
    setPinCode(pincode);
    if (deliveryPins.includes(pincode)) {
      setStatusMsg('✅ We deliver to your location!');
    } else {
      setStatusMsg('❌ Sorry, we do not deliver here yet.');
    }
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocationText(`Lat: ${latitude.toFixed(3)}, Lng: ${longitude.toFixed(3)}`);

        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          const pincode = data.address?.postcode;
          if (pincode) {
            checkDelivery(pincode);
          } else {
            setStatusMsg('⚠️ Could not detect pincode.');
          }
        } catch (err) {
          setStatusMsg('❌ Error getting location info.');
        }
      });
    } else {
      setStatusMsg('❌ Geolocation not supported.');
    }
  };

  useEffect(() => {
    detectLocation();
  }, []);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: menu.length + 1,
      name: item.name,
      price: parseFloat(item.price)
    };
    setMenu([...menu, newItem]);
    setItem({ name: '', price: '' });
  };

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>📍 Select a Location</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for area, street name..."
        style={styles.searchInput}
      />

      {/* Current Location */}
      <div style={styles.locationBox}>
        <FaLocationArrow color="#e91e63" />
        <div style={styles.locationInfo}>
          <p style={styles.locationTextRed}>Use current location</p>
          <p style={styles.subText}>{locationText}</p>
        </div>
      </div>

      {/* Manual Pincode Input */}
      <input
        type="text"
        maxLength="6"
        placeholder="Enter Pincode"
        style={styles.searchInput}
        onChange={(e) => checkDelivery(e.target.value)}
      />
      <p style={{ ...styles.subText, color: "#2c3e50", marginBottom: "10px" }}>
        {statusMsg}
      </p>

      {/* Add Address */}
      <div style={styles.locationBox}>
        <FaPlus color="#e91e63" />
        <p style={styles.locationTextRed}>Add Address</p>
      </div>

      {/* Saved Addresses */}
      <h4 style={styles.sectionHeader}>SAVED ADDRESSES</h4>
      {savedAddresses.map((item, index) => (
        <div key={index} style={styles.savedBox}>
          <div style={styles.rowSpaceBetween}>
            <div style={styles.row}>
              <FaHome size={20} />
              <div style={styles.locationInfo}>
                <p><strong>{item.label}</strong></p>
                <p style={styles.subText}>{item.address}</p>
                <p style={styles.subText}>Phone number: <strong>{item.phone}</strong></p>
              </div>
            </div>
            <p style={styles.distance}>{item.distance}</p>
          </div>
          <div style={styles.actions}>
            <FaEllipsisH size={18} />
            <FaShareAlt size={18} />
          </div>
        </div>
      ))}

      {/* Recent Locations */}
      <h4 style={styles.sectionHeader}>RECENT LOCATIONS</h4>
      {recentLocations.map((item, index) => (
        <div key={index} style={styles.recentBox}>
          <FaClock size={16} />
          <div style={styles.recentText}>
            <p><strong>{item.label}</strong></p>
            <p style={styles.subText}>{item.address}</p>
          </div>
          <span style={styles.time}>{item.time}</span>
        </div>
      ))}

      {/* Admin Dashboard */}
      <h3 className="mt-5 mb-3">☕ Ideal Cafe Admin Dashboard</h3>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add New Menu Item</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price (₹)"
                  value={item.price}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={2}>
                <Button type="submit" className="w-100" variant="success">
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Menu List */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Current Menu</Card.Title>
          <ListGroup>
            {menu.map((m) => (
              <ListGroup.Item key={m.id} className="d-flex justify-content-between align-items-center">
                {m.name}
                <Badge bg="primary">₹{m.price}</Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Sales Overview */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Daily Sales Overview</Card.Title>
          <p>Total Orders: <strong>45</strong></p>
          <p>Total Revenue: <strong>₹6,750</strong></p>
          <p>Best Seller: <strong>Cold Coffee</strong></p>
        </Card.Body>
      </Card>

      <p style={styles.footer}>powered by <span style={{ color: "#4285F4", fontWeight: "bold" }}>Google</span></p>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: "sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9fb",
    minHeight: "100vh"
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold"
  },
  searchInput: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px"
  },
  locationBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.05)",
    cursor: "pointer"
  },
  locationInfo: {
    lineHeight: "1.4"
  },
  locationTextRed: {
    color: "#e91e63",
    fontWeight: "bold"
  },
  subText: {
    fontSize: "13px",
    color: "#555"
  },
  sectionHeader: {
    marginTop: "25px",
    fontSize: "14px",
    color: "#777",
    fontWeight: "bold",
    letterSpacing: "1px"
  },
  savedBox: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "10px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.05)"
  },
  rowSpaceBetween: {
    display: "flex",
    justifyContent: "space-between"
  },
  row: {
    display: "flex",
    gap: "10px"
  },
  distance: {
    fontSize: "13px",
    color: "#777"
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px"
  },
  recentBox: {
    backgroundColor: "#fff",
    padding: "12px",
    borderRadius: "10px",
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.05)"
  },
  recentText: {
    flex: 1
  },
  time: {
    fontSize: "12px",
    color: "#999"
  },
  footer: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "13px",
    color: "#888"
  }
};

export default LocationSelector;
