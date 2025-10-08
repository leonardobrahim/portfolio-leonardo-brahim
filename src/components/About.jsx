import React from 'react';

const About = () => {
  const skills = ['React', 'React Native', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5 & CSS3', 'Git & GitHub', 'Python'];

  return (
    <section id="about" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-glow">Sobre Mim</h2>
            <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-10">
                Nascido no Rio de Janeiro e atualmente morando em Pernambuco, estou cursando Ciência da Computação na Universidade Federal de Pernambuco (UFPE). Sou desenvolvedor front-end com experiência em criar interfaces de usuário modernas e responsivas. No momento, estou focado em aprimorar minhas habilidades em React e seu ecossistema.
            </p>
            <h3 className="text-3xl font-bold mb-6">Minhas Habilidades</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map(skill => (
                <span key={skill} className="bg-gray-800 border border-gray-700 text-gray-300 font-medium py-2 px-4 rounded-full text-base">
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

