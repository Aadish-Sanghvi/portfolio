import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <ToggleButton onClick={toggle} className="mono-text" aria-label="Toggle Theme">
      {theme === 'light' ? 'DARK' : 'LIGHT'}
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`;
