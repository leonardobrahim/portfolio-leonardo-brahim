import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-500 p-6 text-center mt-16 border-t border-gray-800">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Leonardo Brahim. Desenvolvido com React e Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;

