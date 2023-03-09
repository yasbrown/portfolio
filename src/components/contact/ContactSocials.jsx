import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const ContactSocials = () => {
  return (
      <div className="header__socials">
        <div>
          <a href="mailto: yasminbrown6@hotmail.com" id="email">Drop me an email</a>
        </div>
        <div className="social__media__links">
          <a href="https://www.linkedin.com/in/yasminbrown6/" target="_blank" rel='noopener noreferrer'>
            <BsLinkedin />
          </a>
          <a href="https://github.com/yasbrown" target="_blank" rel='noopener noreferrer'>
            <BsGithub />
          </a>
        </div>
      </div>
  )
}

export default ContactSocials
