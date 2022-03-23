import React from 'react'
import './index.scss'
import Stars from '../../assets/stars.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import asStars from '../../assets/stars-as.png'
import gpStars from '../../assets/stars-gp.png'
import AS from '../../assets/astore.png'
import GP from '../../assets/gp.png'
import ig from '../../assets/instagram-g.png'

const Reviews = () => {
  return (
    <div className="container">
      <div className="section reviews_section">
        <h2 className="title">People love the Headway app</h2>
        <p className="subtitle">Become a member of our global community of
          <span className="accent"> 7 million people</span>
        </p>
        <ul className="list">
          <li className="item"><img src={Stars} alt="stars"/>
          <p>This app simplifies books into super condensed but easy-to-digest snippets. Listened to almost all of the Art of Saying No during my warm up/stretch sesh today. A powerful tool I recommend to anyone who’s busy and can’t find time to sit down to read!</p>
          <div className="user_info">
            <img src={user1} alt="user1"/>
            <p>mr.rageright</p>
            <img src={ig} alt="insta"/>
            </div>
          </li>
          <li className="item"> <img src={Stars} alt="stars"/>
          <p>Headway app is one of the best investments I’ve ever made into myself outside of spiritual stuff. Summarized books that you can read or listen to!</p>
          <div className="user_info">
            <img src={user2} alt="user2"/>
            <p>mcogbonna</p>
            <img src={ig} alt="insta"/>
            </div>
          </li>
          <li className="item"> <img src={Stars} alt="stars"/>
          <p>In case you often find a book you just started — the Headway app is for you. It’s an audiobook reader that summarized all the key lessons in that great book you’ve been aspiring to read, but you didn’t finish.</p>
          <div className="user_info">
            <img src={user3} alt="user3"/>
            <p>thefinestyler</p>
            <img src={ig} alt="insta"/>
            </div>
          </li>
          <li className="item"> <img src={Stars} alt="stars"/>
          <p>So excited for my latest app subscription for self-growth! You can set reading goals, take challenges or read offline! 🤓</p>
          <div className="user_info">
            <img src={user4} alt="user4"/>
            <p>thisinnagirl</p>
            <img src={ig} alt="insta"/>
            </div>
          </li>
        </ul>
        <ul className="rating">
          <li className="item">
            <p className="store"><span className="blue">4.7 </span><img src={AS} alt="store" /></p>
            <img src={asStars} alt="asRating" className="rStars"/>
            <p className="info">50K ratings</p>
          </li>
          <li className="item">
            <p className="store"><span className="green">4.2 </span><img src={GP} alt="market" /></p>
            <img src={gpStars} alt="gpRating" className="rStars"/>
            <p className="info">31K ratings</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Reviews