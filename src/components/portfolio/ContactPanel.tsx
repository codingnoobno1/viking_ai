'use client';
import { useState } from 'react';

export default function ContactPanel() {
  const [form, setForm] = useState({ name: '', email: '', mission: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 2000));
    setSending(false);
    setSent(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-gray-900/50 border font-rajdhani text-white placeholder-gray-600 px-4 py-3 rounded transition-all duration-300 outline-none text-sm ${
      focused === field
        ? 'border-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
        : 'border-gray-700/50 hover:border-gray-600'
    }`;

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 rounded mb-6 font-mono-tech text-xs text-cyan-400">
            <span className="animate-pulse">◎</span>
            OPEN COMMUNICATION CHANNEL
            <span className="animate-pulse">◎</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            INITIATE <span className="text-glow-cyan">CONTACT</span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg">
            Ready to deploy your next AI mission? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div className="space-y-6">
            <div className="glass-card border border-gray-700/50 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

              <h3 className="font-orbitron text-sm font-bold text-cyan-400 mb-6 tracking-widest">
                ◆ CONTACT VECTORS
              </h3>

              {[
                { icon: '📡', label: 'EMAIL UPLINK', value: 'unit7@vikingai.io', color: '#00d4ff' },
                { icon: '🌐', label: 'NEURAL NETWORK', value: 'vikingai.io', color: '#7c3aed' },
                { icon: '📍', label: 'BASE COORDINATES', value: 'Earth, Sector 7', color: '#10b981' },
                { icon: '⏰', label: 'RESPONSE TIME', value: '< 2.4 Hours', color: '#f59e0b' },
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-800/50 last:border-0 group cursor-pointer hover:border-gray-700/50 transition-colors">
                  <div
                    className="w-10 h-10 rounded border flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${contact.color}40`, background: `${contact.color}10` }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-mono-tech text-xs text-gray-600">{contact.label}</div>
                    <div className="font-rajdhani text-sm text-white font-semibold" style={{ color: contact.color }}>
                      {contact.value}
                    </div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono-tech text-xs text-gray-600">→</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card border border-gray-700/50 rounded-xl p-6">
              <h3 className="font-orbitron text-sm font-bold text-cyan-400 mb-4 tracking-widest">◆ SOCIAL NODES</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'GITHUB', icon: '⬡', color: '#ffffff', handle: '@vikingai' },
                  { name: 'LINKEDIN', icon: '◈', color: '#0077b5', handle: 'Viking AI' },
                  { name: 'TWITTER', icon: '◉', color: '#1da1f2', handle: '@vikingai' },
                  { name: 'DISCORD', icon: '◎', color: '#5865f2', handle: 'Viking AI Server' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-3 p-3 border border-gray-700/50 rounded hover:border-gray-600 group transition-all duration-300"
                  >
                    <span className="text-xl" style={{ color: social.color }}>{social.icon}</span>
                    <div>
                      <div className="font-orbitron text-xs font-bold text-white">{social.name}</div>
                      <div className="font-mono-tech text-xs text-gray-600">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="glass-card border border-gray-700/50 rounded-xl p-8 relative overflow-hidden">
            {/* Scan line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="text-6xl mb-4 animate-roboFloat">🤖</div>
                <div className="font-orbitron text-xl font-bold text-cyan-400 mb-2">TRANSMISSION SENT</div>
                <div className="font-mono-tech text-sm text-gray-500">Message received at Viking AI HQ.</div>
                <div className="font-mono-tech text-xs text-gray-600 mt-2">ETA: &lt; 2.4 hours</div>
              </div>
            ) : (
              <>
                <h3 className="font-orbitron text-sm font-bold text-cyan-400 mb-6 tracking-widest">
                  ◆ TRANSMIT MESSAGE
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono-tech text-xs text-gray-600 block mb-1.5">AGENT NAME</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        className={inputClass('name')}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono-tech text-xs text-gray-600 block mb-1.5">EMAIL UPLINK</label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        className={inputClass('email')}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono-tech text-xs text-gray-600 block mb-1.5">MISSION TYPE</label>
                    <select
                      value={form.mission}
                      onChange={e => setForm({ ...form, mission: e.target.value })}
                      onFocus={() => setFocused('mission')}
                      onBlur={() => setFocused('')}
                      className={inputClass('mission') + ' cursor-pointer'}
                    >
                      <option value="" className="bg-gray-900">Select Mission Type</option>
                      <option value="ai" className="bg-gray-900">AI Development</option>
                      <option value="web" className="bg-gray-900">Web Platform</option>
                      <option value="ml" className="bg-gray-900">ML Model Training</option>
                      <option value="consult" className="bg-gray-900">AI Consultation</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono-tech text-xs text-gray-600 block mb-1.5">MESSAGE PAYLOAD</label>
                    <textarea
                      rows={5}
                      placeholder="Describe your mission objectives..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      className={inputClass('message') + ' resize-none'}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full relative py-4 font-orbitron text-sm font-bold tracking-wider overflow-hidden group transition-all duration-300 disabled:opacity-70"
                    style={{
                      background: sending ? 'rgba(0,212,255,0.1)' : 'transparent',
                      border: '2px solid #00d4ff',
                      color: '#00d4ff',
                    }}
                  >
                    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {sending ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="animate-spin">⟳</span>
                        TRANSMITTING...
                        <span className="animate-pulse">█</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        ◉ SEND TRANSMISSION
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                      </span>
                    )}
                    {/* Corner glow dots */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
