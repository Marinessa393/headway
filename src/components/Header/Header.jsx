import React, { useState } from 'react'
import './index.scss'
import Logo from '../../assets/Logo.png'
import User from '../../assets/userpic.png'
import MenuBtn from '../../assets/menu.png'
import Menu from '../Menu/Menu'

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const toggleMenu = () => {
    setOpen(!open)
    document.body.classList.toggle('open');
  }

  const close = () => {
    setOpen(false);
        document.body.classList.remove('open');
  }
  
  return (
    <header className="header">
      <a href='/'>
        <img src={Logo} alt="logo" className="logo" width='122' height='24'/>
      </a>
      <div className="buttons">
        <button type="button" className="headerBtn">
          <img src={User} alt="user" width='20' height='20'/>
        </button>
        <button type="button" className="headerBtn" onClick={() => toggleMenu()}>
          <img src={MenuBtn} alt="menu" width='20' height='20'/>
        </button>
      </div>
      <Menu open={open} onClose={close}/>
      </header>
  )
}

export default Header
