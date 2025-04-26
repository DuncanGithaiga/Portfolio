import React, { useState, useEffect } from 'react';
import './GlowBackground.css';

const GlowBackground = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div className="glow-wrapper">
      <div
        className="glow-effect"
        style={{
          left: coords.x,
          top: coords.y,
        }}
      />
    </div>
  );
};

export default GlowBackground;
