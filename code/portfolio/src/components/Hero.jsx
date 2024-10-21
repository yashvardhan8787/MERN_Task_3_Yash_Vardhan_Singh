import React from 'react';
import '../styles/Hero.css'; 
import HeroImg from '../assets/images/Hero.png'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hello, I'm Yash Vardhan Singh</h1>
        <p>
          I am a passionate web developer with experience in building responsive
          and user-friendly applications.
        </p>
        <a href="#contact" className="cta-button">
          Get in Touch
        </a>
      </div>
      <img src={HeroImg} alt="Hero" className="hero-image" />
    </section>
  );
};

export default Hero;
