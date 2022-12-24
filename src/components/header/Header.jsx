import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_name">
          <h1>Y A S M I N</h1>
          <h1>B R O W N</h1>
        </div>
        <div className="header_title">
          <h2>F U L L   S T A C K</h2>
          <h2>W E B</h2>
          <h2>D E V E L O P E R</h2>
        </div>
        <div className="header_btn">
          <CTA />
        </div>
      </div>
    </header>
  )
}

export default Header
