'use client';
import { useState } from 'react';

const services = [
  {
    id: 'SVC-001',
    icon: '🧠',
    title: 'AI MODEL DEVELOPMENT',
    subtitle: 'Custom Neural Architecture',
    description: 'End-to-end AI model design, training, and deployment tailored to your specific domain and performance requirements.',
    features: ['Custom Architecture Design', 'Transfer Learning', 'Model Optimization', 'Production Deployment'],
    color: '#00d4ff',
    price: 'From $5,000',
    popular: false,
  },
  {
    id: 'SVC-002',
    icon: '🤖',
    title: 'AI AGENT SYSTEMS',
    subtitle: 'Autonomous Intelligence',
    description: 'Build intelligent autonomous agents that can reason, plan, and execute complex multi-step tasks with minimal human oversight.',
    features: ['Multi-Agent Orchestration', 'Tool Integration', 'Memory Systems', 'Self-Reflection Loop'],
    color: '#7c3aed',
    price: 'From $8,000',
    popular: true,
  },
  {
    id: 'SVC-003',
    icon: '⚡',
    title: 'AI PLATFORM BUILD',
    subtitle: 'Full-Stack AI Products',
    description: 'Complete AI-powered web/mobile platforms from architecture to deployment with scalable infrastructure design.',
    features: ['Next.js + AI Backend', 'Vector Databases', 'CI/CD Pipeline', 'Auto-scaling Infra'],
    color: '#10b981',
    price: 'From $12,000',
    popular: false,
  },
  {
    id: 'SVC-004',
    icon: '🔍',
    title: 'AI CONSULTING',
    subtitle: 'Strategic AI Roadmap',
    description: 'Expert guidance on AI strategy, technology selection, team building, and implementation roadmap for your organization.',
    features: ['AI Readiness Audit', 'Tech Stack Selection', 'ROI Analysis', 'Team Training'],
    color: '#f59e0b',
    price: 'From $2,500',
    popular: false,
  },
];

export default function ServiceCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-yellow-500/30 rounded mb-6 font-mono-tech text-xs text-yellow-400">
            <span className="animate-pulse">⚡</span>
            AVAILABLE DEPLOYMENT PACKAGES
            <span className="animate-pulse">⚡</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            AI <span className="text-yellow-400" style={{ textShadow: '0 0 20px #f59e0b' }}>SERVICES</span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-2xl mx-auto">
            From model training to full AI platforms — choose your mission package.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative glass-card border rounded-xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col ${
                hovered === service.id ? '-translate-y-3' : ''
              }`}
              style={{
                borderColor: hovered === service.id ? service.color + '60' : 'rgba(75,85,99,0.3)',
                boxShadow: hovered === service.id ? `0 20px 60px ${service.color}20` : 'none',
              }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Popular badge */}
              {service.popular && (
                <div
                  className="absolute top-4 right-4 px-2 py-1 font-mono-tech text-xs font-bold rounded"
                  style={{ background: `${service.color}30`, color: service.color, border: `1px solid ${service.color}50` }}
                >
                  ★ HOT
                </div>
              )}

              {/* Top bar */}
              <div className="h-1" style={{ background: service.color }} />

              {/* Corner */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: service.color }} />

              <div className="p-6 flex flex-col flex-1">
                {/* ID */}
                <div className="font-mono-tech text-xs text-gray-600 mb-3">{service.id}</div>

                {/* Icon */}
                <div
                  className="text-4xl mb-4 transition-transform duration-300"
                  style={{
                    filter: `drop-shadow(0 0 ${hovered === service.id ? '15px' : '5px'} ${service.color})`,
                    transform: hovered === service.id ? 'scale(1.15) rotate(5deg)' : 'scale(1)',
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <div className="font-mono-tech text-xs mb-1" style={{ color: service.color + '80' }}>
                  {service.subtitle}
                </div>
                <h3 className="font-orbitron text-sm font-bold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 font-rajdhani text-sm text-gray-300">
                      <span style={{ color: service.color }}>▶</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="font-orbitron text-sm font-bold mb-3" style={{ color: service.color }}>
                    {service.price}
                  </div>
                  <button
                    className="w-full py-2.5 font-orbitron text-xs font-bold tracking-wider border transition-all duration-300"
                    style={{
                      borderColor: service.color + '60',
                      color: service.color,
                      background: hovered === service.id ? `${service.color}15` : 'transparent',
                    }}
                  >
                    [ REQUEST QUOTE ]
                  </button>
                </div>
              </div>

              {/* Hover scan line */}
              {hovered === service.id && (
                <div
                  className="absolute inset-x-0 h-px pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                    animation: 'scanLine 2s linear infinite',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
