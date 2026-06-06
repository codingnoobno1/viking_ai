'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'What types of AI solutions do you build?',
    a: 'We specialize in custom LLM applications, autonomous agent systems, computer vision pipelines, predictive analytics platforms, and full-stack AI-powered web/mobile applications. Essentially, if it involves AI/ML, we build it.',
    color: '#00d4ff',
  },
  {
    q: 'How long does a typical AI project take?',
    a: 'Project timelines vary by complexity. A focused AI MVP typically takes 4-6 weeks. Enterprise-grade AI platforms with full infrastructure can take 3-6 months. We always provide a detailed timeline during the blueprinting phase.',
    color: '#7c3aed',
  },
  {
    q: 'Do you provide model hosting and maintenance?',
    a: 'Yes. We offer full post-deployment support including model hosting on AWS/GCP/Azure, continuous monitoring, performance optimization, model retraining schedules, and 24/7 incident response.',
    color: '#10b981',
  },
  {
    q: 'Can you work with our existing data and systems?',
    a: 'Absolutely. We excel at integrating AI capabilities into existing infrastructure. We support REST APIs, GraphQL, databases (PostgreSQL, MongoDB, etc.), cloud platforms, and custom data formats.',
    color: '#f59e0b',
  },
  {
    q: 'How do you handle data privacy and security?',
    a: 'Data security is paramount. We implement end-to-end encryption, SOC 2 compliant infrastructure, on-premise deployment options, data anonymization pipelines, and never use client data for model training without explicit consent.',
    color: '#ef4444',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer project-based fixed pricing for well-scoped work, retainer packages for ongoing AI development, and consulting rates for advisory services. We provide detailed estimates after a free discovery call.',
    color: '#a78bfa',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded mb-6 font-mono-tech text-xs text-cyan-400">
            <span className="animate-pulse">?</span>
            INTELLIGENCE DATABASE — QUERY SYSTEM
            <span className="animate-pulse">?</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            FREQUENTLY <span className="text-glow-cyan">QUERIED</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card border rounded-xl overflow-hidden transition-all duration-300"
              style={{ borderColor: open === i ? `${faq.color}40` : 'rgba(55,65,81,0.5)' }}
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-4 p-5 text-left group"
              >
                {/* Number */}
                <span
                  className="font-mono-tech text-xs font-bold px-2 py-1 rounded flex-shrink-0 transition-colors"
                  style={{
                    color: open === i ? faq.color : '#6b7280',
                    background: open === i ? `${faq.color}20` : 'transparent',
                    border: `1px solid ${open === i ? faq.color + '40' : '#374151'}`,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Question text */}
                <span className={`font-rajdhani font-semibold text-base flex-1 transition-colors ${open === i ? 'text-white' : 'text-gray-300'}`}>
                  {faq.q}
                </span>

                {/* Toggle icon */}
                <span
                  className="flex-shrink-0 w-7 h-7 border rounded flex items-center justify-center font-mono-tech text-sm transition-all duration-300"
                  style={{
                    borderColor: open === i ? faq.color : '#374151',
                    color: open === i ? faq.color : '#6b7280',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: open === i ? '200px' : '0px' }}
              >
                <div className="px-5 pb-5">
                  {/* Divider */}
                  <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${faq.color}40, transparent)` }} />

                  <p className="font-rajdhani text-gray-400 text-sm leading-relaxed pl-11">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-rajdhani text-gray-500 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono-tech text-sm text-cyan-400 border border-cyan-400/40 px-6 py-3 hover:bg-cyan-400/10 transition-all duration-300"
          >
            ◉ OPEN A DIRECT CHANNEL →
          </a>
        </div>
      </div>
    </section>
  );
}
