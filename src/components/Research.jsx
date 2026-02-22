function Research() {
  return (
    <section className="section" id="research">
      <h2 className="research-title">RESEARCHES</h2>
      <div className="card-grid">
        {[1, 2, 3].map((item) => (
          <div key={item} className="card research-card">
            <button className="btn">Read</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
