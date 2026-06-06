'use client';
import { useEffect, useRef } from 'react';

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコ'.split('');

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 20);
    const drops: number[] = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 4, 9, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const progress = y / (canvas.height / 20);
        
        if (progress < 0.3) {
          ctx.fillStyle = '#00ffff';
          ctx.shadowColor = '#00d4ff';
          ctx.shadowBlur = 8;
        } else if (progress < 0.7) {
          ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
          ctx.shadowBlur = 2;
        } else {
          ctx.fillStyle = 'rgba(0, 80, 120, 0.3)';
          ctx.shadowBlur = 0;
        }

        ctx.font = '14px "Share Tech Mono"';
        ctx.fillText(char, i * 20, y * 20);

        if (y * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
    />
  );
}
