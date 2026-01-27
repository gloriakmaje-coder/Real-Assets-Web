import PageHeader from "../components/PageHeader";
import { FaBullseye, FaCompass } from "react-icons/fa"; // Icons for Commitment and Direction

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Deep expertise in valuation, consulting, and real estate technology."
        image="/propertyservice.jpg"
      />

      {/* Headline Section */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container">
          <h2 style={headlineStyle}>Your Trusted Partner in Real Estate Expertise and Innovation</h2>
          <p style={paragraphStyle}>
            Founded with a vision to redefine real estate consulting, Real Assets combines traditional expertise with modern technology. We focus on delivering precise valuations, insightful market research, and tailored advisory services while developing software solutions that streamline real estate processes.
          </p>
          <p style={paragraphStyle}>
            Our team is driven by a deep understanding of property markets, investment dynamics, and valuation methodologies. By integrating technology into our services, we help clients make data-driven decisions faster and more efficiently than ever before.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "3rem 0" }}>
        <div className="container" style={cardsContainerStyle}>
          
          {/* Our Commitment Card */}
          <div style={cardStyle}>
            <FaBullseye size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Our Commitment</h3>
            <p style={cardTextStyle}>
              To empower real estate professionals and investors with accurate insights, strategic guidance, and innovative tools that drive better outcomes.
            </p>
          </div>

          {/* Our Direction Card */}
          <div style={cardStyle}>
            <FaCompass size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Our Direction</h3>
            <p style={cardTextStyle}>
              To be the leading consultancy where real estate knowledge meets technology, enabling smarter and more efficient property decisions worldwide.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

// Styles
const headlineStyle = { fontSize: "2rem", fontWeight: "700", marginBottom: "1.5rem" };
const paragraphStyle = { fontSize: "1.1rem", lineHeight: "1.8rem", marginBottom: "1rem" };

const cardsContainerStyle = {
  display: "flex",
  gap: "2rem",
  flexWrap: "wrap",
  justifyContent: "center",
};

const cardStyle = {
  flex: "1 1 300px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "2rem",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  minWidth: "280px",
};

const cardTitleStyle = { fontSize: "1.5rem", marginTop: "1rem", marginBottom: "1rem" };
const cardTextStyle = { fontSize: "1rem", lineHeight: "1.6rem", color: "#555" };


