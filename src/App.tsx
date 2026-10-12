import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Toast } from './components/layout/Toast';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CredibilityStrip } from './components/sections/CredibilityStrip';
import { InfiniteMarquee } from './components/common/InfiniteMarquee';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { useAppDispatch } from './store/hooks';
import { setActiveSection } from './store/slices/uiSlice';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'approach', 'education', 'contact'];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            dispatch(setActiveSection(id));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [dispatch]);

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 selection:bg-teal-brand/40 selection:text-white">
      {/* Navigation & Overlays */}
      <Navbar />
      <MobileDrawer />
      <Toast />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <CredibilityStrip />
        <InfiniteMarquee />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ApproachSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
