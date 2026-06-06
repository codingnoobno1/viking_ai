'use client';

const plans = [
  {
    id: 'TIER-ALPHA',
    name: 'ALPHA',
    subtitle: 'Starter Mission',
    price: '$2,500',
    period: '/project',
    color: '#10b981',
    features: [
      { text: 'AI Consultation (8hrs)', included: true },
      { text: 'Custom ML Model (1)', included: true },
      { text: 'API Integration', included: true },
      { text: 'Basic Dashboard', included: true },
      { text: 'Multi-Agent System', included: false },
      { text: 'Priority Support', included: false },
      { text: 'Custom Training Pipeline', included: false },
    ],
    cta: 'DEPLOY ALPHA',
    popular: false,
  },
  {
    id: 'TIER-OMEGA',
    name: 'OMEGA',
    subtitle: 'Enterprise Mission',
    price: '$8,500',
    period: '/project',
    color: '#00d4ff',
    features: [
      { text: 'AI Consultation (Unlimited)', included: true },
      { text: 'Custom ML Models (5)', included: true },
      { text: 'Full Stack AI Platform', included: true },
      { text: 'Advanced Dashboard', included: true },
      { text: 'Multi-Agent System', included: true },
      { text: 'Priority Support (24/7)', included: true },
      { text: 'Custom Training Pipeline', included: false },
    ],
    cta: 'DEPLOY OMEGA',
    popular: true,
  },
  {
    id: 'TIER-TITAN',
    name: 'TITAN',
    subtitle: 'Full Arsenal',
    price: '$20,000+',
    period: '/project',
    color: '#7c3aed',
    features: [
      { text: 'AI Consultation (Unlimited)', included: true },
      { text: 'Custom ML Models (Unlimited)', included: true },
      { text: 'Full Stack AI Platform', included: true },
      { text: 'Custom Dashboard + BI', included: true },
      { text: 'Multi-Agent System', included: true },
      { text: 'Dedicated Support', included: true },
      { text: 'Custom Training Pipeline', included: true },
    ],
    cta: 'DEPLOY TITAN',
    popular: false,
  },
];

export default function PricingCards() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded mb-6 font-mono-tech text-xs text-cyan-400">
            <span className="animate-pulse">◆</span>
            MISSION DEPLOYMENT TIERS
            <span className="animate-pulse">◆</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            MISSION <span className="text-glow-cyan">TIERS</span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            Transparent pricing for every mission scale. Custom quotes available for special operations.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative glass-card border rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? 'scale-105' : ''
              }`}
              style={{ borderColor: plan.popular ? `${plan.color}60` : 'rgba(55,65,81,0.3)' }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 font-mono-tech text-xs font-bold rounded"
                  style={{ background: `${plan.color}30`, color: plan.color, border: `1px solid ${plan.color}50` }}
                >
                  ★ RECOMMENDED
                </div>
              )}

              {/* Top glow bar */}
              {plan.popular && (
                <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)` }} />
              )}

              {/* Corner */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: plan.color }} />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: plan.color }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Tier ID */}
                <div className="font-mono-tech text-xs text-gray-600 mb-3">{plan.id}</div>

                {/* Name */}
                <div className="font-mono-tech text-xs mb-1" style={{ color: plan.color + '80' }}>{plan.subtitle}</div>
                <h3 className="font-orbitron text-3xl font-black text-white mb-5">{plan.name}</h3>

                {/* Price */}
                <div className="flex items-end gap-1 mb-7 pb-7 border-b border-gray-700/50">
                  <span className="font-orbitron text-4xl font-black" style={{ color: plan.color }}>
                    {plan.price}
                  </span>
                  <span className="font-mono-tech text-xs text-gray-600 mb-1">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded flex items-center justify-center text-xs flex-shrink-0"
                        style={{
                          background: feat.included ? `${plan.color}20` : 'rgba(55,65,81,0.3)',
                          color: feat.included ? plan.color : '#6b7280',
                          border: `1px solid ${feat.included ? plan.color + '40' : 'rgba(55,65,81,0.5)'}`,
                        }}
                      >
                        {feat.included ? '✓' : '×'}
                      </span>
                      <span className={`font-rajdhani text-sm ${feat.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-3.5 font-orbitron text-xs font-bold tracking-wider border-2 transition-all duration-300 hover:opacity-90"
                  style={{
                    borderColor: plan.color,
                    color: plan.popular ? '#000' : plan.color,
                    background: plan.popular ? plan.color : 'transparent',
                  }}
                >
                  [ {plan.cta} ]
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-mono-tech text-xs text-gray-700 mt-8">
          All missions include code delivery, documentation, and 30-day post-launch support.
        </p>
      </div>
    </section>
  );
}
