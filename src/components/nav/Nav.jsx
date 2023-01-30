import React from 'react'
import './nav.css'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('')}>Yasmin Brown</a>
      <div className="nav-btns">
        <a href="#projects" onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : '' }>Projects</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : '' }>About</a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : '' }>Contact</a>
      </div>
    </nav>
  )
}

export default Nav
