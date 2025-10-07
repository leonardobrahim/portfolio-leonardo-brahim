import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Leonardo Brahim. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;