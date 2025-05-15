import React from 'react'
import HeroText from './HeroText'
import { FaCode, FaServer, FaCloud, FaDatabase } from "react-icons/fa";

const techItems = [
  {
    icon: <FaCode className='text-cyan-300 text-2xl' />,
    name: 'Frontend',
    bg: 'bg-cyan-900/30',
    border: 'border-cyan-400/30',
    hover: 'hover:bg-cyan-900/50',
    text: 'text-cyan-200'
  },
  {
    icon: <FaServer className='text-amber-300 text-2xl' />,
    name: 'Backend',
    bg: 'bg-amber-900/30',
    border: 'border-amber-400/30',
    hover: 'hover:bg-amber-900/50',
    text: 'text-amber-200'
  },
  {
    icon: <FaDatabase className='text-emerald-300 text-2xl' />,
    name: 'Database',
    bg: 'bg-emerald-900/30',
    border: 'border-emerald-400/30',
    hover: 'hover:bg-emerald-900/50',
    text: 'text-emerald-200'
  },
  {
    icon: <FaCloud className='text-purple-300 text-2xl' />,
    name: 'Cloud',
    bg: 'bg-purple-900/30',
    border: 'border-purple-400/30',
    hover: 'hover:bg-purple-900/50',
    text: 'text-purple-200'
  },
];

const HeroMain = () => {
  return (
    <section id='home' className='min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden'>

      {/* Floating dots for subtle animated background */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float opacity-10 ${['bg-cyan-500', 'bg-purple-500', 'bg-amber-500', 'bg-emerald-500'][i % 4]
              }`}
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${20 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className='max-w-[1200px] mx-auto w-full px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          <div className='lg:w-1/2'>
            <HeroText />
          </div>

          {/* Tech skills */}
          <div className='lg:w-1/2  lg:mt-0 animate-fade-in'>
            <h3 className='text-xl font-semibold  mb-6 text-center lg:text-left text-white'>
              My Technical Expertise
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4'>
              {techItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 ${item.border} transition-all duration-300 hover:-translate-y-1 hover:scale-105 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-14 w-14 rounded-full ${item.bg} ${item.border} flex items-center justify-center mb-2 ${item.hover} transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <span className={`text-sm ${item.text}`}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unique Scroll indicator with bouncing chevrons */}
        <div className='hidden md:flex flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2'>
          <div className='relative h-10 w-6 rounded-3xl border-2 border-white/50 flex justify-center'>
            <div className='absolute h-2 w-1 bg-white rounded-full animate-scroll opacity-70'
              style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}></div>
          </div>
          <span className='text-white/70 text-sm mt-2 animate-pulse'>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default HeroMain
