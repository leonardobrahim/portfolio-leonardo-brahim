import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent text-white p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero"><h1 className="text-2xl font-bold tracking-wider">Leonardo Brahim</h1></a>
        <nav>
          <ul className="flex space-x-6 text-base">
            <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">Início</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projetos</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

