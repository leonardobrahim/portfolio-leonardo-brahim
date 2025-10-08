import React from 'react';
import NeonHexagon from './NeonHexagon.jsx';

const Hero = () => {
  return (
    <section id="hero" className="text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 text-start max-w-5xl">
        <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-glow">Leonardo Brahim</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
            Desenvolvedor Front-End apaixonado por criar interfaces modernas, intuitivas e performáticas.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="button-primary-glow text-white font-bold py-3 px-8 rounded-full">
              Meus Projetos
            </a>
            <a href="#contact" className="button-secondary-glow text-white font-bold py-3 px-8 rounded-full">
              Contato
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <NeonHexagon />
        </div>
      </div>
    </section>
  );
};

export default Hero;

