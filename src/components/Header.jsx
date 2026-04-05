import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
  return (
    <header className="header glass">
      <div className="container header-content">
        <a href="#" className="logo-link">
          <img src="/logo.png" alt="Aadish Logo" className="header-logo" />
        </a>
      </div>
    </header>
  );
}
