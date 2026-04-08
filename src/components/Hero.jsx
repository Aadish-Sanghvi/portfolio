import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <HeroSection ref={heroRef} className="reveal-on-scroll">
      <div className="grid-container">
        <div className="hero-content">
          <span className="mono-text accent-text hero-label">DATA SCIENTIST & AI ENGINEER</span>
          <h1 className="hero-title">
            Intelligence,<br/>
            Engineered.
          </h1>
          <p className="hero-positioning">
            Building at the intersection of robust data architecture and applied generative AI to solve complex enterprise challenges.
          </p>
          <a href="#projects" className="cta-button mono-text">
            View Work
          </a>
        </div>
      </div>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);

  .hero-content {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-label {
    margin-bottom: var(--space-4);
    letter-spacing: 0.05em;
  }

  .hero-title {
    font-size: clamp(4rem, 8vw, 6.5rem);
    font-weight: 500;
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin-bottom: var(--space-4);
    color: var(--text-primary);
  }

  .hero-positioning {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    max-width: 60ch;
    color: var(--text-secondary);
    margin-bottom: var(--space-6);
  }

  .cta-button {
    border: 1px solid var(--border-color);
    padding: var(--space-3) var(--space-5);
    background: transparent;
    color: var(--text-primary);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    box-shadow: 0 0 10px rgba(0, 255, 209, 0.1);
    opacity: 1;
  }

  @media (min-width: 768px) {
    .hero-content {
      grid-column: 2 / 11;
    }
  }
`;
