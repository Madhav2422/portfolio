import React from 'react';

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-white text-5xl font-bold relative inline-block mb-6">
        My Portfolio
        <span className="absolute left-1/2 -bottom-1 w-1/2 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-md transform -translate-x-1/2"></span>
      </h2>
    </div>
  );
};

export default ProjectsText;
