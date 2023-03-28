import React, {useState, useEffect} from 'react'
import WALKIN from '../../assets/Mockup Walkin.png'
import { motion as m, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ReactCardFlip from 'react-card-flip';

const Project1 = () => {
  const {ref, inView} = useInView();

  const imgAnimation = useAnimation();
  const projectBio = useAnimation();
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if(inView){
      imgAnimation.start({
        x:0,
        opacity:1,
        transition:{
          type:'spring',
          duration:1.5,
        }
      })
    }
    if(!inView){
      imgAnimation.start({
        x:'-10vw',
        opacity:0
      })
    }
  }, [inView]);

  useEffect(() => {
    if(inView){
      projectBio.start({
        y:0,
        opacity:1,
        transition:{
          duration:0.8,
          delay:0.8
        }
      })
    }
    if(!inView){
      projectBio.start({
        y:50,
        opacity:0
      })
    }
  }, [inView]);

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div ref={ref} className='walkin' onClick={() => setFlip(!flip)}>
        <m.img
          animate={ imgAnimation }
          src={WALKIN}
          alt="WalkIn Mockup"
        />
        <m.div className='project__info'
          animate={ projectBio }
          >
          <div className='project__info__name__type'>
            <h2>WalkIn</h2>
            <p>Mobile</p>
          </div>
          <div className='project__description__stack'>
            <p>A web app designed to answer the question: “Where can I get a reservation tonight?”</p>
            <p>Ruby on Rails  |  JavaScript  |  HTML5  |  CSS3 |  PostgreSQL  |  Heroku</p>
          </div>
        </m.div>
      </div>

      <div ref={ref} className='walkin-back' onClick={() => setFlip(!flip)}>
        <div className='project__description__back'>
          <p>A mobile app designed as part of Le Wagon's bootcamp final project. Ruby on Rails and a Javascript were the main engines for this project.</p>
          <p>Leading a team of 4 to design, built and ship to production this project in 10 days. This project is hosted via Heroku.</p>
        </div>
        <div className='project__links'>
          <p><a href="https://walk--in.herokuapp.com/" target="_blank" rel='noopener noreferrer' className='active__project_link'>See live</a></p>
          <p><a href="https://github.com/yasbrown/walk-in" target="_blank" rel='noopener noreferrer'>See source code</a></p>
        </div>
      </div>

      </ReactCardFlip>




  )
}

export default Project1
