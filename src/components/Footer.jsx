import React from 'react';
import './Projects.css';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <section id="contact" className="contact section container">
        <div className="section-header fade-in">
          <span className="section-subtitle">CONTACT</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">Feel free to reach out — whether it's about a role, a project idea, or just to talk AI/ML.</p>
        </div>

        <div className="contact-links fade-in delay-1">
          <a href="mailto:aadishsanghvi1008@gmail.com" className="contact-btn">
            <span className="contact-emoji">📧</span> aadishsanghvi1008@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/aadish-sanghvi/" target="_blank" rel="noreferrer" className="contact-btn">
            <span className="contact-emoji">💼</span> LinkedIn
          </a>
          <a href="https://github.com/Aadish-Sanghvi" target="_blank" rel="noreferrer" className="contact-btn">
            <span className="contact-emoji">💻</span> GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <span className="copyright">© {new Date().getFullYear()} Aadish Sanghvi.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
