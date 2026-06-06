'use client';

const awards = [
  { icon: '🏆', title: 'AI PRODUCT OF THE YEAR', org: 'TechCrunch Disrupt 2024', color: '#fbbf24' },
  { icon: '⭐', title: 'BEST AI STARTUP', org: 'Forbes AI 50 — 2024', color: '#00d4ff' },
  { icon: '🎖️', title: 'TOP ML ENGINEER', org: 'GitHub Stars Program', color: '#7c3aed' },
  { icon: '🔬', title: 'RESEARCH EXCELLENCE', org: 'NeurIPS 2023 Workshop', color: '#10b981' },
  { icon: '🌐', title: 'OPEN SOURCE HERO', org: 'Dev.to Community Awards', color: '#f59e0b' },
  { icon: '🛡️', title: 'AI SAFETY ADVOCATE', org: 'Partnership on AI 2024', color: '#ef4444' },
];

const certs = [
  { name: 'AWS AI/ML Specialty', level: 'CERTIFIED', color: '#ff9900', org: 'Amazon Web Services' },
  { name: 'Google Professional ML', level: 'CERTIFIED', color: '#4285f4', org: 'Google Cloud' },
  { name: 'TensorFlow Developer', level: 'CERTIFIED', color: '#ff6f00', org: 'TensorFlow / Google' },
  { name: 'Azure AI Engineer', level: 'CERTIFIED', color: '#0078d4', org: 'Microsoft Azure' },
];

export default function AwardsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-yellow-500/30 rounded mb-6 font-mono-tech text-xs text-yellow-400">
            <span className="animate-pulse">🏆</span>
            COMMENDATIONS & CERTIFICATIONS
            <span className="animate-pulse">🏆</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            HONORS <span className="text-yellow-400" style={{ textShadow: '0 0 20px #fbbf24' }}>&amp; RANKS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-yellow-400 tracking-widest mb-6 flex items-center gap-2">
              <span>🏆</span> AWARDS & RECOGNITION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="glass-card border border-gray-700/30 rounded-xl p-4 group hover:border-opacity-80 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                  style={{ '--c': award.color } as React.CSSProperties}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, ${award.color}, transparent)` }} />

                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  <div className="font-orbitron text-xs font-bold text-white mb-1 leading-tight">
                    {award.title}
                  </div>
                  <div className="font-mono-tech text-xs" style={{ color: award.color + '80' }}>
                    {award.org}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-orbitron text-sm font-bold text-cyan-400 tracking-widest mb-6 flex items-center gap-2">
              <span>🎖️</span> CERTIFICATIONS
            </h3>
            <div className="space-y-4">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 glass-card border border-gray-700/30 rounded-xl p-5 group hover:-translate-x-1 transition-all duration-300"
                >
                  {/* Badge circle */}
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-orbitron text-xs font-bold group-hover:scale-110 transition-transform"
                    style={{ borderColor: cert.color, color: cert.color, background: `${cert.color}15` }}
                  >
                    ✓
                  </div>

                  <div className="flex-1">
                    <div className="font-rajdhani font-bold text-white text-sm">{cert.name}</div>
                    <div className="font-mono-tech text-xs text-gray-500">{cert.org}</div>
                  </div>

                  <div
                    className="px-3 py-1 font-mono-tech text-xs font-bold rounded"
                    style={{ color: cert.color, background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                  >
                    {cert.level}
                  </div>
                </div>
              ))}
            </div>

            {/* Score summary */}
            <div className="mt-6 glass-card border border-gray-700/30 rounded-xl p-5">
              <div className="font-mono-tech text-xs text-gray-600 mb-3">OVERALL CERTIFICATION SCORE</div>
              <div className="flex items-end gap-2 mb-2">
                <span className="font-orbitron text-4xl font-black text-glow-cyan">98.4</span>
                <span className="font-orbitron text-lg text-gray-500 mb-1">/ 100</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: '98.4%', background: 'linear-gradient(90deg, #7c3aed, #00d4ff, #10b981)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
