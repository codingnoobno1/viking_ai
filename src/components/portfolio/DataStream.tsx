'use client';
import { useEffect, useRef } from 'react';

export default function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const streams: { x: number; y: number; speed: number; chars: string[]; color: string }[] = [];
    const count = Math.floor(canvas.width / 30);

    for (let i = 0; i < count; i++) {
      const chars = [];
      for (let j = 0; j < 15; j++) {
        chars.push(Math.random() > 0.5 ? '1' : '0');
      }
      streams.push({
        x: i * 30 + 15,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
        chars,
        color: i % 4 === 0 ? '#00d4ff' : i % 4 === 1 ? '#7c3aed' : i % 4 === 2 ? '#10b981' : '#f59e0b',
      });
    }

    let animId: number;
    const draw = () => {
      ctx.fillStyle = 'rgba(2,4,9,0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      streams.forEach(s => {
        s.chars.forEach((char, i) => {
          const alpha = 1 - i / s.chars.length;
          const y = s.y - i * 16;
          ctx.font = '11px "Share Tech Mono"';
          ctx.fillStyle = i === 0 ? '#ffffff' : s.color + Math.floor(alpha * 180).toString(16).padStart(2, '0');
          ctx.shadowColor = s.color;
          ctx.shadowBlur = i === 0 ? 8 : 0;
          ctx.fillText(char, s.x, y);
          ctx.shadowBlur = 0;

          if (Math.random() > 0.97) {
            s.chars[i] = Math.random() > 0.5 ? '1' : '0';
          }
        });

        s.y += s.speed;
        if (s.y - s.chars.length * 16 > canvas.height) {
          s.y = 0;
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded font-mono-tech text-xs text-cyan-400">
            <span className="animate-pulse">◆</span>
            LIVE DATA STREAM VISUALIZATION
            <span className="animate-pulse">◆</span>
          </div>
        </div>
        <div className="glass-card border border-cyan-500/15 rounded-xl overflow-hidden" style={{ height: '200px' }}>
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
