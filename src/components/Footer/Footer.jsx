import React from 'react'
import Logo from '../../assets/Logo.png'
import './index.scss'
import TW from '../../assets/twitter.png'
import FB from '../../assets/facebook.png'
import IG from '../../assets/instagram-b.png'

const Footer = () => {
  return (
    <div className="container">
      <div className="section footer_section">
        <img src={Logo} alt="logo"/>
        <h2 className="title">Empower yourself with the best books insights</h2>
        <p>Social media:</p>
        <ul className="list">
          <li><img src={FB} alt=""/></li>
          <li><img src={IG} alt=""/></li>
          <li><img src={TW} alt=""/></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer
