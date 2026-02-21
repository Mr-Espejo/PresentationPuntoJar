import React, { useState, useEffect, useCallback } from 'react';
import { COLORS } from './constants';

// Slide Components
import IntroSlide from './components/slides/IntroSlide';
import MotivationSlide from './components/slides/MotivationSlide';
import ProblemSlide from './components/slides/ProblemSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import IASlide from './components/slides/IASlide';
import MarketSlide from './components/slides/MarketSlide';
import TeamSlide from './components/slides/TeamSlide'; // Unified Team
import ProfilesSlide from './components/slides/ProfilesSlide';
import MissionVisionSlide from './components/slides/MissionVisionSlide';
import ValidationSlide from './components/slides/ValidationSlide';
import IDTBenefitsSlide from './components/slides/IDTBenefitsSlide';
import ProposalSlide from './components/slides/ProposalSlide';
import ClosingSlide from './components/slides/ClosingSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13;
  const LOGO_URL = COLORS.logo;
  const BOGOTA_BG_URL = COLORS.bogotaBg;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#fdf6eb]">

      {/* CITY BACKGROUND LAYER (Bogotá) - Only visible on Slide 0 */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-25' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${BOGOTA_BG_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdf6eb]"></div>
      </div>

      {/* BACKGROUND BRANDING LAYER: Blurred Logos */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-5 z-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'delay-500' : ''}`}>
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] blur-3xl animate-pulse">
          <img src={LOGO_URL} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] blur-2xl opacity-50">
          <img src={LOGO_URL} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute top-1/4 left-1/2 w-32 h-32 blur-md opacity-20 animate-bounce" style={{ animationDuration: '8s' }}>
          <img src={LOGO_URL} className="w-full h-full" alt="" />
        </div>
      </div>

      {/* FIXED LOGO ELEMENT */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-2">
        <div className="w-12 h-12 rounded-full border-2 border-[#5d2b12] overflow-hidden shadow-lg bg-white">
          <img src={LOGO_URL} className="w-full h-full scale-110" alt="Logo Icono" />
        </div>
        <span className="font-black text-[#5d2b12] text-xl tracking-tighter uppercase hidden md:block">Punto Jar</span>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-[#5d2b12] transition-all duration-300 z-50" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }} />

      {/* SLIDES RENDERER */}
      <IntroSlide active={currentSlide === 0} logoUrl={LOGO_URL} />
      <MotivationSlide active={currentSlide === 1} logoUrl={LOGO_URL} />
      <ProblemSlide active={currentSlide === 2} logoUrl={LOGO_URL} />
      <SolutionSlide active={currentSlide === 3} logoUrl={LOGO_URL} />
      <IASlide active={currentSlide === 4} logoUrl={LOGO_URL} />
      <ValidationSlide active={currentSlide === 5} logoUrl={LOGO_URL} />
      <ProfilesSlide active={currentSlide === 6} />
      <IDTBenefitsSlide active={currentSlide === 7} logoUrl={LOGO_URL} />
      <ProposalSlide active={currentSlide === 8} logoUrl={LOGO_URL} />
      <MarketSlide active={currentSlide === 9} />
      <TeamSlide active={currentSlide === 10} logoUrl={LOGO_URL} />
      <MissionVisionSlide active={currentSlide === 11} logoUrl={LOGO_URL} />
      <ClosingSlide active={currentSlide === 12} logoUrl={LOGO_URL} />

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-between items-center px-10 z-50">
        <div className="flex gap-4">
          <button onClick={prevSlide} className="w-14 h-14 rounded-2xl bg-[#5d2b12] text-white shadow-xl flex items-center justify-center hover:bg-black transition-all active:scale-90">
            <span className="text-2xl font-bold">←</span>
          </button>
          <button onClick={nextSlide} className="w-14 h-14 rounded-2xl bg-[#5d2b12] text-white shadow-xl flex items-center justify-center hover:bg-black transition-all active:scale-90">
            <span className="text-2xl font-bold">→</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#5d2b12]/10 hidden md:block"></div>
          <div className="text-[#5d2b12] font-black text-3xl tracking-tighter">{currentSlide + 1} <span className="text-sm opacity-30">/ {totalSlides}</span></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;