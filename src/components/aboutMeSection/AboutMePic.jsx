import React from 'react'

const AboutMePic = () => {
  return (
    <div className='h-[500px] w-[300px] rounded-[2rem] overflow-hidden'>
      <img
        src="/images/Portfolio-image.jpg"  // update the path as needed
        alt="Portfolio"
        className='h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out'
      />
    </div>
  )
}

export default AboutMePic
