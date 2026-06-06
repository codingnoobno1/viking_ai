'use client';
import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  active: boolean;
  size: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  animated: boolean;
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate nodes in layers
    const layers = [4, 6, 8, 6, 4];
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    layers.forEach((count, layerIdx) => {
      const x = (canvas.width / (layers.length + 1)) * (layerIdx + 1);
      for (let i = 0; i < count; i++) {
        const y = (canvas.height / (count + 1)) * (i + 1);
        nodes.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          active: Math.random() > 0.5,
          size: 4 + Math.random() * 4,
        });
      }
    });

    // Create connections between adjacent layers
    let nodeIdx = 0;
    for (let l = 0; l < layers.length - 1; l++) {
      const startA = nodeIdx;
      const countA = layers[l];
      const startB = nodeIdx + countA;
      const countB = layers[l + 1];

      for (let a = 0; a < countA; a++) {
        for (let b = 0; b < countB; b++) {
          connections.push({
            from: startA + a,
            to: startB + b,
            strength: Math.random(),
            animated: Math.random() > 0.7,
          });
        }
      }
      nodeIdx += countA;
    }

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Animate nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (Math.random() > 0.99) node.active = !node.active;
      });

      // Draw connections
      connections.forEach((conn, i) => {
        const a = nodes[conn.from];
        const b = nodes[conn.to];

        const pulse = (Math.sin(frame * 0.05 + i * 0.3) + 1) / 2;
        const alpha = conn.strength * 0.3 * (conn.animated ? pulse : 1);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = conn.animated
          ? `rgba(0, 212, 255, ${alpha})`
          : `rgba(124, 58, 237, ${alpha * 0.5})`;
        ctx.lineWidth = conn.animated ? 1.5 : 0.5;
        ctx.stroke();

        // Signal packet animation
        if (conn.animated && frame % 60 < 30) {
          const t = (frame % 60) / 60;
          const px = a.x + (b.x - a.x) * t;
          const py = a.y + (b.y - a.y) * t;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#00d4ff';
          ctx.shadowColor = '#00d4ff';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = (Math.sin(frame * 0.05 + node.x) + 1) / 2;
        const color = node.active ? '#00d4ff' : '#7c3aed';
        const alpha = node.active ? 0.8 + pulse * 0.2 : 0.3 + pulse * 0.1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.shadowColor = color;
        ctx.shadowBlur = node.active ? 15 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 3, 0, Math.PI * 2);
        ctx.strokeStyle = `${color}40`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded mb-6 font-mono-tech text-xs text-cyan-400">
            <span className="animate-pulse">◈</span>
            LIVE NEURAL ARCHITECTURE VISUALIZATION
            <span className="animate-pulse">◈</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-4">
            NEURAL <span className="text-glow-cyan">ARCHITECTURE</span>
          </h2>
        </div>

        <div className="glass-card border border-cyan-500/20 rounded-xl overflow-hidden relative" style={{ height: '400px' }}>
          {/* Canvas */}
          <canvas ref={canvasRef} className="w-full h-full" />

          {/* Overlay info */}
          <div className="absolute top-4 left-4 space-y-1">
            {['INPUT LAYER', 'HIDDEN LAYER 1', 'HIDDEN LAYER 2', 'HIDDEN LAYER 3', 'OUTPUT LAYER'].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${i === 0 || i === 4 ? 'bg-purple-400' : 'bg-cyan-400'} animate-pulse`} />
                <span className="font-mono-tech text-xs text-gray-600">{label}</span>
              </div>
            ))}
          </div>

          <div className="absolute top-4 right-4 glass-card border border-gray-700/50 rounded p-3 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-cyan-400" />
              <span className="font-mono-tech text-xs text-gray-500">ACTIVE SIGNAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-purple-500/50" />
              <span className="font-mono-tech text-xs text-gray-500">WEIGHT LINK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono-tech text-xs text-gray-500">ACTIVE NODE</span>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50" />
        </div>
      </div>
    </section>
  );
}
