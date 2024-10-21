import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default App;
