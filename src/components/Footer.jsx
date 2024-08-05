import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-lg font-bold text-gray-200 hover:text-white">
              Aydin Adnan
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <a href="https://github.com/AydinAdnan?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aydin-adnan-976974244/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Aydin Adnan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
