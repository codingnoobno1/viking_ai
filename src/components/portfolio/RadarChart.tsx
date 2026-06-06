'use client';
import { useEffect, useRef } from 'react';

export default function RadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const skills = [
    { label: 'AI/ML', value: 0.97 },
    { label: 'Backend', value: 0.89 },
    { label: 'Frontend', value: 0.92 },
    { label: 'Cloud', value: 0.85 },
    { label: 'Research', value: 0.88 },
    { label: 'Design', value: 0.80 },
    { label: 'Leadership', value: 0.87 },
    { label: 'DevOps', value: 0.83 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = Math.min(canvas.offsetWidth, 400);
    canvas.width = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;
    const r = size / 2 - 40;
    const count = skills.length;
    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      frame++;

      const angleStep = (Math.PI * 2) / count;
      const pulse = (Math.sin(frame * 0.03) + 1) / 2;

      // Draw grid rings
      for (let ring = 1; ring <= 5; ring++) {
        const rr = (r * ring) / 5;
        ctx.beginPath();
        for (let i = 0; i <= count; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const x = cx + rr * Math.cos(angle);
          const y = cy + rr * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(0,212,255,${0.08 + (ring === 5 ? 0.05 : 0)})`;
        ctx.lineWidth = ring === 5 ? 1.5 : 0.5;
        ctx.stroke();
      }

      // Draw axis lines
      for (let i = 0; i < count; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        ctx.strokeStyle = 'rgba(0,212,255,0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw filled skill polygon
      ctx.beginPath();
      skills.forEach((skill, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const pr = r * skill.value * (0.97 + pulse * 0.03);
        const x = cx + pr * Math.cos(angle);
        const y = cy + pr * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, 'rgba(124,58,237,0.4)');
      gradient.addColorStop(0.6, 'rgba(0,212,255,0.2)');
      gradient.addColorStop(1, 'rgba(0,212,255,0.05)');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = '#00d4ff';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw skill nodes & labels
      skills.forEach((skill, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const pr = r * skill.value;
        const nx = cx + pr * Math.cos(angle);
        const ny = cy + pr * Math.sin(angle);

        // Node
        ctx.beginPath();
        ctx.arc(nx, ny, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#00d4ff';
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label
        const lx = cx + (r + 28) * Math.cos(angle);
        const ly = cy + (r + 28) * Math.sin(angle);
        ctx.font = 'bold 10px "Share Tech Mono"';
        ctx.fillStyle = 'rgba(200,220,255,0.8)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.label, lx, ly);

        // Value
        ctx.font = '9px "Share Tech Mono"';
        ctx.fillStyle = '#00d4ff';
        ctx.fillText(`${Math.round(skill.value * 100)}%`, lx, ly + 12);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-purple-500/30 rounded mb-6 font-mono-tech text-xs text-purple-400">
            <span className="animate-pulse">◎</span>
            COMPETENCY RADAR SCAN
            <span className="animate-pulse">◎</span>
          </div>
          <h2 className="font-orbitron text-3xl font-black text-white">
            SKILL <span className="text-glow-purple">RADAR</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="glass-card border border-purple-500/20 rounded-xl p-8 relative overflow-hidden" style={{ width: '440px' }}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

            <canvas
              ref={canvasRef}
              className="w-full"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
