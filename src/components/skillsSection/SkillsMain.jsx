import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';

const SkillsMain = () => {
  return (
    <section id='skills' className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <SkillsText />
        <div className="mt-8">
          <AllSkills />
        </div>
      </div>
    </section>
  );
};

export default SkillsMain;