import React from 'react'
import './header.css'
import { motion as m } from "framer-motion"

const Header = () => {
  const cycle = () => {
      const greetings = ["Bonjour", "Konnichiwa", "Hallo", "Ciao", "Guten Tag", "Hola", "Hi"];
      let counter = 0;

    // while (counter < greetings.length) {
    //   let hi = document.getElementById("hello")
    //   hi.innerHTML = greetings[counter];
    //   counter++;
    // }

    if (counter < greetings.length) {
      let hi = document.getElementById("hello")
      hi.innerHTML = greetings[counter];
      counter++;
      console.log(counter)
    } else {
      counter = 0;
    }

    // for (const greeting of greetings){
    //   console.log(greeting);
    //   let hi = document.getElementById("hello")
    //   hi.innerHTML = greeting;
    // }

    // for (let counter = 0; counter < greetings.length; counter++) {
    //   console.log(greetings[counter])
    //   let hi = document.getElementById("hello")
    //   hi.innerHTML = greetings[counter];
    // }
    }

  setInterval(cycle, 2300);

  return (
    <header id="header">
      <div className='container header__content'>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="header__container">

          <div className="header__text_greeting">
            <h1><span id="hello">Hi</span>,</h1>
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
