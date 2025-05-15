import React, { useState } from 'react'
import NavabarLogo from './NavabarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 items-center justify-between">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between w-full max-w-[1200px] mx-auto bg-[#0f172a] text-white items-center p-6 rounded-full border border-white/10 shadow-lg">
        <NavabarLogo />
        <NavbarLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavbarBtn />
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden w-full bg-[#0f172a] h-16 flex justify-between items-center px-4 py-3 fixed top-[-9px] left-0 right-0 z-30">
        <div className="flex items-center gap-2">
          <NavabarLogo />
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/portfolio/Madhav_Hirani_CV.pdf"
            download
            className="lg:hidden bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md flex items-center gap-2 animate-pulse"
            title="Download CV"
          >
            <FiDownload size={20} />
            <span className="text-sm whitespace-nowrap">CV</span>
          </a>


          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className='text-white text-2xl  p-3 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out'
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 w-full px-4 bg-[#0f172a]/90 backdrop-blur-md shadow-md rounded-b-xl z-40">
          <NavbarLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      )}
    </nav>
  )
}

export default NavbarMain;
