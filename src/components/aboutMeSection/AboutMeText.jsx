import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutMeText = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 1) % 360);
    }, 30); 

    return () => clearInterval(interval);
  }, []);

  const radius = 80; // radius in px for circular orbit
  const icons = [FaGithub, FaLinkedin, FaEnvelope];
  const links = [
    'https://github.com/Madhav2422',       // GitHub link
    'https://www.linkedin.com/in/madhav-hirani-',     // LinkedIn link
    'mailto:madhavhirani2422@example.com' // Email link
  ];

  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center relative'>
      {/* Heading */}
      <h2 className='text-white text-5xl font-bold relative inline-block mb-8 group'>
        About Me
        <span className="absolute left-1/2 -bottom-2 w-3/4 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transform -translate-x-1/2 scale-x-75 group-hover:scale-x-100 transition-transform duration-300"></span>
      </h2>

      {/* Text */}
      <div className='space-y-6 max-w-2xl'>
        <p className='text-white/90 text-lg leading-relaxed'>
          I have completed my B.Tech in Computer Engineering from Indus University, Ahmedabad. Currently, I'm working at TransformHub, where I focus on backend development using Spring Boot. Alongside my work, I'm actively learning AWS to expand my cloud computing skills and deepen my backend expertise.
        </p>
        <p className='text-white/90 text-lg leading-relaxed'>
          I'm passionate about technology and always open to collaborating with others. Whether it's a small assignment or a large-scale project, I'm ready to take it on with dedication and a growth mindset. Let's connect and build something great together!
        </p>
      </div>

      {/* Orbiting Social Icons */}
      <div className='mt-12 relative w-48 h-48 mx-auto'>
        <div className='w-full h-full rounded-full bg-gradient-to-br from-blue-600/20 to-sky-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center relative'>
          {icons.map((Icon, index) => {
            const iconAngle = angle + index * (360 / icons.length);
            const rad = (iconAngle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <a
                key={index}
                href={links[index]}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute w-12 h-12 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-sky-500/30 hover:border-sky-300 hover:scale-110 transition-all duration-300'
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                <Icon className='text-2xl text-white' />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;
