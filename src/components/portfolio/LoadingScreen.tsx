'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);

  const phases = [
    'INITIALIZING SYSTEMS...',
    'LOADING NEURAL MODULES...',
    'CALIBRATING AI CORE...',
    'SYNCHRONIZING DATA...',
    'LAUNCHING VIKING AI...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 8 + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
          return 100;
        }
        setPhase(Math.floor((next / 100) * phases.length));
        return next;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#020409] flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Scan line */}
      <div
        className="absolute inset-x-0 h-0.5 pointer-events-none"
        style={{
          top: `${progress}%`,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.8), transparent)',
          boxShadow: '0 0 15px rgba(0,212,255,0.5)',
          transition: 'top 0.08s linear',
        }}
      />

      <div className="relative z-10 text-center w-80">
        {/* Robot Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
            <div className="absolute inset-4 flex items-center justify-center text-3xl">🤖</div>
          </div>
        </div>

        {/* Brand */}
        <div className="font-orbitron text-2xl font-black text-white mb-1">VIKING AI</div>
        <div className="font-mono-tech text-xs text-cyan-400/60 mb-8">SYSTEM BOOT v4.7.2</div>

        {/* Phase text */}
        <div className="font-mono-tech text-xs text-cyan-400 mb-4 h-4">{phases[phase]}</div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700/50 mb-3">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #7c3aed, #00d4ff, #10b981)',
              boxShadow: '0 0 10px rgba(0,212,255,0.5)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>

        {/* Percentage */}
        <div className="font-orbitron text-sm font-bold text-cyan-400">
          {Math.floor(progress)}%
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              style={{ animation: `blink 1s ${i * 0.3}s infinite` }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-400/40" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-400/40" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-400/40" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-cyan-400/40" />
    </div>
  );
}
