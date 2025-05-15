import React, { useEffect, useState } from 'react'

const NavbarLinks = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { link: "Home", section: "home" },
    { link: "About", section: "about" },
    { link: "Portfolio", section: "portfolio" },
    { link: "Contact", section: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    links.forEach(link => {
      const section = document.getElementById(link.section);
      if (section) observer.observe(section);
    });

    return () => {
      links.forEach(link => {
        const section = document.getElementById(link.section);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ul className={`flex gap-6 text-white font-bold text-center py-2
      flex-col lg:flex-row 
      ${menuOpen ? 'absolute' : 'hidden'} lg:flex 
      top-full lg:top-0 left-[50%] lg:left-0 -translate-x-[50%] lg:translate-x-0 
      text-lg lg:text-base bg-[#0f172a] backdrop-blur-lg w-full lg:w-auto 
      rounded-xl lg:rounded-none z-10`}>

      {links.map((link, index) => {
        const isActive = activeSection === link.section;

        return (
          <li key={index} className='group'>
            <a
              className={`cursor-pointer transition-all duration-500 ${
                isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-200'
              }`}
              href={`#${link.section}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.link}
            </a>
            <div
              className={`mx-auto h-[2px] transition-all duration-500 ${
                isActive ? 'bg-cyan-400 w-full' : 'bg-cyan-200 w-0 group-hover:w-full'
              }`}
            ></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
