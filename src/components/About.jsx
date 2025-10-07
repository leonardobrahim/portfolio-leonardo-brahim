import React from 'react';

const About = () => {
  const skills = ['React', 'React Natie', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Git & GitHub', 'Figma'];

  return (
    <section id="about" className="py-20 bg-gray-800 text-white h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="max-w-3x2 mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            Sou desenvolvedor front-end com experiência em criar interfaces de usuário modernas e responsivas. Estou cursando Ciência da Computação na Universidade Federal de Pernambuco. Atualmente, estou focado em aprimorar minhas habilidades em React e seu ecossistema.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Minhas Habilidades</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <span key={skill} className="bg-gray-700 text-cyan-400 font-medium py-2 px-4 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;