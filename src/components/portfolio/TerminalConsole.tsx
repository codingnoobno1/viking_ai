'use client';
import { useState, useEffect } from 'react';

const lines = [
  { delay: 0, text: '> SYSTEM BOOT SEQUENCE INITIATED', color: '#00d4ff' },
  { delay: 400, text: '> Loading neural modules...', color: '#6b7280' },
  { delay: 800, text: '> [OK] TensorFlow v2.15.0 initialized', color: '#10b981' },
  { delay: 1200, text: '> [OK] CUDA drivers: ACTIVE (RTX 4090)', color: '#10b981' },
  { delay: 1600, text: '> [OK] Vector database: CONNECTED', color: '#10b981' },
  { delay: 2000, text: '> [WARN] Model cache: 89% capacity', color: '#f59e0b' },
  { delay: 2400, text: '> Spawning agent processes...', color: '#6b7280' },
  { delay: 2800, text: '> [AGENT-01] online — reasoning_core', color: '#10b981' },
  { delay: 3200, text: '> [AGENT-02] online — vision_processor', color: '#10b981' },
  { delay: 3600, text: '> [AGENT-03] online — nlp_engine', color: '#10b981' },
  { delay: 4000, text: '> All systems operational. VIKING AI ready.', color: '#00d4ff' },
  { delay: 4400, text: '> Type `help` for available commands_', color: '#7c3aed' },
];

const commands: Record<string, string[]> = {
  help: [
    '  Available commands:',
    '  status    — System status report',
    '  models    — List AI models',
    '  ping      — Test connectivity',
    '  clear     — Clear terminal',
  ],
  status: [
    '  SYSTEM STATUS REPORT:',
    '  CPU: 23% | MEM: 67% | GPU: 89%',
    '  Agents online: 3/3',
    '  API calls today: 14,823',
    '  Uptime: 99.97%',
  ],
  models: [
    '  DEPLOYED MODELS:',
    '  [1] NeuralForge-7B    — production',
    '  [2] VisionSentinel-v3  — production',
    '  [3] QuantumChat-13B   — staging',
    '  [4] SonicForge-v2     — development',
  ],
  ping: [
    '  Pinging Viking AI API...',
    '  Response: 12ms',
    '  Status: 200 OK',
    '  Connection: SECURE ✓',
  ],
};

export default function TerminalConsole() {
  const [visibleLines, setVisibleLines] = useState<typeof lines>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ text: string; color: string }[]>([]);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    lines.forEach(line => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
      }, line.delay);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCursorBlink(b => !b), 530);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { text: `> ${input}`, color: '#e2e8f0' }];

      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      if (commands[cmd]) {
        commands[cmd].forEach(line => {
          newHistory.push({ text: line, color: '#10b981' });
        });
      } else if (cmd) {
        newHistory.push({ text: `  Command not found: ${cmd}. Type 'help'.`, color: '#ef4444' });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card border border-cyan-500/20 rounded-xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-700/50 bg-gray-900/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer transition-colors" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-mono-tech text-xs text-gray-500">VIKING_AI_CONSOLE — bash — 80×24</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono-tech text-xs text-green-400">CONNECTED</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 h-80 overflow-y-auto font-mono-tech text-sm">
            {/* Boot lines */}
            {visibleLines.map((line, i) => (
              <div key={i} className="mb-0.5" style={{ color: line.color }}>
                {line.text}
              </div>
            ))}

            {/* Command history */}
            {history.map((line, i) => (
              <div key={`h-${i}`} className="mb-0.5" style={{ color: line.color }}>
                {line.text}
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center mt-2">
              <span className="text-cyan-400 mr-2">viking@ai:~$</span>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent outline-none text-white caret-cyan-400"
                placeholder=""
                autoComplete="off"
                spellCheck={false}
              />
              {cursorBlink && <span className="text-cyan-400">█</span>}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-5 py-2 border-t border-gray-700/50 bg-gray-900/30 flex items-center gap-4">
            {['help', 'status', 'models', 'ping'].map(cmd => (
              <button
                key={cmd}
                onClick={() => {
                  setInput(cmd);
                }}
                className="font-mono-tech text-xs text-gray-600 hover:text-cyan-400 transition-colors"
              >
                {cmd}
              </button>
            ))}
            <span className="ml-auto font-mono-tech text-xs text-gray-700">ESC to clear</span>
          </div>
        </div>
      </div>
    </section>
  );
}
