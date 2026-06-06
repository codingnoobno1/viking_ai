'use client';

export default function RobotFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800/50 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Top energy bar */}
      <div className="energy-bar h-px" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded border-2 border-cyan-400/60 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-1.5 rounded bg-cyan-400/10 flex items-center justify-center">
                  <span className="font-orbitron text-cyan-400 text-xs font-black">VK</span>
                </div>
              </div>
              <div>
                <div className="font-orbitron text-lg font-black text-white tracking-wider">VIKING AI</div>
                <div className="font-mono-tech text-xs text-cyan-400/60">ARTIFICIAL INTELLIGENCE UNIT</div>
              </div>
            </div>
            <p className="font-rajdhani text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Building the next generation of AI systems. From autonomous agents to production ML pipelines — 
              Viking AI engineers intelligence that matters.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: '⬡', label: 'GitHub' },
                { icon: '◈', label: 'LinkedIn' },
                { icon: '◉', label: 'Twitter' },
                { icon: '◎', label: 'Discord' },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 border border-gray-700/50 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 text-sm rounded"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-orbitron text-xs font-bold text-cyan-400 mb-5 tracking-widest">NAVIGATION</div>
            <ul className="space-y-2.5">
              {['Home', 'About Unit', 'Skill Arsenal', 'Missions', 'Services', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="font-rajdhani text-sm text-gray-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-xs text-gray-700 group-hover:text-cyan-500 transition-colors">▶</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-orbitron text-xs font-bold text-cyan-400 mb-5 tracking-widest">CONTACT VECTORS</div>
            <div className="space-y-3">
              {[
                { icon: '📡', label: 'unit7@vikingai.io' },
                { icon: '🌐', label: 'vikingai.io' },
                { icon: '📍', label: 'Earth, Sector 7' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-sm">{c.icon}</span>
                  <span className="font-mono-tech text-xs text-gray-500">{c.label}</span>
                </div>
              ))}

              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-4 p-3 border border-green-500/20 rounded">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <div className="font-mono-tech text-xs text-green-400">SYSTEMS ONLINE</div>
                  <div className="font-mono-tech text-xs text-gray-700">Available for new missions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono-tech text-xs text-gray-700">
            © {year} VIKING AI — ALL RIGHTS RESERVED. UNIT-7 PORTFOLIO SYSTEM v4.7.2
          </div>
          <div className="flex items-center gap-4 font-mono-tech text-xs text-gray-700">
            <a href="#" className="hover:text-gray-500 transition-colors">PRIVACY PROTOCOL</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-500 transition-colors">TERMS OF ENGAGEMENT</a>
            <span>|</span>
            <span className="text-cyan-400/50">BUILT WITH NEXT.JS</span>
          </div>
        </div>
      </div>

      {/* Bottom corner decorations */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/20" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/20" />
    </footer>
  );
}
