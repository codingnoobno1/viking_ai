'use client';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'HOME', icon: '⊕' },
  { id: 'about', label: 'UNIT', icon: '◈' },
  { id: 'skills', label: 'ARSENAL', icon: '⚡' },
  { id: 'projects', label: 'MISSIONS', icon: '◉' },
  { id: 'stats', label: 'METRICS', icon: '◆' },
  { id: 'timeline', label: 'HISTORY', icon: '◐' },
  { id: 'contact', label: 'CONNECT', icon: '◎' },
];

export default function RobotNav() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-card border-b border-cyan-500/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded border-2 border-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <div className="absolute inset-1 rounded bg-cyan-400/10 flex items-center justify-center">
              <span className="font-orbitron text-cyan-400 text-xs font-bold">VK</span>
            </div>
          </div>
          <div>
            <div className="font-orbitron text-sm font-bold text-white tracking-wider">VIKING AI</div>
            <div className="font-mono-tech text-xs text-cyan-400/60">UNIT-7 PORTFOLIO</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-2 font-orbitron text-xs tracking-wider transition-all duration-300 group ${
                active === item.id ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {active === item.id && (
                <div className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/30" />
              )}
              <span className="relative flex items-center gap-1.5">
                <span className="text-xs">{item.icon}</span>
                {item.label}
              </span>
              {active === item.id && (
                <>
                  <div className="absolute top-0 left-0 w-2 h-0.5 bg-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-2 h-0.5 bg-cyan-400" />
                </>
              )}
            </button>
          ))}
        </div>

        {/* System Clock */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 border border-cyan-500/20 rounded">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono-tech text-xs text-gray-400">{time}</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-cyan-400 border border-cyan-500/30"
        >
          <div className={`transition-all duration-300 ${menuOpen ? 'rotate-45' : ''}`}>
            {menuOpen ? '✕' : '☰'}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-cyan-500/20 mt-2 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full px-6 py-3 text-left font-orbitron text-xs tracking-wider flex items-center gap-3 transition-colors ${
                active === item.id ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-400'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Bottom energy bar */}
      <div className="energy-bar absolute bottom-0 left-0 right-0 h-px opacity-50" />
    </nav>
  );
}
