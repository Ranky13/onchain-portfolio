import pfp from '../img/pfp.png';
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1 className="gradient-text">Rokeeb Bashir</h1>
        <h3>On-Chain Analyst & Web3 Researcher</h3>
        <div className="hero-buttons">
          <button className="btn">About me</button>
          <a href="/Rokeeb-Bashir-CV.pdf" download className="btn-outline download-btn"><span>Download CV <FaDownload /></span></a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-circle">
          <img src={pfp} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
