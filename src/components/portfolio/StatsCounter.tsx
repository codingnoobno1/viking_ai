'use client';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { label: 'PROJECTS DEPLOYED', value: 247, suffix: '+', color: '#00d4ff', icon: '◉' },
  { label: 'AI MODELS TRAINED', value: 1843, suffix: '+', color: '#7c3aed', icon: '◈' },
  { label: 'CLIENTS SERVED', value: 120, suffix: '+', color: '#10b981', icon: '◆' },
  { label: 'UPTIME GUARANTEE', value: 99, suffix: '.97%', color: '#f59e0b', icon: '⚡' },
  { label: 'LINES OF CODE', value: 500, suffix: 'K+', color: '#ef4444', icon: '◎' },
  { label: 'COFFEE CONSUMED', value: 9847, suffix: '', color: '#a78bfa', icon: '☕' },
];

function CounterDigit({ value, color }: { value: number; color: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-orbitron text-5xl font-black" style={{ color }}>
      {display.toLocaleString()}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section id="stats" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-green-500/30 rounded mb-6 font-mono-tech text-xs text-green-400">
            <span className="animate-pulse">◆</span>
            PERFORMANCE METRICS DASHBOARD
            <span className="animate-pulse">◆</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            SYSTEM <span className="text-glow-green">METRICS</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative glass-card border border-gray-700/50 rounded-xl p-6 group hover:border-opacity-100 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{ '--hover-color': stat.color } as React.CSSProperties}
            >
              {/* Animated background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${stat.color}, transparent)` }}
              />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: stat.color }} />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: stat.color }} />

              {/* Icon */}
              <div className="text-2xl mb-3" style={{ color: stat.color, textShadow: `0 0 10px ${stat.color}` }}>
                {stat.icon}
              </div>

              {/* Counter */}
              <div className="flex items-end gap-1 mb-2">
                <CounterDigit value={stat.value} color={stat.color} />
                <span className="font-orbitron text-2xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.suffix}
                </span>
              </div>

              <div className="font-mono-tech text-xs text-gray-500 tracking-widest">
                {stat.label}
              </div>

              {/* Bottom bar */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: stat.color }}
              />
            </div>
          ))}
        </div>

        {/* Live Status Bar */}
        <div className="mt-12 glass-card border border-gray-700/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="font-mono-tech text-xs text-green-400 tracking-wider">LIVE SYSTEM STATUS</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'CPU LOAD', value: 23, color: '#10b981' },
              { label: 'MEMORY', value: 67, color: '#00d4ff' },
              { label: 'NEURAL CORES', value: 89, color: '#7c3aed' },
              { label: 'BANDWIDTH', value: 45, color: '#f59e0b' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono-tech text-xs text-gray-500">{item.label}</span>
                  <span className="font-mono-tech text-xs" style={{ color: item.color }}>{item.value}%</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full animate-pulse"
                    style={{
                      width: `${item.value}%`,
                      background: `linear-gradient(90deg, ${item.color}80, ${item.color})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
