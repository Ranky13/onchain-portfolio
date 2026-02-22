import { FaGlobe, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-box">
        <h2>Get in Touch</h2>

        <div className="contact-row">
          <div className="contact-item">
            <FaGlobe />
            <span></span>
            <a href="https://www.github.com/rankky13" target="_blank" rel="noopener noreferrer">www.github.com/rankky13</a>
          </div>
          <div className="contact-item">
            <FaLinkedin />
            <a href="https://linkedin.com/in/rokeeb-bashir" target="_blank" rel="noopener noreferrer">linkedin.com/rokeeb-bashir</a>
          </div>
        <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:bashirokeeb1234@gmail.com">bashirokeeb1234@gmail.com</a>
        </div>

        <div className="contact-item">
            <FaXTwitter />
            <a href="https://x.com/Rankyyy_" target="_blank" rel="noopener noreferrer">@Rankyyy_</a>
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
