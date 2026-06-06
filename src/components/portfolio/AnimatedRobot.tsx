'use client';

export default function AnimatedRobot() {
  return (
    <>
      {/* ===== All robot styles scoped here ===== */}
      <style>{`
        /* Card wrapper */
        .vk-robot-card {
          background: rgba(10, 5, 30, 0.6);
          border: 1px solid rgba(0, 212, 255, 0.18);
          border-radius: 24px;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.12), 0 0 0 1px rgba(124,58,237,0.08);
          overflow: hidden;
        }
        /* Grid bg */
        .vk-robot-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
          border-radius: 24px;
          pointer-events: none;
        }
        /* Scanning line */
        .vk-robot-card::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.8), transparent);
          box-shadow: 0 0 14px rgba(0, 212, 255, 0.6);
          animation: vkScan 3s linear infinite;
          pointer-events: none;
          z-index: 5;
        }
        @keyframes vkScan {
          0%   { top: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* Robot scene wrapper — floats */
        .vk-robot-scene {
          position: relative;
          width: 200px;
          height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: vkFloat 4s ease-in-out infinite;
          z-index: 2;
        }
        @keyframes vkFloat {
          0%, 100% { transform: translateY(0px)   rotate(0deg); }
          30%       { transform: translateY(-14px) rotate(0.8deg); }
          70%       { transform: translateY(-7px)  rotate(-0.8deg); }
        }

        /* ---- HEAD ---- */
        .vk-head {
          width: 96px;
          height: 76px;
          background: linear-gradient(145deg, #1a1035, #0e0a24);
          border: 1.5px solid rgba(0,212,255,0.45);
          border-radius: 18px 18px 12px 12px;
          position: relative;
          box-shadow: 0 0 24px rgba(0,212,255,0.25), inset 0 0 14px rgba(0,212,255,0.08);
          flex-shrink: 0;
        }
        /* Antenna stem */
        .vk-head::before {
          content: '';
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 18px;
          background: linear-gradient(to top, rgba(124,58,237,0.8), #00d4ff);
          border-radius: 2px;
        }
        /* Antenna tip */
        .vk-head::after {
          content: '';
          position: absolute;
          top: -27px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px; height: 10px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 10px #00d4ff, 0 0 22px #00d4ff;
          animation: vkAntenna 1.8s ease-in-out infinite;
        }
        @keyframes vkAntenna {
          0%, 75%, 100% { opacity: 1;   transform: translateX(-50%) scale(1); }
          85%            { opacity: 0.2; transform: translateX(-50%) scale(0.5); }
        }

        /* Eyes row */
        .vk-eyes {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
        }
        .vk-eye {
          width: 17px; height: 17px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 10px #00d4ff, 0 0 22px rgba(0,212,255,0.6);
          animation: vkEyeGlow 2.5s ease-in-out infinite;
          position: relative;
        }
        /* Eye shine */
        .vk-eye::after {
          content: '';
          position: absolute;
          top: 3px; left: 3px;
          width: 5px; height: 5px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
        }
        @keyframes vkEyeGlow {
          0%, 100% { box-shadow: 0 0 10px #00d4ff, 0 0 22px rgba(0,212,255,0.6); }
          50%       { box-shadow: 0 0 20px #00d4ff, 0 0 44px rgba(0,212,255,0.85), 0 0 70px rgba(0,212,255,0.3); }
        }
        /* Blink on left eye */
        .vk-eye.vk-blink { animation: vkEyeGlow 2.5s ease-in-out infinite, vkBlink 4s 1.5s step-end infinite; }
        @keyframes vkBlink {
          0%, 94%, 100% { transform: scaleY(1); }
          97%            { transform: scaleY(0.07); }
        }

        /* Mouth / equalizer bars */
        .vk-mouth {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 4px;
          align-items: flex-end;
        }
        .vk-mouth span {
          display: block;
          width: 5px;
          background: rgba(124,58,237,0.9);
          border-radius: 3px;
          animation: vkBar 0.55s ease-in-out infinite alternate;
        }
        .vk-mouth span:nth-child(1) { height: 6px;  animation-delay: 0.00s; }
        .vk-mouth span:nth-child(2) { height: 13px; animation-delay: 0.10s; }
        .vk-mouth span:nth-child(3) { height: 8px;  animation-delay: 0.20s; }
        .vk-mouth span:nth-child(4) { height: 15px; animation-delay: 0.15s; }
        .vk-mouth span:nth-child(5) { height: 6px;  animation-delay: 0.05s; }
        @keyframes vkBar {
          from { transform: scaleY(0.35); opacity: 0.5; }
          to   { transform: scaleY(1.2);  opacity: 1; }
        }

        /* ---- NECK ---- */
        .vk-neck {
          width: 26px; height: 12px;
          background: #100828;
          border-left: 1.5px solid rgba(0,212,255,0.25);
          border-right: 1.5px solid rgba(0,212,255,0.25);
          flex-shrink: 0;
        }

        /* ---- BODY ---- */
        .vk-body {
          width: 124px; height: 104px;
          background: linear-gradient(145deg, #1a1035, #0e0a24);
          border: 1.5px solid rgba(0,212,255,0.35);
          border-radius: 12px;
          position: relative;
          box-shadow: 0 0 28px rgba(124,58,237,0.18), inset 0 0 18px rgba(0,212,255,0.06);
          flex-shrink: 0;
        }
        /* Chest orb */
        .vk-body::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 34px; height: 34px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.2) 60%, transparent 100%);
          border: 1.5px solid rgba(0,212,255,0.5);
          box-shadow: 0 0 16px rgba(0,212,255,0.4), 0 0 32px rgba(0,212,255,0.15);
          animation: vkOrb 2s ease-in-out infinite;
        }
        @keyframes vkOrb {
          0%, 100% { transform: translate(-50%,-50%) scale(1);    box-shadow: 0 0 16px rgba(0,212,255,0.4); }
          50%       { transform: translate(-50%,-50%) scale(1.18); box-shadow: 0 0 34px rgba(0,212,255,0.75), 0 0 64px rgba(0,212,255,0.2); }
        }
        /* Inner border */
        .vk-body::after {
          content: '';
          position: absolute;
          inset: 7px;
          border: 1px solid rgba(0,212,255,0.1);
          border-radius: 7px;
        }
        /* Side vents */
        .vk-vent {
          position: absolute;
          top: 16px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .vk-vent.l { left: 8px; }
        .vk-vent.r { right: 8px; }
        .vk-vent span {
          display: block;
          width: 15px; height: 3px;
          background: rgba(0,212,255,0.35);
          border-radius: 2px;
        }

        /* ---- ARMS ---- */
        .vk-arms {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .vk-arm {
          position: absolute;
          top: 8px;
          width: 22px; height: 76px;
          background: linear-gradient(to bottom, #1a1035, #0e0a24);
          border: 1.5px solid rgba(0,212,255,0.35);
          border-radius: 8px;
        }
        .vk-arm.l { left: -28px; transform-origin: top center; animation: vkArmL 4s ease-in-out infinite; }
        .vk-arm.r { right: -28px; transform-origin: top center; animation: vkArmR 4s ease-in-out infinite; }
        @keyframes vkArmL {
          0%, 100% { transform: rotate(-8deg); }
          50%       { transform: rotate(8deg); }
        }
        @keyframes vkArmR {
          0%, 100% { transform: rotate(8deg); }
          50%       { transform: rotate(-8deg); }
        }
        /* Hands */
        .vk-arm::after {
          content: '';
          position: absolute;
          bottom: -9px; left: 50%;
          transform: translateX(-50%);
          width: 18px; height: 18px;
          background: linear-gradient(145deg, #221548, #160e38);
          border: 1.5px solid rgba(0,212,255,0.55);
          border-radius: 5px;
          box-shadow: 0 0 8px rgba(0,212,255,0.3);
        }

        /* ---- LEGS ---- */
        .vk-legs {
          display: flex;
          gap: 22px;
          flex-shrink: 0;
        }
        .vk-leg {
          width: 26px; height: 54px;
          background: linear-gradient(to bottom, #1a1035, #0e0a24);
          border: 1.5px solid rgba(0,212,255,0.3);
          border-radius: 5px 5px 8px 8px;
          position: relative;
        }
        .vk-leg.l { animation: vkLegL 4s ease-in-out infinite; transform-origin: top center; }
        .vk-leg.r { animation: vkLegR 4s ease-in-out infinite; transform-origin: top center; }
        @keyframes vkLegL {
          0%, 100% { transform: rotate(4deg); }
          50%       { transform: rotate(-4deg); }
        }
        @keyframes vkLegR {
          0%, 100% { transform: rotate(-4deg); }
          50%       { transform: rotate(4deg); }
        }
        /* Feet */
        .vk-leg::after {
          content: '';
          position: absolute;
          bottom: -8px; left: 50%;
          transform: translateX(-50%);
          width: 34px; height: 11px;
          background: linear-gradient(145deg, #221548, #160e38);
          border: 1.5px solid rgba(0,212,255,0.35);
          border-radius: 4px;
          box-shadow: 0 4px 10px rgba(0,212,255,0.15);
        }

        /* Shadow on ground */
        .vk-shadow {
          position: absolute;
          bottom: 14px;
          width: 130px; height: 18px;
          background: radial-gradient(ellipse, rgba(0,212,255,0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: vkShadow 4s ease-in-out infinite;
        }
        @keyframes vkShadow {
          0%, 100% { transform: scaleX(1);   opacity: 0.5; }
          30%       { transform: scaleX(0.65); opacity: 0.2; }
        }

        /* ---- ORBIT RINGS ---- */
        .vk-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed;
          pointer-events: none;
          top: 50%; left: 50%;
        }
        .vk-orbit-1 {
          width: 310px; height: 310px;
          margin: -155px 0 0 -155px;
          border-color: rgba(0,212,255,0.12);
          animation: vkOrbitSpin 12s linear infinite;
        }
        .vk-orbit-2 {
          width: 370px; height: 370px;
          margin: -185px 0 0 -185px;
          border-color: rgba(124,58,237,0.08);
          animation: vkOrbitSpin 20s linear infinite reverse;
        }
        @keyframes vkOrbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Orbiting dots */
        .vk-orb-dot {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
        }
        .vk-orb-dot-1 {
          width: 9px; height: 9px;
          margin: -4.5px 0 0 -4.5px;
          background: #00d4ff;
          box-shadow: 0 0 14px #00d4ff, 0 0 28px rgba(0,212,255,0.5);
          animation: vkDotOrbit 6s linear infinite;
        }
        .vk-orb-dot-2 {
          width: 7px; height: 7px;
          margin: -3.5px 0 0 -3.5px;
          background: #7c3aed;
          box-shadow: 0 0 10px #7c3aed, 0 0 22px rgba(124,58,237,0.5);
          animation: vkDotOrbit 9s linear infinite reverse;
        }
        @keyframes vkDotOrbit {
          from { transform: rotate(0deg)   translateX(155px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(155px) rotate(-360deg); }
        }

        /* ---- HUD LABELS ---- */
        .vk-hud {
          position: absolute;
          font-family: 'Share Tech Mono', 'Courier New', monospace;
          font-size: 0.58rem;
          color: rgba(0,212,255,0.45);
          pointer-events: none;
          line-height: 1.5;
          z-index: 4;
        }
        .vk-hud.tl { top: 14px; left: 18px; }
        .vk-hud.tr { top: 14px; right: 18px; text-align: right; }
        .vk-hud.bl { bottom: 14px; left: 18px; }
        .vk-hud.br { bottom: 14px; right: 18px; text-align: right; }
        /* HUD corner bracket */
        .vk-hud-bracket {
          position: absolute;
          width: 14px; height: 14px;
          pointer-events: none;
        }
        .vk-hud-bracket.tl { top: 10px; left: 10px; border-top: 1.5px solid rgba(0,212,255,0.35); border-left: 1.5px solid rgba(0,212,255,0.35); }
        .vk-hud-bracket.tr { top: 10px; right: 10px; border-top: 1.5px solid rgba(0,212,255,0.35); border-right: 1.5px solid rgba(0,212,255,0.35); }
        .vk-hud-bracket.bl { bottom: 10px; left: 10px; border-bottom: 1.5px solid rgba(0,212,255,0.35); border-left: 1.5px solid rgba(0,212,255,0.35); }
        .vk-hud-bracket.br { bottom: 10px; right: 10px; border-bottom: 1.5px solid rgba(0,212,255,0.35); border-right: 1.5px solid rgba(0,212,255,0.35); }

        /* ---- SCROLL INDICATOR ---- */
        .vk-scroll {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-top: 24px;
          animation: vkFadeInUp 1s 1.2s both;
        }
        .vk-scroll-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.62rem;
          color: rgba(0,212,255,0.4);
          letter-spacing: 0.18em;
        }
        .vk-mouse {
          width: 22px; height: 36px;
          border: 1.5px solid rgba(0,212,255,0.4);
          border-radius: 11px;
          position: relative;
        }
        .vk-mouse::before {
          content: '';
          position: absolute;
          top: 5px; left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 8px;
          background: #00d4ff;
          border-radius: 2px;
          animation: vkWheel 1.6s ease-in-out infinite;
        }
        @keyframes vkWheel {
          0%   { top: 5px;  opacity: 1; }
          75%  { top: 18px; opacity: 0.2; }
          100% { top: 5px;  opacity: 0; }
        }
        .vk-scroll-chevrons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .vk-scroll-chevrons span {
          display: block;
          width: 10px; height: 10px;
          border-right: 1.5px solid rgba(0,212,255,0.5);
          border-bottom: 1.5px solid rgba(0,212,255,0.5);
          transform: rotate(45deg);
          animation: vkChevron 1.6s ease-in-out infinite;
        }
        .vk-scroll-chevrons span:nth-child(1) { animation-delay: 0s;    opacity: 0.3; }
        .vk-scroll-chevrons span:nth-child(2) { animation-delay: 0.2s;  opacity: 0.6; }
        .vk-scroll-chevrons span:nth-child(3) { animation-delay: 0.4s;  opacity: 1; }
        @keyframes vkChevron {
          0%, 100% { transform: rotate(45deg) translateY(0);  }
          50%       { transform: rotate(45deg) translateY(4px); }
        }
        @keyframes vkFadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* ===== Robot Card ===== */}
        <div className="vk-robot-card">

          {/* HUD corner brackets */}
          <div className="vk-hud-bracket tl" />
          <div className="vk-hud-bracket tr" />
          <div className="vk-hud-bracket bl" />
          <div className="vk-hud-bracket br" />

          {/* HUD text labels */}
          <div className="vk-hud tl">SYS:ONLINE<br />CPU: 23%</div>
          <div className="vk-hud tr">v4.7.2<br />READY</div>
          <div className="vk-hud bl">MEM: 67%<br />◆ ACTIVE</div>
          <div className="vk-hud br">AI:CORE<br />NEURAL</div>

          {/* Orbit rings */}
          <div className="vk-orbit vk-orbit-1" />
          <div className="vk-orbit vk-orbit-2" />

          {/* Orbiting glowing dots */}
          <div className="vk-orb-dot vk-orb-dot-1" />
          <div className="vk-orb-dot vk-orb-dot-2" />

          {/* ===== The Robot ===== */}
          <div className="vk-robot-scene">

            {/* HEAD */}
            <div className="vk-head">
              <div className="vk-eyes">
                <div className="vk-eye vk-blink" />
                <div className="vk-eye" />
              </div>
              <div className="vk-mouth">
                <span /><span /><span /><span /><span />
              </div>
            </div>

            {/* NECK */}
            <div className="vk-neck" />

            {/* BODY */}
            <div className="vk-body">
              {/* Side vents */}
              <div className="vk-vent l"><span /><span /><span /></div>
              <div className="vk-vent r"><span /><span /><span /></div>
              {/* Arms */}
              <div className="vk-arms">
                <div className="vk-arm l" />
                <div className="vk-arm r" />
              </div>
            </div>

            {/* LEGS */}
            <div className="vk-legs">
              <div className="vk-leg l" />
              <div className="vk-leg r" />
            </div>

            {/* Ground shadow */}
            <div className="vk-shadow" />
          </div>
        </div>

        {/* ===== Scroll Indicator ===== */}
        <div className="vk-scroll">
          <div className="vk-mouse" />
          <div className="vk-scroll-chevrons">
            <span /><span /><span />
          </div>
          <div className="vk-scroll-label">SCROLL DOWN</div>
        </div>
      </div>
    </>
  );
}
