import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { DSASection } from './sections/DSASection';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { CurrentlyExploring } from './sections/CurrentlyExploring';
import { ResumeCTA } from './sections/ResumeCTA';
import { Contact } from './sections/Contact';
import { ResumeModal } from './components/common/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 dark:bg-[#121212] dark:text-slate-100 transition-colors duration-200">
      {/* Sticky Responsive Navbar (Unchanged as requested) */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <DSASection />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CurrentlyExploring />
        <ResumeCTA onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume Modal Viewer */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
