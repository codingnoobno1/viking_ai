'use client';

import dynamic from 'next/dynamic';

// Layout components
import RobotNav from '@/components/portfolio/RobotNav';
import RobotFooter from '@/components/portfolio/RobotFooter';

// Sections
import RobotHero from '@/components/portfolio/RobotHero';
import AboutUnit from '@/components/portfolio/AboutUnit';
import SkillsMatrix from '@/components/portfolio/SkillsMatrix';
import ProjectsMission from '@/components/portfolio/ProjectsMission';
import StatsCounter from '@/components/portfolio/StatsCounter';
import Timeline from '@/components/portfolio/Timeline';
import ServiceCards from '@/components/portfolio/ServiceCards';
import ProcessSteps from '@/components/portfolio/ProcessSteps';
import Testimonials from '@/components/portfolio/Testimonials';
import TechStack from '@/components/portfolio/TechStack';
import BlogPosts from '@/components/portfolio/BlogPosts';
import AwardsSection from '@/components/portfolio/AwardsSection';
import PricingCards from '@/components/portfolio/PricingCards';
import FAQAccordion from '@/components/portfolio/FAQAccordion';
import ContactPanel from '@/components/portfolio/ContactPanel';
import SectionDivider from '@/components/portfolio/SectionDivider';
import TerminalConsole from '@/components/portfolio/TerminalConsole';
import GitHubStats from '@/components/portfolio/GitHubStats';
import GlitchText from '@/components/portfolio/GlitchText';

// Client-only (canvas/heavy)
const MatrixRain = dynamic(() => import('@/components/portfolio/MatrixRain'), { ssr: false });
const ParticleSystem = dynamic(() => import('@/components/portfolio/ParticleSystem'), { ssr: false });
const NeuralNetwork = dynamic(() => import('@/components/portfolio/NeuralNetwork'), { ssr: false });
const RadarChart = dynamic(() => import('@/components/portfolio/RadarChart'), { ssr: false });
const DataStream = dynamic(() => import('@/components/portfolio/DataStream'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/portfolio/LoadingScreen'), { ssr: false });
const RobotCursor = dynamic(() => import('@/components/portfolio/RobotCursor'), { ssr: false });
const HUDOverlay = dynamic(() => import('@/components/portfolio/HUDOverlay'), { ssr: false });

export default function PortfolioPage() {
  return (
    <>
      {/* ===== GLOBAL EFFECTS ===== */}
      <LoadingScreen />
      <RobotCursor />
      <MatrixRain />
      <ParticleSystem />
      <HUDOverlay />

      {/* ===== NAVIGATION ===== */}
      <RobotNav />

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10">

        {/* 1. HERO */}
        <RobotHero />

        <SectionDivider variant="circuit" />

        {/* 2. GLITCH HEADLINE BANNER */}
        <div className="py-12 text-center px-6">
          <div className="font-orbitron text-2xl md:text-4xl font-black tracking-widest">
            <GlitchText text="BUILDING THE AI-POWERED FUTURE" intensity="medium" />
          </div>
          <p className="font-mono-tech text-sm text-gray-600 mt-3 tracking-widest">
            ◆ UNIT-7 PORTFOLIO SYSTEM — OPERATIONAL SINCE 2021 ◆
          </p>
        </div>

        <SectionDivider variant="scan" label="ABOUT MODULE" />

        {/* 3. ABOUT */}
        <AboutUnit />

        {/* 4. TERMINAL CONSOLE */}
        <TerminalConsole />

        <SectionDivider variant="hex" label="CAPABILITIES" />

        {/* 5. SKILLS MATRIX */}
        <SkillsMatrix />

        {/* 6. RADAR CHART */}
        <RadarChart />

        <SectionDivider variant="data" />

        {/* 7. PROJECTS */}
        <ProjectsMission />

        {/* 8. DATA STREAM */}
        <DataStream />

        <SectionDivider variant="circuit" />

        {/* 9. NEURAL NETWORK VIZ */}
        <NeuralNetwork />

        <SectionDivider variant="scan" label="PERFORMANCE DATA" />

        {/* 10. STATS */}
        <StatsCounter />

        {/* 11. TECH STACK MARQUEE */}
        <TechStack />

        <SectionDivider variant="hex" label="MISSION HISTORY" />

        {/* 12. TIMELINE */}
        <Timeline />

        <SectionDivider variant="scan" label="SERVICES" />

        {/* 13. SERVICES */}
        <ServiceCards />

        {/* 14. PROCESS STEPS */}
        <ProcessSteps />

        <SectionDivider variant="circuit" />

        {/* 15. GITHUB STATS */}
        <GitHubStats />

        <SectionDivider variant="scan" label="SOCIAL PROOF" />

        {/* 16. TESTIMONIALS */}
        <Testimonials />

        {/* 17. AWARDS */}
        <AwardsSection />

        <SectionDivider variant="data" />

        {/* 18. BLOG */}
        <BlogPosts />

        {/* 19. PRICING */}
        <PricingCards />

        <SectionDivider variant="hex" label="SUPPORT" />

        {/* 20. FAQ */}
        <FAQAccordion />

        {/* 21. CONTACT */}
        <ContactPanel />

      </main>

      {/* ===== FOOTER ===== */}
      <RobotFooter />
    </>
  );
}
