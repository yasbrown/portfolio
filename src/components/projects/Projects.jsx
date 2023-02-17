import React from "react";
import './projects.css'
import WALKIN from '../../assets/Mockup Walkin.png'
import AIR from '../../assets/AirBroomNBroom.png'
import LOGO from '../../assets/WalkIn Logo.png'
import {BsGithub} from 'react-icons/bs'
import { motion as m } from "framer-motion"

const Projects = () => {
  const portfolioImageAnimate = {
    offscreen:{
      y:100,
      opacity:0
    },
    onscreen:{
      y:0,
      opacity:1,
      transition:{
        duration: 1.5,
        type: "spring" }
    }
  }

  const portfolioTextAnimate = {
    offscreen:{
      x:-100,
      opacity:0 },
    onscreen:{
      x:0,
      opacity:1,
      transition:{
        duration: 1.5,
        type: "spring" }}
  }

  return (
    <section id="projects">
      <div className="portfolio__header">
        <h2>My Portfolio</h2>
      </div>

      <div className="portfolio__content">
        <div className="portfolio__projects">

          <m.div className='walkin'
            initial={ "offscreen" }
            whileInView={ "onscreen" }
            viewport={{ once:false, amount:0.5 }}
            transition={{ staggerChildren:0.8 }}
            >
            <m.img
              variants={ portfolioImageAnimate }
              src={WALKIN} alt="WalkIn Mockup"
              />
            <m.div className='project__info'
              variants={ portfolioTextAnimate }
              >
              <div className='project__info__name__type'>
                <h2>WalkIn</h2>
                <p>Mobile</p>
              </div>
              <div className='project__description__stack'>
                <p>A web app designed to answer the question: “Where can I get a reservation tonight?”</p>
                <p>Ruby on Rails  |  JavaScript  |  HTML 5  |  CSS |  PostgreSQL  |  Heroku</p>
              </div>
              <div className='project__links'>
                <a href="https://walk--in.herokuapp.com/" target="_blank" rel='noopener noreferrer'>
                  <img src={LOGO} alt="Link to WalkIn webpage"/>
                </a>
                <a href="https://github.com/yasbrown/walk-in" target="_blank" rel='noopener noreferrer'>
                  <BsGithub />
                </a>
              </div>
            </m.div>
          </m.div>

          <m.div className='airbroomnbroom'
            initial={ "offscreen" }
            whileInView={ "onscreen" }
            viewport={{ once:false, amount:0.5 }}
            transition={{ staggerChildren:0.5 }}
            >
            <m.img src={AIR} alt="AirbroomNBroom Mockup"
              variants={ portfolioImageAnimate }
              />
            <m.div className='project__info'
              variants={ portfolioTextAnimate }
              >
              <div className='project__info__name__type'>
                <h2>AirBroomNBroom</h2>
                <p>Desktop</p>
              </div>
              <div className='project__description__stack'>
                <p>An online marketplace to rent broomsticks (AirBnB clone).</p>
                <p>Ruby on Rails  |  JavaScript  |  HTML 5  |  CSS |  PostgreSQL  |  Heroku</p>
              </div>
              <div className='project__links'>
                <a href="https://github.com/yasbrown/walk-in" target="_blank" rel='noopener noreferrer'>
                  <BsGithub />
                </a>
              </div>
            </m.div>
          </m.div>

        </div>
      </div>



    </section >
  )
}

export default Projects
