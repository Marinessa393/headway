import React from 'react'
import './index.scss'
import MotivationImg from "../../assets/motImg.png"
import MotivationImg2 from '../../assets/motImg2.png'
import MotivationImg3 from '../../assets/motImg3.png'

const Motivation = () => {
  return (
    <div className="container">
      <div className="section mot_section">
        <h2 className="title">Get smarter with the least effort</h2>
        <ul className="list">
          <li className="item">
            <img src={MotivationImg} alt="motivation" className="item_img"/>
            <h3 className="secondary_title">Learn from the best</h3>
            <p className="subtitle">Highlighted by top reviewers, we picked only the most outstanding bestsellers for you.</p>
          </li>
          <li className="item">
            <img src={MotivationImg2} alt="mot_img2" className="item_img"/>
            <h3 className="secondary_title">Get key insights</h3>
            <p className="subtitle">Major ideas in a bite-sized form. Long reads no more!</p>
          </li>
          <li className="item">
            <img src={MotivationImg3} alt="mot_img3" className="item_img"/>
            <h3 className="secondary_title">Build a reading habit</h3>
            <p className="subtitle">Consistency is the key to top performance. Only 15 minutes per day to make reading your brand new habit!</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Motivation
