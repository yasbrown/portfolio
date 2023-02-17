import React from 'react'
import './about.css'
import { motion as m } from "framer-motion"
import GitHubCommits from './GitHubCommits'
import StackSlider from './StackSlider'

const About = () => {
  return (
    <section id="about">
      <div className="about__header">
        <h2>
          About
        </h2>
      </div>

      <div className="about__content">
        <p>Currently based in South-East London. I am interested in working on projects with a social conscience that have been thoughtfully conceived and are refined in execution. I have always thrived in agile environments that allow me to find creative solutions to complex problems.</p>
        <p>Although I have since swapped my stethoscope for a MacBook I have spent my professional career relishing any opportunity to communicate my ideas with others, whether that be as a teaching assistant at Le Wagon, or discussing challenging ideas with clients and stakeholders.</p>

        <p>Feel free to reach out to me on socials. I am always on the look out for fun opportunities.</p>
      </div>


      <div className='tech__stack__slider'><StackSlider /></div>

      <div className='github__commit__table'><GitHubCommits /></div>

    </section >
  )
}

export default About
