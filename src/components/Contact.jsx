import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através do meu e-mail ou redes sociais.
        </p>
        <span 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 inline-block"
        >
          contato.leonardobrahim@gmail.com
        </span>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/leonardobrahim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">GitHub</a>
          <a href="https://linkedin.com/in/leonardobrahim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;