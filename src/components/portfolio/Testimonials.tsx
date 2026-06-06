'use client';
import { useState } from 'react';

const testimonials = [
  {
    id: 'T-001',
    name: 'SARAH CHEN',
    role: 'CTO @ DataNexus Corp',
    avatar: '👩‍💻',
    rating: 5,
    text: 'Viking AI transformed our entire data pipeline. The neural engine they built processes 10x more data with 99.2% accuracy. Absolutely exceptional engineering.',
    project: 'Neural Forge Platform',
    color: '#00d4ff',
  },
  {
    id: 'T-002',
    name: 'MARCUS WILLIAMS',
    role: 'Founder @ AutoBot.io',
    avatar: '🧑‍🚀',
    rating: 5,
    text: 'The autonomous agent system Viking AI built is mind-blowing. Our customer support costs dropped 70% while satisfaction scores went up. Pure genius.',
    project: 'Agent Nexus System',
    color: '#7c3aed',
  },
  {
    id: 'T-003',
    name: 'ELENA KOZLOV',
    role: 'VP Engineering @ IndustrialAI',
    avatar: '👩‍🔬',
    rating: 5,
    text: 'Vision Sentinel runs at 60fps with sub-5ms latency across our 500+ facilities. Zero compromises on safety, zero downtime. Remarkable work.',
    project: 'Vision Sentinel',
    color: '#10b981',
  },
  {
    id: 'T-004',
    name: 'JAMES OKAFOR',
    role: 'CEO @ PredictX Analytics',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Data Oracle gave us predictive insights that drove $2.3M in revenue optimization in Q1 alone. The ROI is simply extraordinary.',
    project: 'Data Oracle',
    color: '#f59e0b',
  },
  {
    id: 'T-005',
    name: 'AKIRA TANAKA',
    role: 'AI Research Lead @ FutureLab',
    avatar: '🧑‍🔬',
    rating: 5,
    text: 'Partnering with Viking AI on our research projects felt like having a co-founder who just happens to be a world-class AI engineer. Unparalleled depth of knowledge.',
    project: 'Research Collaboration',
    color: '#ef4444',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(i => (i + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-green-500/30 rounded mb-6 font-mono-tech text-xs text-green-400">
            <span className="animate-pulse">◈</span>
            VERIFIED MISSION REPORTS
            <span className="animate-pulse">◈</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            CLIENT <span className="text-glow-green">REPORTS</span>
          </h2>
        </div>

        <div className="relative glass-card border rounded-xl overflow-hidden p-8 md:p-12" style={{ borderColor: `${current.color}30` }}>
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: current.color }} />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: current.color }} />

          {/* Report ID */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono-tech text-xs text-gray-600">{current.id}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
            <span className="font-mono-tech text-xs px-2 py-1 rounded" style={{ color: current.color, background: `${current.color}15`, border: `1px solid ${current.color}30` }}>
              {current.project}
            </span>
          </div>

          {/* Quote */}
          <div className="mb-8">
            <div className="text-5xl text-gray-700 font-serif mb-4 leading-none">&ldquo;</div>
            <p className="font-rajdhani text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              {current.text}
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl"
              style={{ borderColor: current.color, background: `${current.color}15` }}
            >
              {current.avatar}
            </div>
            <div>
              <div className="font-orbitron text-sm font-bold text-white">{current.name}</div>
              <div className="font-mono-tech text-xs text-gray-500">{current.role}</div>
            </div>
            <div className="ml-auto flex gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="px-4 py-2 font-orbitron text-xs border border-gray-700/50 text-gray-500 hover:border-gray-600 hover:text-gray-300 transition-colors"
            >
              ← PREV
            </button>

            {/* Dots */}
            <div className="flex gap-2 flex-1 justify-center">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? '24px' : '8px',
                      height: '8px',
                      background: active === i ? current.color : '#374151',
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 font-orbitron text-xs border border-gray-700/50 text-gray-500 hover:border-gray-600 hover:text-gray-300 transition-colors"
            >
              NEXT →
            </button>
          </div>

          {/* HUD counter */}
          <div className="absolute top-8 right-8 font-mono-tech text-xs text-gray-700">
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
}
