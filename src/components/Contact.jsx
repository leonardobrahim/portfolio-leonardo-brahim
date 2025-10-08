import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
       <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-center mb-4 text-glow">Entre em Contato</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Estou disponível para novas oportunidades. Vamos conversar sobre como posso ajudar a tirar suas ideias do papel.
        </p>
        <div className="mb-10 flex flex-col items-center space-y-4">
          <span
            className="button-secondary-glow text-white font-bold py-3 px-8 rounded-full text-lg inline-block whitespace-nowrap"
          >
            contato.leonardobrahim@gmail.com
          </span>
          <a
            className="button-primary-glow text-white font-bold py-3 px-8 rounded-full text-lg inline-block whitespace-nowrap"
            href="#"
            download
          >
            Baixar Currículo
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/leonardobrahim" target="_blank" rel="noopener noreferrer" className="group">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/leonardo-brahim-tavares-837848208/" target="_blank" rel="noopener noreferrer" className="group">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

