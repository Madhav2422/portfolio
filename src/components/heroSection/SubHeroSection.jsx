// import React, { useState, useEffect } from 'react';

// const SubHeroSection = () => {
//   const items = ['Fast Learner', 'Team Work', 'Detail-Oriented'];
//   const [visibleIndex, setVisibleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleIndex(prev => (prev + 1) % items.length);
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='w-full border-y text-[#8a938e] border-[#8a938e] bg-[#0f172a] flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4'>
//       {items.map((text, index) => (
//         <p
//           key={index}
//           className={`transition-opacity duration-1000 ${
//             visibleIndex === index ? 'opacity-100' : 'opacity-0'
//           } ${index === 0 ? '' : 'hidden md:block'}`}
//         >
//           {text}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default SubHeroSection;


import React, { useState, useEffect } from 'react';

const SubHeroSection = () => {
  const items = ['Fast Learner', 'Team Work', 'Detail-Oriented'];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex(prev => (prev + 1) % items.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full border-y text-[#8a938e] border-[#8a938e] bg-[#0f172a] flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4'>
      {items.map((text, index) => (
        <p
          key={index}
          className={`transition-opacity duration-1000 ${
            visibleIndex === index ? 'opacity-100' : 'opacity-0'
          } ${visibleIndex !== index ? 'hidden sm:hidden md:block' : ''}`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default SubHeroSection;
