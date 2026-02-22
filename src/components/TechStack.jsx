function TechStack() {
  const logos = [
    "dune.png",
    "sql (1).png",
    "pandas (1).png",
    "matplotlip (1).png",
    "flipside.png",
    "nansen (1).png",
    "arkhm.png",
    "airflow (2).png",
    "snowflake (1).png",
    "power bi (1).png",
    "excel (1).png",
  ];

  return (
    <div className="tech-stack">
      <div className="logo-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={`/logos/${logo}`} alt="tech-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
