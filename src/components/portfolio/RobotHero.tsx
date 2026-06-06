'use client';
import { useEffect, useState } from 'react';
import AnimatedRobot from './AnimatedRobot';

export default function RobotHero() {
  const [scanLine, setScanLine] = useState(0);
  const [bootText, setBootText] = useState('');
  const [isBooted, setIsBooted] = useState(false);

  const bootSequence = [
    '> INITIALIZING VIKING AI SYSTEMS...',
    '> NEURAL NETWORK ONLINE [████████] 100%',
    '> QUANTUM PROCESSORS ENGAGED...',
    '> LOADING PORTFOLIO MODULE v4.7.2',
    '> ALL SYSTEMS OPERATIONAL',
    '> WELCOME TO VIKING AI ⚡',
  ];

  // Boot sequence typewriter
  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let text = '';
    const interval = setInterval(() => {
      if (idx >= bootSequence.length) {
        clearInterval(interval);
        setIsBooted(true);
        return;
      }
      const line = bootSequence[idx];
      if (charIdx < line.length) {
        text += line[charIdx];
        charIdx++;
        setBootText(text);
      } else {
        text += '\n';
        idx++;
        charIdx = 0;
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  // Moving scan line across viewport
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Moving scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-10"
        style={{
          top: `${scanLine}%`,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
          boxShadow: '0 0 10px rgba(0,212,255,0.25)',
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50" />

      {/* Floating ambient particles */}
      {[
        { l: 10, t: 20, c: '#00d4ff', s: 3, d: 3.2 },
        { l: 85, t: 15, c: '#7c3aed', s: 2, d: 4.1 },
        { l: 5,  t: 70, c: '#10b981', s: 4, d: 3.7 },
        { l: 90, t: 60, c: '#00d4ff', s: 2, d: 5.0 },
        { l: 50, t: 8,  c: '#7c3aed', s: 3, d: 2.9 },
        { l: 30, t: 85, c: '#10b981', s: 2, d: 4.5 },
        { l: 70, t: 90, c: '#00d4ff', s: 3, d: 3.3 },
        { l: 15, t: 45, c: '#f59e0b', s: 2, d: 5.2 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            background: p.c,
            opacity: 0.55,
            animation: `particleFloat ${p.d}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* ===== MAIN CONTENT — two column ===== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">

        {/* Boot terminal (full width, shown before boot) */}
        {!isBooted && (
          <div className="glass-card rounded-xl p-6 mb-12 text-left max-w-xl mx-auto border border-cyan-500/30">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="font-mono-tech text-gray-500 text-xs ml-2">VIKING_AI.SYS</span>
            </div>
            <pre className="font-mono-tech text-xs text-cyan-400 whitespace-pre-wrap leading-relaxed">
              {bootText}
              <span className="animate-pulse">█</span>
            </pre>
          </div>
        )}

        {/* Two-column layout after boot */}
        {isBooted && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeInUp">

            {/* ===== LEFT — Text Content ===== */}
            <div className="flex flex-col gap-6">
              {/* Status badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded-full w-fit font-mono-tech text-xs text-cyan-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                UNIT-7 ONLINE — CREATIVE INTELLIGENCE ACTIVATED
              </div>

              {/* Title */}
              <h1 className="font-orbitron text-5xl md:text-6xl xl:text-7xl font-black leading-none">
                <span
                  className="block text-cyan-400"
                  style={{ textShadow: '0 0 30px rgba(0,212,255,0.7), 0 0 60px rgba(0,212,255,0.3)' }}
                >
                  VIKING
                </span>
                <span className="block text-white">ARTIFICIAL</span>
                <span
                  className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
                >
                  INTELLIGENCE
                </span>
              </h1>

              {/* Description */}
              <p className="font-rajdhani text-lg text-gray-400 leading-relaxed max-w-lg">
                Next-generation AI solutions engineered for the future.
                <span className="text-cyan-400"> Precision. Power. Performance.</span>
                {' '}From autonomous agents to production LLM platforms.
              </p>

              {/* Spec chips */}
              <div className="flex flex-wrap gap-2">
                {['LLM AGENTS', 'COMPUTER VISION', 'NEXT.JS', 'PYTORCH', 'AWS', 'LANGCHAIN'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono-tech text-xs border border-cyan-500/25 text-cyan-400/70 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="relative group px-8 py-4 font-orbitron text-sm font-bold tracking-wider overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 border-2 border-cyan-400 group-hover:border-cyan-300" />
                  <div className="absolute inset-0 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors" />
                  <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400" />
                  <span className="relative text-cyan-400 group-hover:text-cyan-300">
                    [ EXPLORE PROJECTS ]
                  </span>
                </a>
                <a
                  href="#contact"
                  className="relative group px-8 py-4 font-orbitron text-sm font-bold tracking-wider overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 border-2 border-purple-500 group-hover:border-purple-400" />
                  <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500" />
                  <span className="relative text-purple-400 group-hover:text-purple-300">
                    [ INITIATE CONTACT ]
                  </span>
                </a>
              </div>

              {/* Live metrics row */}
              <div className="flex gap-6 pt-2 border-t border-gray-800/60">
                {[
                  { val: '247+', label: 'MISSIONS' },
                  { val: '99.97%', label: 'UPTIME' },
                  { val: '120+', label: 'CLIENTS' },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="font-orbitron text-xl font-black text-cyan-400">{m.val}</div>
                    <div className="font-mono-tech text-xs text-gray-600">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== RIGHT — Animated Robot ===== */}
            <div className="flex justify-center items-center">
              <AnimatedRobot />
            </div>

          </div>
        )}

        {/* Status bar at the very bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 font-mono-tech text-xs text-gray-700">
          <span className="text-cyan-400/60 animate-pulse">◆</span>
          <span>SYS_STATUS: OPERATIONAL</span>
          <span>|</span>
          <span>UPTIME: 99.97%</span>
          <span>|</span>
          <span className="text-green-400/60">THREAT_LEVEL: LOW</span>
          <span className="text-cyan-400/60 animate-pulse">◆</span>
        </div>
      </div>
    </section>
  );
}
