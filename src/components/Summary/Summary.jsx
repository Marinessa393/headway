import React from 'react'
import './index.scss'
import Book from '../../assets/Book.png'
import Line from '../../assets/divider.png'
import Arrow from '../../assets/arrow.png'
import Phone from '../../assets/iPhone.png'

const Summary = () => {
  return (
    <div className="container" id='summary'>
      <div className="section summary_section">
        <h2 className="title">Summary is the new black</h2>
        <p className="subtitle">Use summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.</p>
        <div className="schema">
          <div className="block1">
          <img src={Book} alt="book" width='336' height='168'/>
          <p className="black-text">Typical book</p>
          <p className="grey-text">320 pages - 20 hours</p>
          </div>
          <div className="img_wrap">

          <img src={Line} alt='line' className='line'/>
          </div>
          <p className="black-text">Key ideas and insights</p>
          <div className="img_wrap">

          <img src={Arrow} alt="arrow" className="arrow"/>
          </div>
          <div className="block2">
          <img src={Phone} alt="result" width='336' height='168'/>
          <p className="black-text">Summary</p>
          <p className="grey-text">~ 15 minutes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
