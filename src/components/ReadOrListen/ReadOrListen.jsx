import React, { useState } from 'react'
import Read from '../../assets/read.png'
import Listen from '../../assets/listen.png'
import './index.scss'
import Audio from '../../assets/audio.png'
import Text from '../../assets/text.png'

const ReadOrListen = () => {
  const [swipe, setSwipe] = useState(false)

  const setListen = () => {
    if (swipe) {
      setSwipe(false);
    }
  };

  const setRead = () => {
    if (!swipe) {
      setSwipe(true);
    }
  }
  return (
    <div className="container">
      <div className="section ral_section">
        <h2 className="title">Read or Listen</h2>
        <p className="subtitle">Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format. Summaries have an audio version, narrated by professional voice actors.</p>
        <div className="switcher">
          <p className={swipe ? 'grey' : ''}>Listen</p>
          <div className="switch_btns">
            <button type="button" className="btn" onClick={() => setListen()} disabled={!swipe}>
              <img src={Audio} alt="listen"/>
            </button>
            <button type="button" className="btn" onClick={() => setRead()} disabled={swipe}>
              <img src={Text} alt="read"/>
            </button>
          </div>
          <p className={swipe ? '' : 'grey'}>Read</p>
        </div>
        <img src={swipe ? Read : Listen} alt="source" className="source"/>
      </div>
      
    </div>
  )
}

export default ReadOrListen
