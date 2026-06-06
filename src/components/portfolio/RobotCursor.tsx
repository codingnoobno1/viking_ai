'use client';
import { useEffect, useState } from 'react';

export default function RobotCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    let animId: number;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const animateTrail = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      animId = requestAnimationFrame(animateTrail);
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    animId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[10000] transition-transform duration-75"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: '8px',
          height: '8px',
          background: '#00d4ff',
          borderRadius: '50%',
          boxShadow: clicking ? '0 0 20px #00d4ff, 0 0 40px #00d4ff' : '0 0 8px #00d4ff',
          transform: clicking ? 'scale(1.8)' : 'scale(1)',
        }}
      />

      {/* Trailing ring */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: trail.x - 16,
          top: trail.y - 16,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(0,212,255,0.5)',
          borderRadius: '50%',
          transition: 'none',
        }}
      />

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: trail.x - 24,
          top: trail.y - 24,
          width: '48px',
          height: '48px',
          border: '1px solid rgba(0,212,255,0.15)',
          borderRadius: '50%',
        }}
      />
    </>
  );
}
