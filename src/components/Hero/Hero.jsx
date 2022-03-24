import React from 'react'
import './index.scss'
import Lottie from 'react-lottie';
import animatedGr from '../../lotties/animated.json'
import Books from '../../assets/books.png'

const Hero = () => {
  const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animatedGr,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return (
    <div className="container">
      <div className="section hero_section">
        <div className="breakpoint">
        <h2 className="title">Become a better you</h2>
        <p className="subtitle">with 15-min bite-sized reads and audios of the world’s best nonfiction books</p>
        <div className="chart">
          <Lottie 
	          options={defaultOptions}
            height={272}
            width={336}
          />
        </div>
        <button className="main_btn">Get Started</button>
        </div>
        <img src={Books} alt="hero-img" className="hero_img" width='336' height='304'/>
      </div>
    </div>
  )
}

export default Hero
