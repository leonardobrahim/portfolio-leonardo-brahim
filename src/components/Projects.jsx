import React from 'react';

const ProjectCard = ({ title, description, tech, link, image }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
    {/* Imagem do Card */}
    <img className="w-full h-48 object-cover" src={image} alt={title} />

    {/* Conteúdo do Card */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      
      {/* Tags de Tecnologia */}
      <div className="mb-4">
        {tech.map(t => (
          <span key={t} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-cyan-400 mr-2 mb-2">
            {t}
          </span>
        ))}
      </div>

      {/* Botão/Link para o Projeto */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center mt-auto px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all hover:scale-105 duration-300"
      >
        Ver Projeto &rarr;
      </a>
    </div>
  </div>
);


const Projects = () => {
  const myProjects = [
    {
      title: 'Projeto Exemplo 1',
      description: 'Descrição do primeiro projeto para melhor visualização do layout em grade.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com',
      image: 'src/assets/image-1.jpg' 
    },
    {
      title: 'Projeto Exemplo 2',
      description: 'Descrição do segundo projeto para melhor visualização do layout em grade.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com',
      image: 'src/assets/image-2.jpg' 
    },
    {
      title: 'Projeto Exemplo 3',
      description: 'Descrição do terceiro projeto para melhor visualização do layout em grade.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com',
      image: 'src/assets/image-3.jpg' 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;