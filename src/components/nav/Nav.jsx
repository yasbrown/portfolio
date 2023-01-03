import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#header">Yasmin Brown</a>
      <div className="nav-btns">
        <a href="#about" className='active'>About</a>
        <a href="#experience">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Nav
