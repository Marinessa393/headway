import React, { useEffect, useState } from 'react'
import { buttons, shelf } from './arrays'
import './index.scss'

const Library = () => {
  const [filter, setFilter] = useState([]);
  console.log(filter);

  const toggleGenre = (cat) => {
    if (cat === 'all') {
      setFilter([]);
          const btns = document.getElementsByTagName('button');
      for (const btn of btns) {
          btn.classList.remove('active');
      }

    } else {
      const idx = filter.indexOf(cat);
      idx === -1 ? setFilter([...filter, cat]) : setFilter(filter.filter(el => el !== cat));
      activeBtn(cat);
    }
  }

  useEffect(() => {
    disableBooks();
  }, [filter])

  const activeBtn = (key) => {
    const btn = document.getElementById(key);
    btn.classList.contains('active') ? btn.classList.remove('active') : btn.classList.add('active');
  }

  const disableBooks = () => {
    const books = document.querySelectorAll('.elem');
    if (filter.length === 0) {
      for (const b of books) {
        b.classList.remove('disable')
      }
    } else {
      for (const b of books) {
        filter.some(s => b.classList.contains(s)) ? b.classList.remove('disable') : b.classList.add('disable');
      }
    }
  };
  
  return (
    <div className='container'>
      <div className="section library_section">
        <h2 className="title">Determine your goal and go ahead!</h2>
        <p className="subtitle">Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts.</p>
        <div className="wrapper">
          <div className="btns">
            {buttons.map(({key, title, icon}) => (
              <button type='button' key={key} id={key} onClick={() => toggleGenre(key)}>
                {icon !== null && <img src={icon} alt={key} />}
                <span>{title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="wrapper">
          <div className="shelf">
          {shelf.slice(0, 5).map(el => (
            <div className={`elem ${el.genre}`} key={el.id}>
              <img src={el.src} alt="book" width='72' height='108'/>
              </div>
          ))}
          </div>
                    </div>
            <div className="wrapper">
          <div className="shelf second">
          {shelf.slice(5, 11).map(el => (
            <div className={`elem ${el.genre}`} key={el.id}>
            <img src={el.src} alt="book" width='72' height='108'/>
              </div>
            ))}
          </div>
        </div>
        <div className="wrapper">
          <div className="shelf">
          {shelf.slice(11).map(el => (
            <div className={`elem ${el.genre}`} key={el.id}>
              <img src={el.src} alt="book" width='72' height='108'/>
              </div>
            ))}
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Library
