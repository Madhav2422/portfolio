import React from 'react';
import ExperienceText from './ExperienceText';
import ExperienceTop from './ExperienceTop';
import AllExperieces from './AllExperieces';

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <ExperienceText />
      <ExperienceTop />
      
      {/* Wrap the line and experiences separately so only the line hides on small screens */}
      <div className="w-full mt-4">
        <div className="h-1 bg-gray-500 lg:block sm:hidden" />
        <AllExperieces />
      </div>
    </div>
  );
};

export default ExperienceMain;
