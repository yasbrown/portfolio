import React from 'react'
import {FiMail} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

const ContactSocials = () => {
  return (
    <header>
      <div className="header_socials">
        <a href="#"><FiMail /></a>
        <a href="https://github.com/yasbrown" target="_blank"><BsGithub /></a>
      </div>
    </header>
  )
}

export default ContactSocials
