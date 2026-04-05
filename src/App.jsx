import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components for faster initial render
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Achievements = lazy(() => import('./components/Achievements'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<div style={{ height: '50vh' }}></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
        </Suspense>
      </main>
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
      <Navbar />
    </>
  );
}

export default App;
