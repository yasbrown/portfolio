import React, {useState} from 'react'
import './nav.css'

const Nav = () => {
  let lastScroll = 0
  const body = document.body

  window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up")
      body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down")
      body.classList.add("scroll-up")
    }
    lastScroll  = currentScroll

    // if (scrollTop > lastScrollTop) {
    //   navbar.style.top="-80px"
    // } else {
    //   navbar.style.top="0"
    // }
    // lastScrollTop = scrollTop
  })

  const [activeNav, setActiveNav] = useState('');

  return (
    <nav id="navbar">
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
