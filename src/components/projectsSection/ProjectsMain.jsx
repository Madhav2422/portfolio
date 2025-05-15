import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
  {
    name: "EduSphere (LMS)",
    descri: "A full-stack LMS featuring admin panels, course progress tracking for users, and Razorpay payment integration — built with React (frontend), Node.js (backend), and MongoDB (database).",
    align: "right",
    image: "../../public/images/LMS.png",
    link: "https://github.com/Madhav2422/Learning-Management-System",
  },
  {
    name: "Motor Insurance",
    descri: "An insurance management system with dynamic premium calculation and policy handling — built with React (frontend), Spring Boot (backend), and PostgreSQL (database).",
    align: "left",
    image: "../../public/images/Motor_Insurance.png",
    link: "https://github.com/Madhav2422/Insurance_Management-",
  },
  {
    name: "Blog Website",
    descri: "A dynamic blog platform with support for real-time content updates and featured blog control — built with Next.js (frontend) and Sanity CMS (backend).",
    align: "right",
    image: "../../public/images/Blog.png",
    link: "https://github.com/Madhav2422/Blog-Website",
  },
];


const ProjectsMain = () => {
  return (
    <div id="portfolio" className=" scroll-mt-28  max-w-[1200px] mx-auto px-4" >
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12" >
        {projects.map((project, index) => {
          return <SingleProject key={index} name={project.name} descri={project.descri}
            align={project.align}
            image={project.image}
            link={project.link}  />
        })}
      </div>
    </div>
  )
}

export default ProjectsMain