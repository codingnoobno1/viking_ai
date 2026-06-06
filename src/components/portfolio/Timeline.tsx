'use client';

const timeline = [
  {
    year: '2025',
    title: 'VIKING AI FOUNDED',
    role: 'Founder & Chief AI Architect',
    description: 'Established Viking AI as a cutting-edge AI solutions company, specializing in custom LLM deployments and autonomous agent systems.',
    icon: '⚡',
    color: '#00d4ff',
    tags: ['LLM', 'AI Agents', 'Startup'],
    side: 'right',
  },
  {
    year: '2024',
    title: 'NEURAL ENGINE v3.0',
    role: 'Lead ML Engineer @ TechCorp',
    description: 'Architected and deployed a distributed neural training infrastructure handling 1B+ parameters with custom CUDA kernels.',
    icon: '🧠',
    color: '#7c3aed',
    tags: ['PyTorch', 'CUDA', 'Distributed'],
    side: 'left',
  },
  {
    year: '2024',
    title: 'QUANTUM VISION LAUNCH',
    role: 'Computer Vision Specialist',
    description: 'Built real-time vision AI system deployed across 500+ industrial facilities with sub-5ms latency requirements.',
    icon: '👁️',
    color: '#10b981',
    tags: ['YOLOv9', 'Edge AI', 'Industrial'],
    side: 'right',
  },
  {
    year: '2023',
    title: 'OPEN SOURCE IMPACT',
    role: 'Core Contributor',
    description: 'Contributed to major open-source AI projects gaining 15K+ GitHub stars. Featured in TechCrunch and Hacker News.',
    icon: '🌐',
    color: '#f59e0b',
    tags: ['Open Source', 'Community', 'Research'],
    side: 'left',
  },
  {
    year: '2023',
    title: 'AWS AI SPECIALIST',
    role: 'Certified Cloud Architect',
    description: 'Achieved AWS AI/ML Specialty certification and deployed scalable ML pipelines for Fortune 500 enterprises.',
    icon: '☁️',
    color: '#ef4444',
    tags: ['AWS', 'SageMaker', 'MLOps'],
    side: 'right',
  },
  {
    year: '2022',
    title: 'DEEP LEARNING MASTERY',
    role: 'Research Assistant — MIT CSAIL',
    description: 'Co-authored 3 papers on transformer architectures and attention mechanisms. Published in NeurIPS and ICML.',
    icon: '🎓',
    color: '#a78bfa',
    tags: ['Research', 'NeurIPS', 'Transformers'],
    side: 'left',
  },
  {
    year: '2021',
    title: 'FIRST AI PRODUCT',
    role: 'Solo Developer',
    description: 'Built and launched first commercial AI product — an intelligent content platform that reached 10K users in 3 months.',
    icon: '🚀',
    color: '#00d4ff',
    tags: ['Product', 'Launch', 'Growth'],
    side: 'right',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-purple-500/30 rounded mb-6 font-mono-tech text-xs text-purple-400">
            <span className="animate-pulse">◐</span>
            OPERATIONAL HISTORY LOG
            <span className="animate-pulse">◐</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            MISSION <span className="text-glow-purple">HISTORY</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-green-500/50" />

          {/* Center dots */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-2 w-4 h-4 rounded-full bg-green-400 animate-pulse" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-8 ${
                  item.side === 'left' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                  <div
                    className="glass-card border rounded-xl p-5 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    style={{ borderColor: `${item.color}30` }}
                  >
                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                      style={{ background: item.color }}
                    />

                    {/* Corner decorations */}
                    {item.side === 'right' ? (
                      <>
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: item.color }} />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: item.color }} />
                      </>
                    ) : (
                      <>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r" style={{ borderColor: item.color }} />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l" style={{ borderColor: item.color }} />
                      </>
                    )}

                    <div className={`flex items-center gap-2 mb-2 ${item.side === 'left' ? 'flex-row-reverse' : ''}`}>
                      <span className="font-orbitron text-xs font-bold px-2 py-0.5 rounded" style={{ color: item.color, background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                        {item.year}
                      </span>
                      <span className="font-mono-tech text-xs text-gray-600">{item.role}</span>
                    </div>

                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">{item.title}</h3>
                    <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>

                    <div className={`flex flex-wrap gap-1.5 ${item.side === 'left' ? 'justify-end' : 'justify-start'}`}>
                      {item.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="font-mono-tech text-xs px-2 py-0.5 rounded border"
                          style={{ color: `${item.color}cc`, borderColor: `${item.color}30`, background: `${item.color}10` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Connector line to center */}
                    <div
                      className={`absolute top-1/2 h-px w-8 ${item.side === 'left' ? '-right-8' : '-left-8'}`}
                      style={{ background: `linear-gradient(${item.side === 'left' ? '90deg' : '270deg'}, ${item.color}60, transparent)` }}
                    />
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl z-10 transition-all duration-300 hover:scale-125"
                    style={{
                      borderColor: item.color,
                      background: `${item.color}20`,
                      boxShadow: `0 0 20px ${item.color}40`,
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Empty side */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
