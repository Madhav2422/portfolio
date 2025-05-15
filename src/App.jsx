import React from 'react'
import NavbarMain from './components/navabar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/subHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import ContactMeMain from './components/ContactMeSection/ContactMeMain'
import FooterMain from './components/Footer/FooterMain'


export default function Home() {
  return (
    <main >
      <NavbarMain/>
      <HeroMain/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <ExperienceMain/> 
      <ProjectsMain/>
      <ContactMeMain/>   
      <FooterMain/>
    </main>
  )
}
