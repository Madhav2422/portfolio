import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMePic from "./AboutMePic"

const AboutMeMain = () => {
  return (
    <div id='about' className=' scroll-mt-48  flex flex-col md:flex-row gap-8 md:gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
      <div className='order-1 md:order-none'>
        <AboutMeText />
      </div>

      <div className='order-2 md:order-none'>
        <AboutMePic />
      </div>
    </div>
  )
}

export default AboutMeMain