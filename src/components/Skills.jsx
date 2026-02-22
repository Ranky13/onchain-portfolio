import { FaLink, FaChartLine, FaSearch, FaDatabase } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaLink />,
      title: "Blockchain & On-Chain Domain Expertise",
      description:
        "Deep understanding of blockchain mechanics (transactions, smart contracts, addresses, gas/fees, consensus) and on-chain metrics interpretation — including wallet behaviors, transaction flows, smart-money accumulation/distribution, whale movements, liquidity dynamics, TVL trends, network adoption signals, protocol fundamentals, and cross-chain activity. Enables precise analysis of DeFi, NFTs, Layer 1/2 ecosystems, and crypto market intelligence."
    },
    {
      icon: <FaChartLine />,
      title: "Visualization, Dashboard Development & Design",
      description:
        "Microsoft Certified: Power BI Data Analyst Associate — Expert-level mastery of Power BI for building interactive, automated, real-time dashboards and compelling data stories. Proficient in Tableau and Excel for rapid prototyping; uses Figma and PowerPoint to create premium, intuitive layouts — ensuring high visual impact, stakeholder clarity, and executive-ready deliverables for on-chain insights."
    },
    {
      icon: <FaSearch />,
      title: "Web3 Research & Investigative Analysis",
      description:
        "Strong research capabilities for protocol deep-dives, trend forecasting, qualitative and quantitative assessment of Web3 projects and technologies, and identification of opportunities and risks. Includes monitoring development communities, token economics, governance models, adoption drivers, security incidents, and market narratives — producing actionable insights, reports, and strategic recommendations for investors, traders, and Web3 teams."
    },
    {
      icon: <FaDatabase />,
      title: "Data Querying, Extraction & Processing",
      description:
        "Advanced SQL proficiency for custom blockchain queries and aggregation (via Dune Analytics, blockchain explorers); expertise with specialized platforms like Nansen, Glassnode, Arkham Intelligence, and others. Combined with Python (Pandas for ETL, data cleaning, pattern detection, statistical analysis) to handle large-scale on-chain datasets and automate research workflows."
    }
  ];

  return (
    <section className="section" id="skills">
      <h2>Key Skills</h2>

      <div className="card-grid">
        {skills.map((skill, index) => (
          <div key={index} className="card skill-card">
            <div className="skill-header">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
            </div>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
