import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center text-center">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-down">Olá, eu sou <span className='text-cyan-500'>Leonardo Brahim</span></h2>
        <p className="text-xl text-gray-400 mb-8 animate-fade-in-up">Desenvolvedor Front-End | Apaixonado por Tecnologia e Design</p>
        <a 
          href="#projects" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 duration-300"
        >
          Veja meus projetos
        </a>
      </div>
    </section>
  );
};

export default Hero;