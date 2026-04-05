import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
      <Navbar />
    </>
  );
}

export default App;
