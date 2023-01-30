import React from 'react'
import './header.css'
import PAINT from '../../assets/Paint-header.png'
import { motion as m } from "framer-motion"

const Header = () => {
  return (
    <header id="header">
      <div className='container header__content'>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="header__container">

          <div className="header__text_greeting">
            <h1>Hi,</h1>
          </div>
          <div className="header__text">
            <h1>I'm Yasmin.</h1>
          </div>
        </m.div>

        <div className='header__about'>
          <p>Fullstack Web Developer currently based in London and teaching at <a href="https://www.lewagon.com/">Le Wagon</a>. Formerly a Veterinary Surgeon in another life.</p>
        </div>

      </div>


    </header>
  )
}

export default Header
