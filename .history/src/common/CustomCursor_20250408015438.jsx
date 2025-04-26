import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // We'll style it separately

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
  
    useEffect(() => {
      const move = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      const handleMouseDown = () => setIsDragging(true);
      const handleMouseUp = () => setIsDragging(false);
  
      document.addEventListener('mousemove', move);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, []);
  return (
    <div
      className={`custom-cursor ${isDragging ? 'dragging' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  )
}

export default CustomCursor
