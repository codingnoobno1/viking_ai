'use client';
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function GlitchText({ text, className = '', color = '#00d4ff', intensity = 'medium' }: GlitchTextProps) {
  const [glitched, setGlitched] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?';

  const intervals: Record<string, number> = { low: 8000, medium: 4000, high: 2000 };

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      let iterations = 0;
      const maxIter = 12;

      const interval = setInterval(() => {
        setGlitched(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < iterations / 2) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        iterations++;
        if (iterations >= maxIter) {
          clearInterval(interval);
          setGlitched(text);
          setIsGlitching(false);
        }
      }, 60);
    };

    triggerGlitch();
    const timer = setInterval(triggerGlitch, intervals[intensity]);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        color,
        textShadow: isGlitching
          ? `2px 0 #ef4444, -2px 0 #7c3aed, 0 0 20px ${color}`
          : `0 0 15px ${color}80`,
        fontFamily: "'Orbitron', monospace",
        transition: 'text-shadow 0.1s',
      }}
    >
      {glitched}
      {isGlitching && (
        <>
          <span
            className="absolute inset-0"
            style={{
              color: '#ef4444',
              clipPath: 'inset(20% 0 60% 0)',
              transform: 'translateX(-3px)',
              opacity: 0.7,
            }}
          >
            {glitched}
          </span>
          <span
            className="absolute inset-0"
            style={{
              color: '#7c3aed',
              clipPath: 'inset(65% 0 10% 0)',
              transform: 'translateX(3px)',
              opacity: 0.7,
            }}
          >
            {glitched}
          </span>
        </>
      )}
    </span>
  );
}
