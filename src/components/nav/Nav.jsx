import React, {useState} from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');

  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('')} id="name__href">Yasmin Brown</a>
      <div className="nav-btns">
        <a href="#projects" onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : '' } id="projects__href">Projects</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : '' } id="about__href">About</a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : '' } id="contact__href">Contact</a>
      </div>
    </nav>
  )
}

export default Nav
