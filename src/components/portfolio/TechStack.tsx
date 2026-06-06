'use client';

const techs = [
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6', isText: true },
  { name: 'React', icon: '⚛', color: '#61dafb' },
  { name: 'Next.js', icon: 'N', color: '#ffffff', isText: true },
  { name: 'PyTorch', icon: '🔥', color: '#ee4c2c' },
  { name: 'TensorFlow', icon: 'TF', color: '#ff6f00', isText: true },
  { name: 'OpenAI', icon: '✦', color: '#10a37f' },
  { name: 'LangChain', icon: '🔗', color: '#1c3d5a' },
  { name: 'AWS', icon: '☁', color: '#ff9900' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'Kubernetes', icon: '⎈', color: '#326ce5' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169e1' },
  { name: 'Redis', icon: '⚡', color: '#dc382d' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'Tailwind', icon: '✿', color: '#06b6d4' },
  { name: 'Figma', icon: '✦', color: '#f24e1e' },
  { name: 'FastAPI', icon: '⚡', color: '#009688' },
  { name: 'CUDA', icon: '▪', color: '#76b900' },
  { name: 'Pinecone', icon: '🌲', color: '#45c2cb' },
  { name: 'Vercel', icon: '▲', color: '#ffffff', isText: true },
];

export default function TechStack() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded mb-6 font-mono-tech text-xs text-cyan-400">
            <span className="animate-pulse">◆</span>
            TECHNOLOGY STACK — {techs.length} MODULES LOADED
            <span className="animate-pulse">◆</span>
          </div>
          <h2 className="font-orbitron text-3xl font-black text-white mb-4">
            TECH <span className="text-glow-cyan">ARSENAL</span>
          </h2>
        </div>

        {/* Scrolling tech row 1 */}
        <div className="overflow-hidden mb-4">
          <div className="flex gap-4" style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}>
            {[...techs, ...techs].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 glass-card border border-gray-700/30 rounded-lg whitespace-nowrap group hover:border-opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0"
                style={{ minWidth: '140px' }}
              >
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${tech.color}20`,
                    border: `1px solid ${tech.color}40`,
                    color: tech.color,
                    fontFamily: tech.isText ? 'monospace' : undefined,
                  }}
                >
                  {tech.icon}
                </div>
                <span className="font-rajdhani text-sm text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling tech row 2 — reverse */}
        <div className="overflow-hidden">
          <div className="flex gap-4" style={{ animation: 'marquee 25s linear infinite reverse', width: 'max-content' }}>
            {[...techs.slice(10), ...techs.slice(0, 10), ...techs.slice(10), ...techs.slice(0, 10)].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 glass-card border border-gray-700/30 rounded-lg whitespace-nowrap group hover:border-opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0"
                style={{ minWidth: '140px' }}
              >
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${tech.color}20`,
                    border: `1px solid ${tech.color}40`,
                    color: tech.color,
                    fontFamily: tech.isText ? 'monospace' : undefined,
                  }}
                >
                  {tech.icon}
                </div>
                <span className="font-rajdhani text-sm text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframe for marquee */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
