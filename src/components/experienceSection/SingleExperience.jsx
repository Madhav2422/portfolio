import React from 'react';
import { motion } from 'framer-motion';

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      className="md:h-[350px] md:w-[270px] w-full border-2 border-x-orange-200 border-dashed rounded-2xl mt-12 p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="font-bold text-white whitespace-nowrap">{experience.job}</p>
      <p className="text-white whitespace-nowrap">{experience.company}</p>
      <p className="text-white">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
