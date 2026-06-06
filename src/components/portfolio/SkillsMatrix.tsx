'use client';
import { useState } from 'react';

const skills = [
  { category: 'AI / ML', icon: '🧠', color: '#00d4ff', items: [
    { name: 'TensorFlow', level: 95, sub: 'Deep Learning' },
    { name: 'PyTorch', level: 90, sub: 'Neural Networks' },
    { name: 'LangChain', level: 88, sub: 'LLM Orchestration' },
    { name: 'OpenAI API', level: 97, sub: 'GPT Integration' },
    { name: 'Hugging Face', level: 85, sub: 'Transformers' },
  ]},
  { category: 'FULL STACK', icon: '⚡', color: '#7c3aed', items: [
    { name: 'Next.js', level: 96, sub: 'React Framework' },
    { name: 'TypeScript', level: 92, sub: 'Type Safety' },
    { name: 'Node.js', level: 89, sub: 'Backend Runtime' },
    { name: 'PostgreSQL', level: 85, sub: 'Relational DB' },
    { name: 'MongoDB', level: 87, sub: 'NoSQL Database' },
  ]},
  { category: 'CLOUD / OPS', icon: '☁️', color: '#10b981', items: [
    { name: 'AWS', level: 88, sub: 'Cloud Platform' },
    { name: 'Docker', level: 92, sub: 'Containerization' },
    { name: 'Kubernetes', level: 78, sub: 'Orchestration' },
    { name: 'Terraform', level: 75, sub: 'Infrastructure' },
    { name: 'CI/CD', level: 90, sub: 'DevOps Pipeline' },
  ]},
  { category: 'DESIGN', icon: '🎨', color: '#f59e0b', items: [
    { name: 'Figma', level: 88, sub: 'UI/UX Design' },
    { name: 'Three.js', level: 80, sub: '3D Graphics' },
    { name: 'GSAP', level: 85, sub: 'Animations' },
    { name: 'Tailwind CSS', level: 96, sub: 'Styling' },
    { name: 'WebGL', level: 72, sub: 'GPU Rendering' },
  ]},
];

function SkillBar({ name, level, sub, color }: { name: string; level: number; sub: string; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-1.5">
        <div>
          <span className="font-rajdhani font-semibold text-sm text-white tracking-wide">{name}</span>
          <span className="ml-2 font-mono-tech text-xs text-gray-600">{sub}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono-tech text-xs" style={{ color }}>{level}%</span>
          {hovered && (
            <div className="px-1.5 py-0.5 text-xs font-mono-tech rounded" style={{ background: `${color}20`, color, border: `1px solid ${color}40` }}>
              ◉ ACTIVE
            </div>
          )}
        </div>
      </div>
      
      <div className="relative h-2 bg-gray-800/60 rounded-full overflow-hidden border border-gray-700/50">
        {/* Background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        
        {/* Fill */}
        <div
          className="h-full rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: hovered ? `0 0 10px ${color}80` : 'none',
          }}
        >
          {/* Moving highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          
          {/* End glow dot */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full -mr-1"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
        </div>

        {/* Level markers */}
        {[25, 50, 75].map(mark => (
          <div
            key={mark}
            className="absolute top-0 bottom-0 w-px bg-gray-600/50"
            style={{ left: `${mark}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded mb-6 font-mono-tech text-xs text-cyan-400">
          <span className="animate-pulse">◆</span>
          CAPABILITY MATRIX SCAN
          <span className="animate-pulse">◆</span>
        </div>
        <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
          SKILL <span className="text-glow-cyan">ARSENAL</span>
        </h2>
        <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
          Comprehensive technical capabilities across AI, development, and design disciplines.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skills.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(i)}
            className="relative px-5 py-2.5 font-orbitron text-xs tracking-wider transition-all duration-300"
            style={{
              color: activeCategory === i ? cat.color : '#6b7280',
              borderColor: activeCategory === i ? cat.color : 'rgba(107,114,128,0.3)',
              border: '1px solid',
              background: activeCategory === i ? `${cat.color}15` : 'transparent',
            }}
          >
            <span className="mr-2">{cat.icon}</span>
            {cat.category}
            {activeCategory === i && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5" style={{ background: cat.color }} />
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-xl p-8 border relative overflow-hidden" style={{ borderColor: `${skills[activeCategory].color}30` }}>
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: skills[activeCategory].color }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: skills[activeCategory].color }} />
          
          {/* Category Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl">{skills[activeCategory].icon}</div>
            <div>
              <h3 className="font-orbitron font-bold text-xl text-white">{skills[activeCategory].category}</h3>
              <div className="font-mono-tech text-xs text-gray-500 mt-1">
                SCANNING {skills[activeCategory].items.length} MODULES...
              </div>
            </div>
            <div className="ml-auto">
              <div 
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center font-orbitron text-sm font-bold"
                style={{ 
                  borderColor: skills[activeCategory].color,
                  color: skills[activeCategory].color,
                  boxShadow: `0 0 20px ${skills[activeCategory].color}40`
                }}
              >
                {Math.round(skills[activeCategory].items.reduce((a, b) => a + b.level, 0) / skills[activeCategory].items.length)}%
              </div>
            </div>
          </div>

          {/* Skill Bars */}
          <div className="space-y-5">
            {skills[activeCategory].items.map((skill, i) => (
              <SkillBar
                key={i}
                name={skill.name}
                level={skill.level}
                sub={skill.sub}
                color={skills[activeCategory].color}
              />
            ))}
          </div>

          {/* Bottom Scan Line */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-0.5 opacity-30"
            style={{ background: `linear-gradient(90deg, transparent, ${skills[activeCategory].color}, transparent)` }}
          />
        </div>
      </div>

      {/* Hexagonal skill nodes decoration */}
      <div className="flex justify-center gap-8 mt-12">
        {['ADAPT', 'SCALE', 'DEPLOY', 'OPTIMIZE', 'INNOVATE'].map((word, i) => (
          <div key={i} className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 border border-cyan-500/50 rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <span className="font-mono-tech text-xs text-gray-600">{word}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
