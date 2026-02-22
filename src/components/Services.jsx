function Services() {
  const services = [
    "Onchain Dashboard Developments",
    "Blockchain & Web3 Research Consulting",
    "On-Chain Data Strategy & Implementation",
    "Online Training & Mentorship"
  ];

  return (
    <section className="section">
      <h2>Services</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <div key={index} className="card outline-card">
            <h3>{service}</h3>
            <p>Professional service tailored for Web3 analytics.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
