import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero"><h1 className="text-2xl font-bold">Leonardo Brahim</h1></a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-cyan-400 transition-colors duration-300">Início</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-300">Sobre</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projetos</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;