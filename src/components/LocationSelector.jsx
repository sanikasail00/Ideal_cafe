import React from "react";
import { FaLocationArrow, FaPlus, FaHome, FaClock, FaEllipsisH, FaShareAlt } from "react-icons/fa";

const LocationSelector = () => {
  const currentLocation = "Karnataka, India";
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

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>▼ Select a location</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for area, street name..."
        style={styles.searchInput}
      />

      {/* Current location */}
      <div style={styles.locationBox}>
        <FaLocationArrow color="#e91e63" />
        <div style={styles.locationInfo}>
          <p style={styles.locationTextRed}>Use current location</p>
          <p style={styles.subText}>{currentLocation}</p>
        </div>
      </div>

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

      {/* Footer */}
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
    fontSize: "20px",
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
