import React, {useState, useEffect} from 'react'
import AIR from '../../assets/AirBroomNBroom.png'
import { motion as m, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ReactCardFlip from 'react-card-flip'

const Project2 = () => {
  const {ref, inView} = useInView();

  const animation = useAnimation();
  const projectBio = useAnimation();
  const [flip, setFlip] = useState(false);

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
      <div ref={ref} className='airbroomnbroom' onClick={() => setFlip(!flip)}>
        <m.img
          src={AIR}
          alt="AirbroomNBroom Mockup"
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
        </m.div>
      </div>

      <div ref={ref} className='airbroomnbroom-back' onClick={() => setFlip(!flip)}>
        <div className='project__description__back'>
          <p>Created an AirBnb clone from scratch. A website where users can create, rent and review broomsticks. This project was created using Ruby on Rails, JavaScript, Bootstrap, SASS and PostgreSQL. Devise was used to handle authentication.</p>
          <p>Delopyed with Heroku.</p>
        </div>
        <div className='project__links'>
          <p><a href="https://airbnb-yasbrown.herokuapp.com/" target="_blank" rel='noopener noreferrer' className='active__project_link'>See live</a></p>
          <p><a href="https://github.com/yasbrown/walk-in" target="_blank" rel='noopener noreferrer'></a>See source code</p>
        </div>
      </div>
    </ReactCardFlip>
  )
}

export default Project2
