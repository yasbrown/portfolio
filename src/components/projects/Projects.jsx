import React from 'react'
import './projects.css'
import WALKIN from '../../assets/Mockup Walkin.png'
import AIR from '../../assets/AirBroomNBroom.png'
import LOGO from '../../assets/WalkIn Logo.png'
import {BsGithub} from 'react-icons/bs'
import { motion as m } from "framer-motion"

const Projects = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <section id="projects">
      <div className="portfolio__header">
        <h2>My Portfolio</h2>
      </div>

      <div className="portfolio__content">
        <div className="portfolio__projects">

          <div className='walkin'>
            <m.img
             animate={{ y: 0 }}
             initial={{ y: "100%" }}
             transition={{ delay: 0.5, duration: 0.5 }}
             style={{
               transform: `perspective(1200px) translateX(0px) translateY(${scrollY /
                 2}px) scale(1.29043) rotate(0deg) rotateX(${-23.2346 +
                 scrollY / 50}deg) rotateY(0deg) translateZ(0px)`,
             }}
              src={WALKIN} alt="WalkIn Mockup" />
            <div className='project__info'>
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
            </div>
          </div>

          <div className='airbroomnbroom'>
            <img src={AIR} alt="AirbroomNBroom Mockup" />
            <div className='project__info'>
              <div className='project__info__name__type'>
                <p>Desktop</p>
                <h2>AirBroomNBroom</h2>
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
            </div>
          </div>

        </div>
      </div>



    </section >
  )
}

export default Projects
