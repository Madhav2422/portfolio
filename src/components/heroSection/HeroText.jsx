import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left text-center max-w-2xl mx-auto px-4 py-16 text-white'>
      <div className='mb-2'>
        <span className='text-lg sm:text-xl text-white'>Hello, I'm</span>
        <h1 className='text-4xl mt-3 sm:text-5xl md:text-6xl font-bold text-white'>
          Madhav Hirani
        </h1>
      </div>

      <h2 className='text-lg sm:text-xl lg:text-2xl uppercase text-white h-8'>
        <Typewriter
          words={['Full Stack Developer', 'Software Engineer', 'AWS Enthusiast', 'Problem Solver']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <p className='text-base sm:text-lg md:text-lg mt-4 text-white/90 leading-relaxed'>
        I build digital experiences that are fast, scalable, and delightful to use.
        Currently crafting solutions with modern web technologies and cloud platforms.
      </p>

      <div className='flex gap-4 mt-6 justify-center md:justify-start'>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="cursor-pointer px-6 py-2 bg-[#0f172a] hover:bg-[#0a1224] text-white rounded-md font-medium transition-all"
        >
          View My Work
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer px-6 py-2 border border-white text-white hover:bg-white hover:text-[#0f172a] rounded-md font-medium transition-all"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default HeroText
