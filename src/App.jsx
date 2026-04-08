import React, { Suspense, lazy, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

// Lazy load below-the-fold components for faster initial render
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Skills = lazy(() => import('./components/Skills'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <>
      <CustomCursor />
      {!introFinished && (
        <Loader 
          onStartReveal={() => setContentVisible(true)}
          onComplete={() => setIntroFinished(true)} 
        />
      )}

      <div style={{ 
        opacity: contentVisible ? 1 : 0, 
        transform: contentVisible ? 'translateY(0)' : 'translateY(50px)', 
        transition: 'opacity 1.2s ease, transform 1.2s cubic-bezier(0.85, 0, 0.15, 1)', 
        pointerEvents: contentVisible ? 'auto' : 'none' 
      }}>
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div style={{ height: '50vh' }}></div>}>
            <Experience />
            <Projects />
            <Achievements />
            <Skills />
          </Suspense>
        </main>
        <Suspense fallback={<div></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
