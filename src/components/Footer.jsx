import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <FooterSection ref={sectionRef} className="reveal-on-scroll grid-container">
      <div className="section-header">
        <span className="section-label">05. CONTACT</span>
      </div>

      <div className="contact-content">
        <a href="mailto:aadishsanghvi1008@gmail.com" className="email-link">
          aadishsanghvi1008@gmail.com
        </a>
        <div className="wallet-address mono-text">
          <span className="accent-text">ETH</span> 0x8F9B...3A2F
        </div>
      </div>

      <div className="footer-bottom mono-text">
        <span>© {new Date().getFullYear()} AADISH SANGHVI</span>
        <div className="socials">
          <a href="https://github.com/Aadish-Sanghvi" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/aadish-sanghvi/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </div>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  padding-top: var(--space-8);
  padding-bottom: var(--space-6);

  .section-header {
    grid-column: 1 / -1;
  }

  .contact-content {
    grid-column: 1 / -1;
    margin-bottom: var(--space-8);
  }

  .email-link {
    display: block;
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    margin-bottom: var(--space-4);
    transition: opacity 0.3s ease;
  }

  .email-link:hover {
    opacity: 0.6;
  }

  .wallet-address {
    font-size: 0.85rem;
    color: var(--text-secondary);
    letter-spacing: 0.05em;
  }

  .footer-bottom {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border-color);
    padding-top: var(--space-4);
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .socials {
    display: flex;
    gap: var(--space-4);
  }

  .socials a:hover {
    color: var(--accent-color);
  }

  @media (min-width: 768px) {
    .contact-content {
      grid-column: 2 / 12;
    }
  }
`;
