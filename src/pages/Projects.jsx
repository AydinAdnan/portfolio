import React from 'react';

function Projects() {
  return (
    <div className="container mx-auto p-6 lg:p-16">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8" data-aos="fade-up">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay={index * 200}>
            <h2 className="text-xl lg:text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-base lg:text-lg mb-4">{project.description}</p>
            <div className="flex flex-wrap mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tech}</span>
              ))}
            </div>
            <div className="flex">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                View on GitHub
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                  View Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    github: 'https://github.com/your-username/project1',
    live: 'https://your-project1-live-link.com',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    github: 'https://github.com/your-username/project2',
    live: 'https://your-project2-live-link.com',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3.',
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    github: 'https://github.com/your-username/project3',
    live: 'https://your-project3-live-link.com',
  },
];

export default Projects;
