import React from 'react'
import {FiMail} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

const ContactSocials = () => {
  return (
      <div className="header__socials">
        <a href="#"><FiMail /></a>
        <a href="https://github.com/yasbrown" target="_blank" rel='noopener noreferrer'><BsGithub /></a>
      </div>
  )
}

export default ContactSocials
