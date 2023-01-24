import React from 'react'
import './projects.css'
import SWIPE from '../../assets/paint-swipe.png'
import WALKIN from '../../assets/Mockup Walkin.png'
import AIR from '../../assets/AirBroomNBroom.png'
import LOGO from '../../assets/WalkIn Logo.png'
import {BsGithub} from 'react-icons/bs'

const Projects = () => {
  return (
    <section id="projects">
      <div className="portfolio__header">
        <h2>My Portfolio</h2>
        <img src={SWIPE} alt="paint-swipe" />
      </div>

      <div className="portfolio__content">
        <div className="portfolio__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="portfolio__projects">
          <div className='walkin'>
            <img src={WALKIN} alt="WalkIn Mockup" />
            <div className='walkin__info'>
              <p>Mobile</p>
              <h2>WalkIn</h2>
              <p>A web app designed to answer the question: “Where can I get a reservation tonight?”</p>
              <p>See only the restaurants with available tables based on your time and group size.</p>
              <p className='project_stack'>
                Ruby on Rails  |  JavaScript  |  HTML 5  |  CSS |  PostgreSQL  |  Heroku
              </p>
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
            <div className='airbroomnbroom__info'>
              <p>Desktop</p>
              <h2>AirBroomNBroom</h2>
              <p>An online marketplace to rent broomsticks (AirBnB clone).</p>
              <p className='project_stack'>Ruby on Rails  |  JavaScript  |  HTML 5  |  CSS |  PostgreSQL  |  Heroku</p>
              <div className='project__links'>
                <a href="https://github.com/yasbrown/walk-in" target="_blank">
                  <BsGithub />
                </a>
              </div>
            </div>
            <img src={AIR} alt="AirbroomNBroom Mockup" />
          </div>

        </div>
      </div>



    </section >
  )
}

export default Projects
