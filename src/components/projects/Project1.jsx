import React, {useEffect} from 'react'
import WALKIN from '../../assets/Mockup Walkin.png'
import LOGO from '../../assets/WalkIn Logo.png'
import {BsGithub} from 'react-icons/bs'
import { motion as m, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Project1 = () => {
  const {ref, inView} = useInView();

  const imgAnimation = useAnimation();
  const projectBio = useAnimation();

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
        y:100,
        opacity:0
      })
    }
  }, [inView]);


  return (
    <div ref={ref} className='walkin'>
      <m.img
        animate={ imgAnimation }
        src={WALKIN} alt="WalkIn Mockup"
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
    </div>
  )
}

export default Project1
