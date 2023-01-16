import React from 'react'
import './about.css'
import SWIPE from '../../assets/paint-swipe.png'
import RUBY from '../../assets/Ruby.png'
import RAILS from '../../assets/Rails.png'
import REACT from '../../assets/React.png'
import JS from '../../assets/Javascript.png'
import HTML from '../../assets/HTML5.png'
import CSS from '../../assets/CSS3.png'
import POSTGRES from '../../assets/Postgresql.png'
import HEROKU from '../../assets/Heroku.png'

const About = () => {
  return (
    <section id="about">
      <div className="about__header">
        <h2>About me</h2>
        <img src={SWIPE} />
      </div>

      <div className="container about__greeting">
        <h2>Hi, my name is Yasmin.</h2>
      </div>
      <div className="container about__content">
        <p>I am a fullstack developer currently based in London, UK. Originally from a successful background in clinical medicine, I have always thrived in agile environments that allow me to find creative solutions to complex problems.</p>
        <p>Although I have since swapped my stethoscope for a MacBook I have spent my professional career relishing any opportunity to communicate my ideas with others, whether that be as a teaching assistant at Le Wagon, or discussing challenging ideas with clients and stakeholders.</p>
        <p>It is this diverse skillset which I utilise in order to create impact.</p>
      </div>

      <div className="container stack__header">
        <h2>My stack</h2>
      </div>
      <div className="container stack__icons">
        <div>
          <img src={RUBY} alt="Ruby icon" />
          <p>Ruby</p>
        </div>
        <div>
          <img src={RAILS} alt="Rails icon" id='rails__icn'/>
          <p>Rails</p>
        </div>
        <div>
          <img src={REACT} alt="React icon" />
          <p>React</p>
        </div>
        <div>
          <img src={JS} alt="Javascript icon" id='JS__icn' />
          <p>Javascript ES6</p>
        </div>
        <div>
          <img src={HTML} alt="HTML5 icon" id='HTML__icn' />
          <p>HTML5</p>
        </div>
        <div>
          <img src={CSS} alt="CSS3 icon" id='CSS__icn' />
          <p>CSS3</p>
        </div>
        <div>
          <img src={POSTGRES} alt="PostgreSQL icon" id='SQL__icn' />
          <p>PostgreSQL</p>
        </div>
        <div>
          <img src={HEROKU} alt="Heroku icon" id='Heroku__icn' />
          <p>Heroku</p>
        </div>
      </div>

    </section >
  )
}

export default About
