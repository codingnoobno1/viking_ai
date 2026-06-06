'use client';

interface SectionDividerProps {
  variant?: 'scan' | 'hex' | 'circuit' | 'data';
  label?: string;
}

export default function SectionDivider({ variant = 'scan', label }: SectionDividerProps) {
  if (variant === 'scan') {
    return (
      <div className="relative flex items-center justify-center py-8 px-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-500/30" />
        <div className="px-6 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          {label && <span className="font-mono-tech text-xs text-gray-600 tracking-widest">{label}</span>}
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-500/30" />
      </div>
    );
  }

  if (variant === 'hex') {
    return (
      <div className="relative flex items-center justify-center py-10 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="relative flex items-center gap-3 px-4">
          {[-2, -1, 0, 1, 2].map(i => (
            <div
              key={i}
              className="border border-purple-500/30 rotate-45"
              style={{
                width: `${14 - Math.abs(i) * 2}px`,
                height: `${14 - Math.abs(i) * 2}px`,
                opacity: 1 - Math.abs(i) * 0.2,
                background: i === 0 ? 'rgba(124,58,237,0.2)' : 'transparent',
                animation: i === 0 ? 'hexagonSpin 6s linear infinite' : undefined,
              }}
            />
          ))}
          {label && <span className="font-mono-tech text-xs text-purple-400/60 absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">{label}</span>}
        </div>
      </div>
    );
  }

  if (variant === 'circuit') {
    return (
      <div className="relative flex items-center justify-center py-8 px-6">
        <svg viewBox="0 0 400 20" className="w-full max-w-2xl h-5 opacity-30">
          <line x1="0" y1="10" x2="140" y2="10" stroke="#00d4ff" strokeWidth="1" />
          <rect x="140" y="6" width="8" height="8" fill="none" stroke="#00d4ff" strokeWidth="1" />
          <line x1="152" y1="10" x2="180" y2="10" stroke="#00d4ff" strokeWidth="1" />
          <line x1="180" y1="10" x2="180" y2="2" stroke="#00d4ff" strokeWidth="1" />
          <rect x="176" y="0" width="8" height="4" fill="#00d4ff" opacity="0.5" />
          <line x1="188" y1="10" x2="210" y2="10" stroke="#00d4ff" strokeWidth="1" />
          <circle cx="210" cy="10" r="3" fill="#00d4ff" opacity="0.5" />
          <line x1="213" y1="10" x2="230" y2="10" stroke="#00d4ff" strokeWidth="1" />
          <line x1="220" y1="10" x2="220" y2="18" stroke="#00d4ff" strokeWidth="1" />
          <rect x="216" y="16" width="8" height="4" fill="#00d4ff" opacity="0.3" />
          <line x1="230" y1="10" x2="260" y2="10" stroke="#00d4ff" strokeWidth="1" />
          <rect x="252" y="6" width="8" height="8" fill="none" stroke="#00d4ff" strokeWidth="1" />
          <line x1="260" y1="10" x2="400" y2="10" stroke="#00d4ff" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  // data variant
  return (
    <div className="relative py-6 overflow-hidden">
      <div className="flex items-center gap-1 opacity-20">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-cyan-400 rounded-full"
            style={{
              height: `${4 + Math.random() * 12}px`,
              opacity: Math.random() > 0.5 ? 1 : 0.3,
              animation: `waveform ${0.5 + Math.random()}s ${Math.random()}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
