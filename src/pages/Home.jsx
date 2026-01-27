import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Real Assets Consulting"
        description="Delivering valuation expertise, consulting services, and innovative real estate technology solutions."
        image="/hero.jpg"
      />

      {/* Who We Are Section */}
      <section>
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            At Real Assets, we blend deep market insight, expert valuations, and cutting-edge technology to help clients navigate the complex world of real estate.
          </p>
          <p>
            Real Assets is a leading consulting firm specializing in real estate valuation, market research, and advisory services. Beyond traditional consulting, 
            we harness innovative software solutions designed to provide clarity, precision, and efficiency in every real estate decision. Whether you are investing, 
            managing, or strategizing, our goal is to deliver actionable insights that drive success.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "3rem 0" }}>
        <div className="container">
          <h2>Our Core Services</h2>
          <div
            className="services-list"
            style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "1.5rem" }}
          >
            <div style={serviceCardStyle}>
              <h3>Valuation & Market Research</h3>
              <p>Comprehensive analysis to guide informed real estate decisions with precision and insight.</p>
            </div>
            <div style={serviceCardStyle}>
              <h3>Real Estate Consultancy</h3>
              <p>Strategic advice tailored to your goals, helping you identify opportunities and execute with confidence.</p>
            </div>
            <div style={serviceCardStyle}>
              <h3>Technology & Software Development</h3>
              <p>Innovative tools designed to simplify complex real estate processes and enhance decision-making.</p>
            </div>
          </div>

          <button
            style={ctaButtonStyle}
            onClick={() => (window.location.href = "/contact")}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
}

// Inline styles for simplicity
const serviceCardStyle = {
  flex: "1 1 300px",
  padding: "1.5rem",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const ctaButtonStyle = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#1E1E1E",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};


