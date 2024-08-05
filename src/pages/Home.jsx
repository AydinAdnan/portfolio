import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for animations
  }, []);

  return (
    <div className="container mx-auto p-6 lg:p-16">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8" data-aos="fade-up">Welcome to my portfolio!</h1>
      <p className="text-base lg:text-lg mb-8" data-aos="fade-up">
      I’m <strong>Aydin Adnan</strong>, a passionate and driven individual with a keen interest in technology. I’m excited to share my work, experiences, and the journey I’m undertaking in this ever-evolving field.
</p>
<div className="flex justify-center" data-aos="fade-up">
      <Link to="/about" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      About me
      </Link>
      </div>
      <div className="flex flex-wrap -mx-4 mb-12">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4" data-aos="fade-right">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Recent Projects</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-base lg:text-lg">PyTorch Image classifier</a></li>
            <li className="mb-2"><a href="#" className="text-base lg:text-lg">Sign Language classifier using Mediapipe</a></li>
            <li className="mb-2"><a href="#" className="text-base lg:text-lg">Library Management (MERN)</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Skills</h2>
          <ul>
            <li>
              Object Oriented Programming
            </li>
            <li>
              Data Structures
            </li>
            <li>
               Deep Learning with PyTorch
            </li>
            <li>
               MERN Stack
            </li>
            <li>
              Advanced SQL
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4" data-aos="fade-left" data-aos-delay="400">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-base lg:text-lg">
            Want to learn more about my work or collaborate on a project? Feel free to reach out to me at <a href="mailto:aydinadnan545@gmail.com" className="text-base lg:text-lg">aydinadnan545@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
