import React from 'react';

const NavbarBtn = () => {
  return (
    <a
      href="/portfolio/Madhav_Hirani_CV.pdf"  // ✅ fixed path for GitHub Pages
      download
      className="bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md"
    >
      Download CV
    </a>
  );
};

export default NavbarBtn;
