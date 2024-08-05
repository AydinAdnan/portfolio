import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">About Me</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4" data-aos="fade-right">
          <img
            src="src\assets\profilepic.jpg"
            alt="Aydin Adnan"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-4" data-aos="fade-left">
          <p className="text-lg">
          Hello! I’m <strong>Aydin Adnan</strong>, a curious and driven third-year student at <strong>VIT Chennai</strong> with a deep enthusiasm for technology. My academic journey has sparked a passion for exploring various aspects of the tech world, from programming and system design to innovative solutions and emerging trends.          </p>
          <p className="text-lg">
          With hands-on experience in <strong>PyTorch</strong> and the <strong>MERN stack</strong>, I’m constantly inspired by the innovative possibilities these technologies offer. My fascination with database management systems has also led me to gain solid expertise in <strong>MongoDB</strong> and <strong>SQL</strong>. Additionally, my understanding of <strong>object-oriented programming</strong> further enriches my ability to design robust and scalable solutions.
          </p>
          <p className="text-lg">
          This blend of creative problem-solving and technical skills allows me to approach challenges from multiple angles and contribute meaningfully to diverse projects. As I continue to evolve in this dynamic field, I look forward to leveraging my skills to drive success and make a positive impact in the tech landscape.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 mt-8">
        <div className="w-full md:w-1/2 xl:w-2/5 p-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <ul>
            <li>
            <strong>Undergraduate </strong>, <strong>B.tech Computer Science CORE </strong><br></br><i>VIT CHENNAI</i><br></br><strong>2022-26</strong>
            </li>
            <br></br>
            <li>
              <strong>High School</strong>, <strong>PCM with Computer Science</strong>, <br></br><i>Devamatha CMI Public School</i><br></br><strong>2020-22</strong>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/5 p-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <ul>
            <li>
              <strong>◉ Object Oriented Programming</strong>
            </li>
            <li>
              <strong>◉ Data Structures</strong>
            </li>
            <li>
              <strong>◉ Deep Learning with PyTorch</strong>
            </li>
            <li>
              <strong>◉ MERN Stack</strong>
            </li>
            <li>
              <strong>Advanced SQL</strong>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/5 p-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">Certifications</h2>
          <ul>
          <li>
              <a href=''>Introduction to Cognitive Psychology</a> by <strong>NPTEL</strong>
            </li>
            
            <li>
              <a href='https://www.hackerrank.com/certificates/8eb64eaf68b9'>Advanced SQL</a> by <strong>Hackerrank</strong>
            </li>
            <li>
            <a href='https://www.datacamp.com/skill-verification/AIF0028536916279'>AI Fundamentals</a> by <strong>Datacamp</strong>
            </li>
            <li>
            <a href='https://www.datacamp.com/completed/statement-of-accomplishment/course/44472294affb7ef70ad84e9c57a7d9367dbb1310'>Deep Learning with PyTorch</a> by <strong>Datacamp</strong>
            </li>
            <li>
            <a href='https://www.datacamp.com/completed/statement-of-accomplishment/course/5d204e5e5554fe031f1136661d5159f33eaf17f2'>Deep Learning for images with PyTorch</a> by <strong>Datacamp</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default About;
