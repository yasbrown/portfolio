import React from 'react'
import './header.css'
import { motion as m } from "framer-motion"
import Typewriter from "typewriter-effect";

const Header = () => {
  const greetings2 = {
      first: "Hi,",
      second: "Bonjour,",
      third: "Konnichiwa,",
      fourth: "Hallo,",
      fifth: "Ciao,",
      sixth: "Guten Tag,",
      seventh: "Hola,",
    };

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

          <div className="header__text__greeting">
            <m.h1
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration:0.5 }}
            >
              <Typewriter
                options={{
                  strings: [
                    greetings2.first,
                    greetings2.second,
                    greetings2.third,
                    greetings2.fourth,
                    greetings2.fifth,
                    greetings2.sixth,
                    greetings2.seventh
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
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
