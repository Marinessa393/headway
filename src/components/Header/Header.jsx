import React from 'react'
import './index.scss'
import Logo from '../../assets/Logo.png'
import User from '../../assets/userpic.png'
import Menu from '../../assets/menu.png'

const Header = () => {
  return (
    <header className="header">
      <a href='/'>
        <img src={Logo} alt="logo" className="logo" width='122' height='24'/>
      </a>
      <div className="buttons">
        <button type="button" className="headerBtn">
          <img src={User} alt="user" width='20' height='20'/>
        </button>
        <button type="button" className="headerBtn">
          <img src={Menu} alt="menu" width='20' height='20'/>
        </button>
      </div>
      </header>
  )
}

export default Header
