import PageHeader from "../components/PageHeader";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Connect with our consulting and technology teams."
        image="/contactUsWhite.jpg"
      />

      {/* Contact Info Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "#f9f9f9" }}>
        <div className="container" style={infoContainerStyle}>
          <div style={infoCardStyle}>
            <FaEnvelope size={30} color="#1E1E1E" />
            <h3 style={infoTitleStyle}>Email</h3>
            <p>info@realassets.com</p>
          </div>
          <div style={infoCardStyle}>
            <FaPhone size={30} color="#1E1E1E" />
            <h3 style={infoTitleStyle}>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div style={infoCardStyle}>
            <FaMapMarkerAlt size={30} color="#1E1E1E" />
            <h3 style={infoTitleStyle}>Address</h3>
            <p>123 Real Assets Avenue, Suite 100<br />City, State, ZIP</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container" style={formContainerStyle}>
          <h2>Send Us a Message</h2>
          <form style={formStyle}>
            <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
            <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
            <input type="text" name="subject" placeholder="Subject" style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows="6" required style={textareaStyle}></textarea>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

// Styles
const infoContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center",
};

const infoCardStyle = {
  flex: "1 1 250px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "2rem",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const infoTitleStyle = { fontSize: "1.2rem", marginTop: "0.5rem", marginBottom: "0.5rem" };

const formContainerStyle = { maxWidth: "700px", margin: "0 auto", textAlign: "center" };

const formStyle = { display: "flex", flexDirection: "column", gap: "1rem" };

const inputStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const textareaStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  resize: "vertical",
};

const buttonStyle = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#1E1E1E",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer",
};
