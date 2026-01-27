import PageHeader from "./PageHeader";

export default function About() {
  return (
    <>
      <PageHeader
        title="Real Assets Consulting"
        description="Delivering valuation expertise, consulting services, and innovative real estate technology solutions."
        image="/hero.jpg"
      />

      <section>
        <div className="container">
          <h2>About Real Assets</h2>
          <p>
            Real Assets is a consulting firm focused on valuation research, real
            estate consulting, and technology-driven solutions.
          </p>
          <p style={{ marginTop: "15px" }}>
            We leverage deep understanding of real estate markets—particularly
            the valuation space—to develop software and analytical platforms
            that solve real-world problems.
          </p>
        </div>
      </section>
    </>
  );
}
