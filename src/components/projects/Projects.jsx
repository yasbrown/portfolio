import React from "react"
import './projects.css'
import Project1 from "./Project1"
import Project2 from "./Project2"

const Projects = () => {
  // const portfolioImageAnimate = {
  //   offscreen:{
  //     y:100,
  //     opacity:0
  //   },
  //   onscreen:{
  //     y:0,
  //     opacity:1,
  //     transition:{
  //       duration: 1.5,
  //       type: "spring" }
  //   }
  // }

  // const portfolioTextAnimate = {
  //   offscreen:{
  //     x:-100,
  //     opacity:0 },
  //   onscreen:{
  //     x:0,
  //     opacity:1,
  //     transition:{
  //       duration: 1.5,
  //       type: "spring" }}
  // }

  return (
    <div id="projects">
      <div className="container portfolio__header">
        <h2>My Portfolio</h2>
      </div>

      <div className="portfolio__content">
        <div className="portfolio__projects">
          <div className='walkin'><Project1 /></div>
          <div className='airBroomNBroom'><Project2 /></div>
        </div>
      </div>
    </div >
  )
}

export default Projects
