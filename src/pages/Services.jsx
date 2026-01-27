import PageHeader from "../components/PageHeader";
import { FaChartLine, FaBuilding, FaLaptopCode } from "react-icons/fa"; // Icons for services

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Valuation, advisory, and technology solutions tailored to real estate."
        image="/techservice.jpg"
      />

      {/* Services Section */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "3rem 0" }}>
        <div className="container" style={cardsContainerStyle}>

          {/* Valuation & Market Research */}
          <div style={cardStyle}>
            <FaChartLine size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Valuation & Market Research</h3>
            <p style={cardTextStyle}>
              Accurate valuations and thorough market research are the backbone of every sound real estate decision. Our team leverages market data, analytics, and industry expertise to provide precise property valuations and actionable market insights.
            </p>
          </div>

          {/* Real Estate Consulting */}
          <div style={cardStyle}>
            <FaBuilding size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Real Estate Consulting</h3>
            <p style={cardTextStyle}>
              Whether you are navigating acquisitions, asset management, or portfolio strategy, our consultancy services offer tailored advice to maximize value and mitigate risk. We help clients identify opportunities, assess potential, and execute with confidence.
            </p>
          </div>

          {/* Technology & Software Development */}
          <div style={cardStyle}>
            <FaLaptopCode size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Technology & Software Development</h3>
            <p style={cardTextStyle}>
              Real Assets develops innovative software solutions specifically for real estate applications. Our tools streamline complex valuation processes, improve data accuracy, and empower users with insights that save time and enhance decision-making.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

// Styles
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
