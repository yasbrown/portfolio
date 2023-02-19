import React from 'react'
import './contact.css'
import ContactSocials from './ContactSocials'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h1>Let's work</h1>
          <h1>together.</h1>
        </div>

        <div className="contact__final">
          <p>I'm currently looking for work. Let me know if you are in need of an engineer, or just reach out on socials to say hello.</p>
          <p>I'd love to chat!</p>
        </div>
      </div>

      <div className='contact_links'><ContactSocials /></div>
    </section>
  )
}

export default Contact
