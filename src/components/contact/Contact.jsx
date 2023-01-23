import React from 'react'
import './contact.css'
import ContactSocials from './ContactSocials'
import RTN_BTN from './RTN_BTN'
import SWIPE from '../../assets/Paint-swipe-contact.png'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__header">
        <h2>Let's work together</h2>
        <img src={SWIPE} alt="paint-swipe" />
      </div>
      <div className='contact_links'><ContactSocials /></div>
      <div className="contact__final">
        <h3>Or if you just want to say hello, feel free to reach out on <a href="https://www.linkedin.com/in/yasminbrown6/">LinkedIn</a></h3>
      </div>
      <div className="rtn_btn">
        <RTN_BTN />
      </div>
    </section>
  )
}

export default Contact
