import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React","NextJs", "TailwindCSS"],
  Backend: ["Node.js", "Java", "SpringBoot","Sanity CMS"],
  Database: ["MongoDB", "SQL", "PostgreSQL"],
  "Cloud & DevOps": ["Docker", "Aws", "Kubernetes","Power Automate "]
};

const directions = [
  { x: -100, y: 0 }, // From left
  { x: 100, y: 0 },  // From right
  { x: 0, y: 100 },  // From bottom
  { x: 0, y: 100 }   // From bottom
];

const AllSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {Object.entries(skills).map(([category, items], idx) => (
        <motion.div
          key={category}
          initial={{
            opacity: 0,
            x: directions[idx]?.x || 0,
            y: directions[idx]?.y || 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: idx * 0.15,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#1e293b] rounded-2xl border border-sky-500/30 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-sky-500/50"
        >
          <h3 className="text-lg font-bold text-sky-300 border-b border-sky-500/30 pb-2 mb-4 text-center font-josefin">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {items.map((skill, i) => (
              <span
                key={i}
                className="text-sm text-sky-100 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full hover:bg-sky-500/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
