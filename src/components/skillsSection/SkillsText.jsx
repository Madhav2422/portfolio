import React from 'react';

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-white text-5xl font-bold relative inline-block mb-10">
        My Skills
        <span className="absolute left-1/2 -bottom-1 w-1/2 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-md transform -translate-x-1/2"></span>
      </h2>

      <p className="text-lg text-white text-center max-w-3xl leading-relaxed">
        I work with a variety of modern technologies to build responsive, high-performance web applications. I focus on clean code, best practices, and delivering scalable solutions—each project in my portfolio reflects my dedication to quality and creativity.
      </p>
    </div>
  );
};

export default SkillsText;
