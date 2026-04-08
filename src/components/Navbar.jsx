import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'achievements'];
      let current = 'about';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          if (window.scrollY >= el.offsetTop - 100) {
            current = section;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledNav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container grid-container">
        <div className="logo mono-text">
          <img src="/logo.png" alt="Aadish Sanghvi" className="nav-logo-img" />
        </div>
        <div className="nav-links">
          {['about', 'projects', 'achievements', 'skills', 'experience'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className={`nav-link ${active === item ? 'active' : ''}`}
              onClick={() => setActive(item)}
            >
              {item}
              <div className="indicator"></div>
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-4) 0;
  transition: all 0.3s ease;
  background-color: transparent;

  &.scrolled {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    padding: var(--space-3) 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* overriding grid-container explicitly for nav layout */
    display: flex;
  }

  .nav-logo-img {
    height: 32px;
    width: auto;
    object-fit: contain;
    filter: invert(var(--logo-invert, 0));
    transition: filter 0.3s ease;
  }

  .nav-links {
    display: flex;
    gap: var(--space-5);
  }

  .nav-link {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    text-transform: lowercase;
    position: relative;
    padding: var(--space-1) 0;
  }

  .indicator {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--accent-color);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .nav-link.active .indicator {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none; /* simple mobile nav for now, can implement menu later */
    }
  }
`;

export default Navbar;
