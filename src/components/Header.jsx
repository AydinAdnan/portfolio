import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50" data-aos="fade-down">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-gray-800">
          Aydin Adnan
        </Link>
        <nav className="flex items-center">
          <ul className="flex items-center">
            <li className="mr-6">
              <Link to="/projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/AydinAdnan?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaGithub size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
