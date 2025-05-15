import React from 'react';

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="flex flex-col items-center justify-center transition-transform duration-300 group hover:-translate-y-1">
      {/* Icon */}
      <div className="bg-gradient-to-br from-sky-400 to-sky-600 text-white h-14 w-14 flex items-center justify-center rounded-full text-3xl shadow-md border-2 border-sky-500/50 group-hover:scale-105 transition-all duration-300">
        {imgSvg}
      </div>

      {/* Label */}
      <p className="text-sky-100 font-medium text-sm mt-2 text-center">
        {text}
      </p>
    </div>
  );
};

export default SingleSkill;