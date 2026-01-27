import PageHeader from "../components/PageHeader";
import { FaDatabase, FaChartPie, FaCogs } from "react-icons/fa"; // Icons for technology capabilities

export default function Technology() {
  return (
    <>
      <PageHeader
        title="Technology"
        description="Data-driven tools and platforms for real estate valuation."
        image="/technology.jpg"
      />

      {/* Intro Section */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container">
          <p style={paragraphStyle}>
            Our platforms combine valuation theory with modern software engineering to support better decision-making.
          </p>
          <p style={paragraphStyle}>
            At Real Assets, we recognize that data and technology are transforming the real estate industry. That’s why we design and implement software solutions that complement our consulting services, enabling clients to leverage insights, automate processes, and make faster, smarter decisions.
          </p>
        </div>
      </section>

      {/* Technology Capabilities Section */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "3rem 0" }}>
        <div className="container" style={cardsContainerStyle}>

          {/* Data-Driven Valuation Tools */}
          <div style={cardStyle}>
            <FaDatabase size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Data-Driven Valuation Tools</h3>
            <p style={cardTextStyle}>
              Advanced software solutions for accurate and efficient property assessments, combining analytics with industry expertise.
            </p>
          </div>

          {/* Market Analytics Platforms */}
          <div style={cardStyle}>
            <FaChartPie size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Market Analytics Platforms</h3>
            <p style={cardTextStyle}>
              Interactive dashboards and reports for in-depth market analysis, providing actionable insights for smarter real estate decisions.
            </p>
          </div>

          {/* Custom Real Estate Solutions */}
          <div style={cardStyle}>
            <FaCogs size={40} color="#1E1E1E" />
            <h3 style={cardTitleStyle}>Custom Real Estate Solutions</h3>
            <p style={cardTextStyle}>
              Tailored technology solutions to meet unique business requirements and streamline complex real estate processes.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

// Styles
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

