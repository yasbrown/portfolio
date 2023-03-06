import React from 'react'
import Marquee from "react-fast-marquee";
import { skillsData } from './skillsData';
import { skillsImage } from './skillsImage';

const StackMarquee = () => {
  return (
    <section className="skill--scroll">
      <Marquee
        gradient={false}
        speed={35}
        pauseOnHover={true}
        pauseOnClick={false}
        delay={0}
        play={true}
        direction="left"
        >
        {skillsData.map((skill, id) => (
          <div className="skill--box" key={id}>
            <img src={skillsImage(skill)} alt={skill} id={skill} />
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default StackMarquee
