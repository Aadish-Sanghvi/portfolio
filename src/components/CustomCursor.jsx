import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      // Small delay using requestAnimationFrame for smoother lag effect if needed,
      // but just updating state here and adding CSS transition to transform handles it well.
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        border: '1px solid var(--accent-color)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        zIndex: 9999,
        transition: 'transform 0.1s ease-out',
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor;
