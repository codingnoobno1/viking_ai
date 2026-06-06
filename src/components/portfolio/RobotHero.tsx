'use client';
import { useEffect, useRef, useState } from 'react';

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
      const currentLine = bootSequence[idx];
      if (charIdx < currentLine.length) {
        text += currentLine[charIdx];
        charIdx++;
        setBootText(text);
      } else {
        text += '\n';
        idx++;
        charIdx = 0;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      {/* Scan Lines */}
      <div 
        className="absolute left-0 right-0 h-px pointer-events-none z-10 transition-all"
        style={{ 
          top: `${scanLine}%`,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
          boxShadow: '0 0 10px rgba(0,212,255,0.3)'
        }}
      />

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-400 opacity-60" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400 opacity-60" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400 opacity-60" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400 opacity-60" />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#7c3aed' : '#10b981',
            animation: `particleFloat ${3 + Math.random() * 4}s ${Math.random() * 2}s ease-in-out infinite alternate`,
            opacity: 0.6,
          }}
        />
      ))}

      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        {/* Boot Terminal */}
        {!isBooted && (
          <div className="glass-card rounded-lg p-6 mb-8 text-left max-w-xl mx-auto border border-cyan-500/30">
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

        {/* Main Title */}
        {isBooted && (
          <div className="animate-fadeInUp">
            {/* Robot Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                {/* Orbiting rings */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
                <div className="absolute inset-4 rounded-full border border-green-500/30 animate-spin" style={{ animationDuration: '12s' }} />
                {/* Center icon */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 flex items-center justify-center animate-roboPulse">
                  <span className="text-4xl">🤖</span>
                </div>
                {/* Orbiting dot */}
                <div 
                  className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                  style={{ 
                    animation: 'orbitDot 3s linear infinite',
                    top: '50%',
                    left: '50%',
                    marginTop: '-6px',
                    marginLeft: '-6px'
                  }} 
                />
              </div>
            </div>

            <div className="mb-4">
              <span className="font-mono-tech text-cyan-400 text-sm tracking-widest">[ UNIT-7 ONLINE ] ◆ CREATIVE INTELLIGENCE ACTIVATED</span>
            </div>

            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              <span className="block text-glow-cyan animate-neonFlicker">VIKING</span>
              <span className="block text-white">ARTIFICIAL</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">INTELLIGENCE</span>
            </h1>

            <p className="font-rajdhani text-xl text-gray-400 mb-10 max-w-2xl mx-auto tracking-wide">
              Next-generation AI solutions engineered for the future. 
              <span className="text-cyan-400"> Precision. Power. Performance.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#projects" className="relative group px-8 py-4 font-orbitron text-sm font-bold tracking-wider overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 border-2 border-cyan-400 group-hover:border-cyan-300" />
                <div className="absolute inset-0 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors" />
                <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400" />
                <span className="relative text-cyan-400 group-hover:text-cyan-300">[ EXPLORE PROJECTS ]</span>
              </a>
              <a href="#contact" className="relative group px-8 py-4 font-orbitron text-sm font-bold tracking-wider overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 border-2 border-purple-500 group-hover:border-purple-400" />
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500" />
                <span className="relative text-purple-400 group-hover:text-purple-300">[ INITIATE CONTACT ]</span>
              </a>
            </div>
          </div>
        )}

        {/* Status Bar Bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 font-mono-tech text-xs text-gray-600">
          <span className="text-cyan-400 animate-pulse">◆</span>
          <span>SYS_STATUS: OPERATIONAL</span>
          <span>|</span>
          <span>UPTIME: 99.97%</span>
          <span>|</span>
          <span className="text-green-400">THREAT_LEVEL: LOW</span>
          <span className="text-cyan-400 animate-pulse">◆</span>
        </div>
      </div>
    </section>
  );
}
