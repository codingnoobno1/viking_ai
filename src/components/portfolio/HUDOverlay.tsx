'use client';
import { useEffect, useState, useRef } from 'react';

export default function HUDOverlay() {
  const [time, setTime] = useState('');
  const [fps, setFps] = useState(60);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lastFrame = useRef(Date.now());
  const frameCount = useRef(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const t = setInterval(updateTime, 1000);

    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);

    // FPS counter
    let animId: number;
    const countFPS = () => {
      frameCount.current++;
      const now = Date.now();
      if (now - lastFrame.current >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastFrame.current = now;
      }
      animId = requestAnimationFrame(countFPS);
    };
    animId = requestAnimationFrame(countFPS);

    return () => {
      clearInterval(t);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Top-left HUD */}
      <div className="fixed top-20 left-4 z-40 pointer-events-none hidden xl:block">
        <div className="glass-card border border-cyan-500/15 rounded p-3 space-y-1.5 opacity-60">
          <div className="font-mono-tech text-xs text-cyan-400/80">◆ VIKING AI SYS</div>
          <div className="font-mono-tech text-xs text-gray-600">
            TIME: <span className="text-cyan-400">{time}</span>
          </div>
          <div className="font-mono-tech text-xs text-gray-600">
            FPS: <span className="text-green-400">{fps}</span>
          </div>
          <div className="font-mono-tech text-xs text-gray-600">
            X: <span className="text-cyan-400">{mousePos.x}</span>
            {' '}Y: <span className="text-cyan-400">{mousePos.y}</span>
          </div>
          <div className="font-mono-tech text-xs text-gray-700">◆ UNIT-7 ONLINE</div>
        </div>
      </div>

      {/* Top-right HUD */}
      <div className="fixed top-20 right-4 z-40 pointer-events-none hidden xl:block">
        <div className="glass-card border border-purple-500/15 rounded p-3 space-y-1.5 opacity-60">
          <div className="font-mono-tech text-xs text-purple-400/80">◈ STATUS PANEL</div>
          {[
            { label: 'AI CORE', value: 'ACTIVE', color: '#10b981' },
            { label: 'NEURAL NET', value: 'ONLINE', color: '#10b981' },
            { label: 'DATABASE', value: 'SYNC', color: '#00d4ff' },
            { label: 'SECURITY', value: 'ARMED', color: '#f59e0b' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: item.color }} />
              <span className="font-mono-tech text-xs text-gray-600">{item.label}:</span>
              <span className="font-mono-tech text-xs" style={{ color: item.color }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom left — coordinates */}
      <div className="fixed bottom-8 left-4 z-40 pointer-events-none hidden xl:block opacity-30">
        <div className="font-mono-tech text-xs text-cyan-400/50">
          COORD: {mousePos.x.toString().padStart(4, '0')},{mousePos.y.toString().padStart(4, '0')}
        </div>
      </div>

      {/* Crosshair center indicator */}
      <div className="fixed bottom-8 right-4 z-40 pointer-events-none hidden xl:block opacity-30">
        <div className="font-mono-tech text-xs text-gray-700">
          VIKING_AI v4.7.2
        </div>
      </div>
    </>
  );
}
