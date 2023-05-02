import React from 'react'
import Icon from './../../assets/icons/globe.svg'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className="header">
        <img src={Icon} alt="Globe Icon" className="header__icon"/>
        <p className="header__title">my travel journal.</p>
    </header>
  )
}

export default Navbar