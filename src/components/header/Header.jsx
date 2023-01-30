import React from 'react'
import './header.css'
import CTA from './CTA'
import PAINT from '../../assets/Paint-header.png'
import { motion as m } from "framer-motion"

const Header = () => {
  return (
    <header id="header">
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.85 }} className="container header_container">
        <div className="header_name">
          <h1>Y A S M I N</h1>
          <h1>B R O W N</h1>
        </div>
        <div className="header_title">
          <h2>F U L L   S T A C K</h2>
          <h2>W E B</h2>
          <h2>D E V E L O P E R</h2>
          <img src={PAINT} alt="paint-swipe" />
        </div>
        <div className="header_btn">
          <CTA />
        </div>
      </m.div>
    </header>
  )
}

export default Header
