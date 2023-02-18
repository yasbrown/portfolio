import React, {useEffect} from 'react'
import AIR from '../../assets/AirBroomNBroom.png'
import {BsGithub} from 'react-icons/bs'
import { motion as m, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Project2 = () => {
  const {ref, inView} = useInView();

  const animation = useAnimation();
  const projectBio = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView)
    if(inView){
      animation.start({
        x:0,
        opacity:1,
        transition:{
          type:'spring',
          duration:1.5,
        }
      })
    }
    if(!inView){
      animation.start({
        x:'-100vw',
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
        y:100,
        opacity:0
      })
    }
  }, [inView]);

  return (
    <div ref={ref} className='airbroomnbroom'>
      <m.img src={AIR} alt="AirbroomNBroom Mockup"
        animate={ animation }
        />
      <m.div className='project__info'
        animate={ projectBio }

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
    </div>
  )
}

export default Project2
