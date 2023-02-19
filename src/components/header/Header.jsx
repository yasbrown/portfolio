import React from 'react'
import './header.css'
import { motion as m } from "framer-motion"

const Header = () => {
  let counter = 0;
  const cycle = () => {
      const greetings = ["Bonjour,", "Konnichiwa,", "Hallo,", "Ciao,", "Guten Tag,", "Hola,", "Hi,"];

      if (counter < greetings.length) {
        let hi = document.getElementById("hello")
        hi.innerHTML = greetings[counter];
        counter++;
      } else {
        let hi = document.getElementById("hello")
        hi.innerHTML = greetings[6];
      }
    }

  setInterval(cycle, 2000);

  return (
    <header id="header">
      <div className='container header__content'>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut"}}
          className="header__container">

          <div className="header__text_greeting">
            <m.h1 id="hello"
              initial={{ opacity: 0, y:100 }}
              animate={{ opacity: 1, y:0 }}
              transition={{ duration:0.5 }}
              >
              Hi,
            </m.h1>
          </div>
          <div className="header__text">
            <h1>I'm Yasmin.</h1>
          </div>
        </m.div>

        <m.div className='header__about'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.85, ease: "easeOut" }}>

          <p>Fullstack Web Developer currently based in London and teaching at <a href="https://www.lewagon.com/">Le Wagon</a>. Formerly a Veterinary Surgeon in another life.</p>

        </m.div>

      </div>


    </header>
  )
}

export default Header
