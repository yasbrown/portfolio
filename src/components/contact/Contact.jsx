import React from 'react'
import './contact.css'
import ContactSocials from './ContactSocials'

const Contact = () => {
  return (
    <section id="contact">
      <div class="contact__container">
        <div className="contact__items">
          <div className="contact__header">
            <h1>Let's work</h1>
            <h1>together.</h1>
          </div>
          <div className="contact__final">
            <p>I'm currently open to new opportunities. Feel free to get in touch if you are in need of an engineer, or reach out on socials just to say hello.</p>
            <p>I'd love to chat!</p>
          </div>
        </div>
        <div className='contact_links'>
          <ContactSocials />
        </div>
      </div>

    </section>
  )
}

export default Contact
