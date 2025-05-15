import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterRight = () => {
  return (
    <div className="text-white">
      <h4 className="text-2xl font-extrabold mb-3 border-b-2 border-white inline-block ">Let's connect</h4>
      <div className="flex gap-5 text-2xl">
        
        <a href="https://github.com/Madhav2422" target="_blank" rel="noreferrer">
          <FaGithub className="transform transition-transform hover:scale-110 hover:translate-y-1 hover:text-gray-300 duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/madhav-hirani-" target="_blank" rel="noreferrer">
          <FaLinkedin className="transform transition-transform hover:scale-110 hover:translate-y-1 hover:text-gray-300 duration-300" />
        </a>
        <a href="mailto:madhavhirani2422@gmail.com">
          <MdEmail className="transform transition-transform hover:scale-110 hover:translate-y-1 hover:text-gray-300 duration-300" />
        </a>
      </div>
    </div>
  );
};

export default FooterRight;
