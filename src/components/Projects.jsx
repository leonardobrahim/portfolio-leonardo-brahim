import React from 'react';

const ProjectCard = ({ title, description, tech, link_projeto, link_repo, image }) => (
  <div className="bg-gray-900 bg-opacity-50 rounded-lg card-border-glow overflow-hidden flex flex-col">
    <a href={link_projeto}>
      <img className="w-full h-56 object-cover" src={image} alt={title} />
    </a>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        {tech.map(t => (
          <span key={t} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-purple-300 mr-2 mb-2">
            {t}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a 
          href={link_projeto} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button-secondary-glow mt-auto text-center font-semibold text-white py-1 px-2 rounded-lg"
        >
          Acessar Projeto
        </a>
        <a 
          href={link_repo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button-secondary-glow mt-auto text-center font-semibold text-white py-1 px-2 rounded-lg"
        >
          Acessar Repositório
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const myProjects = [
    {
      title: 'Sistema de E-commerce',
      description: 'Plataforma completa de e-commerce com carrinho de compras, checkout e painel de administração.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      link_projeto: '#',
      link_repo: '#',
      image: 'https://placehold.co/600x400/101010/C084FC?text=E-commerce' 
    },
    {
      title: 'Aplicativo de Tarefas',
      description: 'Um aplicativo de gerenciamento de tarefas com autenticação de usuário e sincronização em tempo real.',
      tech: ['React Native', 'Firebase'],
      link_projeto: '#',
      link_repo: '#',
      image: 'https://placehold.co/600x400/101010/C084FC?text=Task+App' 
    },
    {
      title: 'Landing Page Animada',
      description: 'Uma landing page para um produto de SaaS, focada em micro-interações e animações com GSAP.',
      tech: ['HTML', 'TailwindCSS', 'GSAP'],
      link_projeto: '#',
      link_repo: '#',
      image: 'https://placehold.co/600x400/101010/C084FC?text=Landing+Page' 
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-glow">Meus Projetos</h2>
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

