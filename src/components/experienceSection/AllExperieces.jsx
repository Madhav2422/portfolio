import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import SingleExperience from './SingleExperience';

const experiences = [
  {
    job: "Front-End Developer Intern",
    company: "Sajmmune Software",
    date: "July 2023 - Sept 2023",
    responsibilities: [
      "Learned HTML, CSS, and JavaScript fundamentals.",
      "Built a static website using HTML and CSS.",
      "Created reusable UI components.",
      "Suggested UI/UX improvements."
    ],
  },
  {
    job: "MERN Stack Developer Intern",
    company: "Codage Habitation",
    date: "Jan 2025 - Feb 2025",
    responsibilities: [
      "Worked with Sanity CMS and Next.js.",
      "Assisted in React and Node.js tasks.",
      "Guided students and reviewed assignments.",
      "Explained key development concepts."
    ],
  },
  {
    job: "Associate - Software Engineer",
    company: "TransformHub",
    date: "May 2025 - Present",
    responsibilities: [
      "Learning Power Automate for workflow automation.",
      "Contributing to internal projects (confidential).",
      "Exploring low-code automation solutions."
    ],
  },
];




const AllExperieces = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-8">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < 2 && (
            <FaArrowRight className="text-6xl text-white hidden md:block" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperieces;
