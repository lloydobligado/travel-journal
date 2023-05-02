import React from 'react'
import './Footer.scss'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer className="footer"><small>@ {currentYear} Obligado Development. All right reserved.</small></footer>
  )
}

export default Footer