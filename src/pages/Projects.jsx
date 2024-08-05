import React from 'react';

function Projects() {
  return (
    <div className="container mx-auto p-6 lg:p-16">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8" data-aos="fade-up">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg flex flex-col justify-between" data-aos="fade-up" data-aos-delay={index * 200}>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-base lg:text-lg mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{tech}</span>
                ))}
              </div>
            </div>
            <div className="flex mt-auto">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                View on GitHub
              </a>
              {/* {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                  View Live
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Image Classifier',
    description: 'Created an Image Classifier with PyTorch using the CIFAR-10 dataset',
    technologies: ['Python', 'PyTorch'],
    github: 'https://github.com/AydinAdnan/Image_Classification_PyTorch',
    live: '#',
  },
  {
    title: 'Library Book Management',
    description: 'Created using MERN stack',
    technologies: ['React.js', 'Tailwind CSS', 'MongoDB','Express'],
    github: 'https://github.com/AydinAdnan/library_management_mern',
    live: '#',
  },
  {
    title: 'Movie Ticketing App',
    description: 'Movie ticketing web app using PostgreSQL and React.js frontend (PERN stack)',
    technologies: ['React.js', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/AydinAdnan/Movie-Ticketing',
    live: '#',
  },
  {
    title: 'Sign Language Classifier',
    description: 'A program that classify different sign language actions into letters using Mediapipe',
    technologies: ['Python', 'sci-kit learn', 'OpenCV'],
    github: 'https://github.com/AydinAdnan/signlanguage_classifier',
    live: '#',
  },
];

export default Projects;
