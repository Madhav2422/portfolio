import React from 'react';

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { FaDocker } from "react-icons/fa";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "MongoDB", icon: DiMongodb },
  { skill: "SQL", icon: TbSql },
  { skill: "Java", icon: FaJava },
  { skill: "SpringBoot", icon: SiSpringboot },
  {
    skill: "Docker",
    icon: FaDocker,
  }
];

const AllSkillsSm = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 my-12 px-4">
      {skills.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex flex-col items-center gap-3 animate-fade-in">
            <div className="bg-orange-300 rounded-full p-6 shadow-lg hover:scale-110 transition-transform duration-300">
              <Icon className="text-5xl text-white" />
            </div>
            <p className="text-white font-semibold text-sm text-center">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSm;
