'use client';

export default function AboutUnit() {
  const attributes = [
    { label: 'UNIT ID', value: 'VK-AI-UNIT-7', color: '#00d4ff' },
    { label: 'CLASS', value: 'SENIOR AI ENGINEER', color: '#7c3aed' },
    { label: 'SPECIALIZATION', value: 'LLM / AUTONOMOUS AGENTS', color: '#10b981' },
    { label: 'STATUS', value: 'OPERATIONAL', color: '#10b981' },
    { label: 'EXPERIENCE', value: '6+ YEARS', color: '#f59e0b' },
    { label: 'MISSION COUNT', value: '247', color: '#00d4ff' },
  ];

  const traits = [
    { name: 'PROBLEM SOLVING', value: 97, color: '#00d4ff' },
    { name: 'INNOVATION INDEX', value: 94, color: '#7c3aed' },
    { name: 'CODE QUALITY', value: 96, color: '#10b981' },
    { name: 'COMMUNICATION', value: 91, color: '#f59e0b' },
    { name: 'LEADERSHIP', value: 89, color: '#ef4444' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-purple-500/30 rounded mb-6 font-mono-tech text-xs text-purple-400">
            <span className="animate-pulse">◈</span>
            UNIT IDENTIFICATION FILE — CLASSIFIED
            <span className="animate-pulse">◈</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            ABOUT <span className="text-glow-purple">THE UNIT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Profile Card */}
          <div className="glass-card border border-purple-500/20 rounded-xl overflow-hidden relative">
            {/* Scan line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />

            {/* Profile area */}
            <div className="p-8 border-b border-gray-700/50">
              <div className="flex items-center gap-6">
                {/* Avatar with orbiting elements */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-full border-2 border-purple-500/50 flex items-center justify-center text-5xl bg-purple-500/10 animate-hologram">
                    🤖
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse" />
                  {/* Orbit ring */}
                  <div
                    className="absolute inset-0 rounded-full border border-cyan-400/20 -m-3"
                    style={{ animation: 'rotateRing 6s linear infinite' }}
                  />
                </div>

                <div>
                  <div className="font-mono-tech text-xs text-gray-600 mb-1">UNIT DESIGNATION</div>
                  <h3 className="font-orbitron text-2xl font-black text-white">VIKING AI</h3>
                  <div className="font-mono-tech text-xs text-purple-400 mt-1">CHIEF AI ARCHITECT & FOUNDER</div>
                </div>
              </div>
            </div>

            {/* Attributes */}
            <div className="p-6">
              <div className="font-mono-tech text-xs text-gray-600 mb-4 tracking-widest">[ UNIT ATTRIBUTES ]</div>
              <div className="space-y-3">
                {attributes.map((attr, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-mono-tech text-xs text-gray-600 w-28 flex-shrink-0">{attr.label}:</span>
                    <div className="flex-1 h-px bg-gray-800" />
                    <span className="font-mono-tech text-xs font-bold" style={{ color: attr.color }}>{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />
          </div>

          {/* Right — Bio & Traits */}
          <div className="space-y-6">
            {/* Bio */}
            <div className="glass-card border border-gray-700/30 rounded-xl p-6">
              <div className="font-mono-tech text-xs text-cyan-400 mb-4 tracking-widest">[ MISSION STATEMENT ]</div>
              <p className="font-rajdhani text-gray-300 text-lg leading-relaxed mb-4">
                I am a <span className="text-cyan-400 font-semibold">Senior AI Engineer</span> and founder of Viking AI, 
                specializing in building production-ready artificial intelligence systems that solve real business problems.
              </p>
              <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-4">
                With 6+ years in the field, I&apos;ve architected AI solutions for startups, enterprises, and research institutions — 
                from fine-tuned LLMs processing billions of tokens to real-time computer vision systems running at the edge.
              </p>
              <p className="font-rajdhani text-gray-400 text-sm leading-relaxed">
                My mission: <span className="text-purple-400">democratize AI</span> by building systems that are not just technically excellent, 
                but actually useful, safe, and accessible.
              </p>
            </div>

            {/* Trait Bars */}
            <div className="glass-card border border-gray-700/30 rounded-xl p-6">
              <div className="font-mono-tech text-xs text-cyan-400 mb-6 tracking-widest">[ PERFORMANCE TRAITS ]</div>
              <div className="space-y-4">
                {traits.map((trait, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono-tech text-xs text-gray-400">{trait.name}</span>
                      <span className="font-orbitron text-xs font-bold" style={{ color: trait.color }}>{trait.value}</span>
                    </div>
                    <div className="h-1.5 bg-gray-800/60 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${trait.value}%`,
                          background: `linear-gradient(90deg, ${trait.color}60, ${trait.color})`,
                          boxShadow: `0 0 8px ${trait.color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
