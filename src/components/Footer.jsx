import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container" style={footerGridStyle}>
        {/* Company Info */}
        <div>
          <h3 style={companyTitleStyle}>Real Assets</h3>
          <p>Valuation • Consulting • Technology</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={sectionTitleStyle}>Navigation</h4>
          <ul style={navListStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About</Link></li>
            <li><Link to="/services" style={linkStyle}>Services</Link></li>
            <li><Link to="/technology" style={linkStyle}>Technology</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 style={sectionTitleStyle}>Connect</h4>
          <div style={socialContainerStyle}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FaTwitter size={20} /> Twitter
            </a>
            <a href="mailto:info@realassets.com" style={socialLinkStyle}>
              <FaEnvelope size={20} /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBarStyle}>
        <p>© {new Date().getFullYear()} Real Assets. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Styles
const footerStyle = {
  backgroundColor: "#1E1E1E",
  color: "#fff",
  marginTop: "3rem",
  fontSize: "0.95rem",
};

const footerGridStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "space-between",
  padding: "2rem 1rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const companyTitleStyle = { fontSize: "1.5rem", marginBottom: "0.5rem" };
const sectionTitleStyle = { fontSize: "1.2rem", marginBottom: "0.5rem" };

const navListStyle = { listStyle: "none", padding: 0, margin: 0 };
const linkStyle = { color: "#fff", textDecoration: "none", display: "block", marginBottom: "0.5rem" };

const socialContainerStyle = { display: "flex", flexDirection: "column", gap: "0.5rem" };
const socialLinkStyle = { color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" };

const bottomBarStyle = {
  borderTop: "1px solid rgba(255,255,255,0.2)",
  textAlign: "center",
  padding: "1rem",
  marginTop: "1rem",
};


