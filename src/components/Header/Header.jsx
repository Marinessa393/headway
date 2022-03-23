import React from 'react'
import './index.scss'
import Logo from '../../assets/Logo.png'
import User from '../../assets/userpic.png'
import Menu from '../../assets/menu.png'

const Header = () => {
  return (
    <header className="header">
      <a href='/'>
        <img src={Logo} alt="logo" className="logo"/>
      </a>
      <div className="buttons">
        <button type="button" className="headerBtn">
          <img src={User} alt="user"/>
        </button>
        <button type="button" className="headerBtn">
          <img src={Menu} alt="menu"/>
        </button>
      </div>
      </header>
  )
}

export default Header
