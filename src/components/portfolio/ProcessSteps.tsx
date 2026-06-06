'use client';

const steps = [
  {
    num: '01',
    title: 'RECONNAISSANCE',
    subtitle: 'Discovery & Analysis',
    icon: '🔍',
    color: '#00d4ff',
    description: 'Deep-dive into your requirements, existing systems, data assets, and strategic objectives to architect the optimal AI solution.',
    duration: '1-2 Weeks',
  },
  {
    num: '02',
    title: 'BLUEPRINTING',
    subtitle: 'Architecture Design',
    icon: '📐',
    color: '#7c3aed',
    description: 'System architecture design, model selection, infrastructure planning, and detailed technical specifications with timeline.',
    duration: '1 Week',
  },
  {
    num: '03',
    title: 'FORGE',
    subtitle: 'Development & Training',
    icon: '⚒️',
    color: '#10b981',
    description: 'Rapid development cycles with continuous model training, evaluation, and iteration using agile engineering practices.',
    duration: '4-8 Weeks',
  },
  {
    num: '04',
    title: 'BATTLE TEST',
    subtitle: 'QA & Evaluation',
    icon: '⚔️',
    color: '#f59e0b',
    description: 'Rigorous testing including unit tests, integration tests, load testing, bias evaluation, and safety audits.',
    duration: '1-2 Weeks',
  },
  {
    num: '05',
    title: 'DEPLOYMENT',
    subtitle: 'Production Launch',
    icon: '🚀',
    color: '#ef4444',
    description: 'Zero-downtime deployment with CI/CD pipeline, monitoring dashboards, alerting systems, and rollback procedures.',
    duration: '3-5 Days',
  },
  {
    num: '06',
    title: 'SENTINAL MODE',
    subtitle: 'Ongoing Support',
    icon: '🛡️',
    color: '#a78bfa',
    description: 'Continuous model monitoring, performance optimization, retraining schedules, and feature enhancement roadmap.',
    duration: 'Ongoing',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-yellow-500/30 rounded mb-6 font-mono-tech text-xs text-yellow-400">
            <span className="animate-pulse">▶</span>
            OPERATIONAL PROTOCOL — 6 PHASE MISSION
            <span className="animate-pulse">▶</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            MISSION <span className="text-yellow-400" style={{ textShadow: '0 0 20px #f59e0b' }}>PROTOCOL</span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-2xl mx-auto">
            A battle-tested 6-phase process for delivering AI solutions that actually work in production.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative glass-card border border-gray-700/30 rounded-xl p-6 group hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: step.color }}
              />

              {/* Step number (background) */}
              <div
                className="absolute -right-4 -top-6 font-orbitron text-8xl font-black opacity-5 select-none"
                style={{ color: step.color }}
              >
                {step.num}
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: step.color }} />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: step.color }} />

              {/* Phase badge */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="font-mono-tech text-xs font-bold px-2 py-1 rounded"
                  style={{ color: step.color, background: `${step.color}20`, border: `1px solid ${step.color}40` }}
                >
                  PHASE {step.num}
                </span>
                <span className="font-mono-tech text-xs text-gray-600">{step.duration}</span>
              </div>

              {/* Icon */}
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block"
                style={{ filter: `drop-shadow(0 0 8px ${step.color}60)` }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="font-mono-tech text-xs text-gray-600 mb-1">{step.subtitle}</div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="font-rajdhani text-gray-400 text-sm leading-relaxed">{step.description}</p>

              {/* Bottom connector arrow (not last in row) */}
              {i < steps.length - 1 && (i + 1) % 3 !== 0 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 font-mono-tech text-xs"
                  style={{ color: step.color }}
                >
                  →
                </div>
              )}

              {/* Bottom progress bar */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 font-orbitron text-sm font-bold tracking-wider border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <span>START YOUR MISSION</span>
            <span className="animate-bounceX">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
