'use client';
import { useState } from 'react';

const projects = [
  {
    id: 'P-001',
    name: 'NEURAL FORGE',
    category: 'AI PLATFORM',
    status: 'DEPLOYED',
    statusColor: '#10b981',
    description: 'Advanced neural network training platform with real-time visualization, distributed computing support, and automated hyperparameter optimization.',
    tech: ['PyTorch', 'FastAPI', 'React', 'CUDA', 'Redis'],
    metrics: { accuracy: '99.2%', speed: '3.2x', models: '50K+' },
    image: '🧠',
    color: '#00d4ff',
    link: '#',
    year: '2024',
  },
  {
    id: 'P-002',
    name: 'QUANTUM CHAT',
    category: 'LLM PRODUCT',
    status: 'ACTIVE',
    statusColor: '#00d4ff',
    description: 'Enterprise-grade AI chat platform with multi-model support, custom fine-tuning capabilities, and advanced RAG pipeline implementation.',
    tech: ['LangChain', 'Next.js', 'OpenAI', 'PostgreSQL', 'Pinecone'],
    metrics: { users: '25K+', msgs: '1M/day', accuracy: '94.8%' },
    image: '💬',
    color: '#7c3aed',
    link: '#',
    year: '2024',
  },
  {
    id: 'P-003',
    name: 'VISION SENTINEL',
    category: 'COMPUTER VISION',
    status: 'BETA',
    statusColor: '#f59e0b',
    description: 'Real-time object detection and tracking system for industrial safety, achieving 60fps processing with edge AI deployment capabilities.',
    tech: ['YOLOv9', 'OpenCV', 'TensorRT', 'FastAPI', 'Docker'],
    metrics: { fps: '60+', precision: '97.3%', latency: '<5ms' },
    image: '👁️',
    color: '#10b981',
    link: '#',
    year: '2024',
  },
  {
    id: 'P-004',
    name: 'DATA ORACLE',
    category: 'ANALYTICS',
    status: 'DEPLOYED',
    statusColor: '#10b981',
    description: 'Predictive analytics engine using ensemble ML models with automated feature engineering, explainability reports, and business intelligence dashboards.',
    tech: ['scikit-learn', 'Pandas', 'Plotly', 'Streamlit', 'AWS'],
    metrics: { predictions: '5M/mo', accuracy: '91.5%', clients: '120+' },
    image: '📊',
    color: '#f59e0b',
    link: '#',
    year: '2023',
  },
  {
    id: 'P-005',
    name: 'AGENT NEXUS',
    category: 'AUTONOMOUS AI',
    status: 'DEV',
    statusColor: '#ef4444',
    description: 'Multi-agent AI system capable of autonomous task planning, tool usage, and self-reflection with emergent collaborative behaviors.',
    tech: ['AutoGen', 'LangGraph', 'FastAPI', 'Redis', 'Kafka'],
    metrics: { tasks: '10K+', agents: '100+', success: '89.7%' },
    image: '🤖',
    color: '#ef4444',
    link: '#',
    year: '2025',
  },
  {
    id: 'P-006',
    name: 'SONIC FORGE',
    category: 'AUDIO AI',
    status: 'ACTIVE',
    statusColor: '#00d4ff',
    description: 'AI-powered audio synthesis and transformation platform supporting voice cloning, music generation, and real-time speech enhancement.',
    tech: ['Whisper', 'Bark', 'Gradio', 'PyAudio', 'CUDA'],
    metrics: { voices: '500+', quality: '4.8/5', users: '8K+' },
    image: '🎵',
    color: '#a78bfa',
    link: '#',
    year: '2024',
  },
];

const categories = ['ALL', 'AI PLATFORM', 'LLM PRODUCT', 'COMPUTER VISION', 'ANALYTICS', 'AUTONOMOUS AI', 'AUDIO AI'];

export default function ProjectsMission() {
  const [filter, setFilter] = useState('ALL');
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-purple-500/30 rounded mb-6 font-mono-tech text-xs text-purple-400">
            <span className="animate-pulse">◉</span>
            MISSION DOSSIER — {projects.length} OPERATIONS
            <span className="animate-pulse">◉</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            ACTIVE <span className="text-glow-purple">MISSIONS</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-mono-tech text-xs tracking-wider border transition-all duration-300 ${
                filter === cat
                  ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                  : 'border-gray-700/50 text-gray-600 hover:border-gray-600 hover:text-gray-400'
              }`}
            >
              {filter === cat && '▶ '}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer glass-card border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                borderColor: hovered === project.id ? project.color + '50' : undefined,
                boxShadow: hovered === project.id ? `0 0 40px ${project.color}20` : undefined,
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top color bar */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-tech text-xs text-gray-600">{project.id}</span>
                      <span className="font-mono-tech text-xs text-gray-600">•</span>
                      <span className="font-mono-tech text-xs text-gray-600">{project.year}</span>
                    </div>
                    <div className="font-mono-tech text-xs tracking-wider mb-2" style={{ color: project.color + '80' }}>
                      {project.category}
                    </div>
                    <h3 className="font-orbitron text-xl font-bold text-white group-hover:text-glow-cyan transition-all">
                      {project.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-4xl" style={{ filter: `drop-shadow(0 0 10px ${project.color})` }}>
                      {project.image}
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded font-mono-tech text-xs" style={{ 
                      background: `${project.statusColor}15`,
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}40`
                    }}>
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.statusColor }} />
                      {project.status}
                    </div>
                  </div>
                </div>

                <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 font-mono-tech text-xs rounded border"
                      style={{ 
                        color: project.color + 'cc',
                        borderColor: project.color + '30',
                        background: project.color + '10'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key} className="text-center p-2 border border-gray-700/30 rounded">
                      <div className="font-orbitron text-sm font-bold" style={{ color: project.color }}>
                        {val}
                      </div>
                      <div className="font-mono-tech text-xs text-gray-600 uppercase">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  className="w-full flex items-center justify-center gap-2 py-2.5 font-orbitron text-xs tracking-wider border transition-all duration-300"
                  style={{
                    borderColor: project.color + '50',
                    color: project.color,
                    background: hovered === project.id ? `${project.color}15` : 'transparent',
                  }}
                >
                  <span>ACCESS MISSION FILES</span>
                  <span className="animate-bounceX">→</span>
                </a>
              </div>

              {/* Scan line on hover */}
              {hovered === project.id && (
                <div 
                  className="absolute inset-x-0 h-0.5 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                    animation: 'scanLine 2s linear infinite',
                  }} 
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-gray-800">
          {[
            { label: 'TOTAL MISSIONS', value: '24+' },
            { label: 'SUCCESS RATE', value: '98.3%' },
            { label: 'LINES OF CODE', value: '500K+' },
            { label: 'SATISFIED CLIENTS', value: '120+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-orbitron text-2xl font-black text-glow-cyan">{stat.value}</div>
              <div className="font-mono-tech text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
