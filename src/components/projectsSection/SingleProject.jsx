import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const SingleProject = ({ name, descri, align, image, link }) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`} >
      <div>
        <h2 className={`md:text-3xl sm:text-2xl font-bold text-white mb-4 sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>
          {name}</h2> {/* Added bottom margin */}
        <p className={`text-xl text-white sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"} mb-4`}>
          {descri} {/* Added bottom margin */}
        </p>

        <a
          className={`text-lg flex gap-2 items-center  text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '2px solid white', // Border added to the button
            padding: '8px 16px',        // Padding to make it look good
            borderRadius: '8px',        // Rounded corners
          }}
        >
          <span>View</span>
          <FaArrowRight className="text-xl transition-all duration-300 hover:translate-x-2" />
        </a>
      </div>

      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </div>
  )
}

export default SingleProject;
