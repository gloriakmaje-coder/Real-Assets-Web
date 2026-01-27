import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <Link to="/" style={logoContainerStyle}>
        <img
          src="/RealAssetsLogo.jpeg"
          alt="Real Assets Logo"
          style={logoStyle}
        />
      </Link>

      {/* Desktop Menu */}
      <ul style={{ ...menuStyle, display: isOpen ? "flex" : "flex" }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/technology" style={linkStyle}>Technology</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div style={mobileToggleStyle} onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <ul style={mobileMenuOverlayStyle}>
          <li><Link to="/" style={mobileLinkStyle} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" style={mobileLinkStyle} onClick={toggleMenu}>About</Link></li>
          <li><Link to="/services" style={mobileLinkStyle} onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/technology" style={mobileLinkStyle} onClick={toggleMenu}>Technology</Link></li>
          <li><Link to="/contact" style={mobileLinkStyle} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

// Styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  position: "relative",
  zIndex: 1000,
};

const logoContainerStyle = { display: "flex", alignItems: "center" };
const logoStyle = { height: "90px", objectFit: "contain" }; // larger logo

const menuStyle = {
  display: "flex",
  gap: "25px",
  listStyle: "none",
};

const linkStyle = {
  textDecoration: "none",
  color: "#1E1E1E",
  fontWeight: "500",
  transition: "color 0.3s",
};

const mobileToggleStyle = {
  display: "none",
  cursor: "pointer",
};

// Mobile menu overlay
const mobileMenuOverlayStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1.5rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const mobileLinkStyle = {
  textDecoration: "none",
  color: "#1E1E1E",
  fontWeight: "500",
};

// Media Queries
// Add these in your CSS file or use a CSS-in-JS solution like styled-components
/*
@media (max-width: 768px) {
  .menu { display: none; }
  .mobileToggle { display: block; }
}
*/


