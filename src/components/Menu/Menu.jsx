import React from 'react'
import { Link } from 'react-scroll'
import './index.scss'

const anchors = [
  { anchor: 'benefits', title: 'Benefits' },
  { anchor: 'summary', title: 'Summary' },
  { anchor: 'library', title: 'Library' },
  { anchor: 'ral', title: 'Try yourself' },
  { anchor: 'reviews', title: 'Reviews' },
  { anchor: 'contacts', title: 'Contacts' }
]

const Menu = (props) => {
  const { open, onClose } = props;
  return (
  <>
        <div className={`menu_container ${open && 'open'}`}> <nav className="navigation">
        <div className="container">
          <ul className="navlist">
            {anchors.map(({ anchor, title }) => <li key={anchor}>
              <Link activeClass="active"
                className="link"
                to={anchor}
                spy={true}
                offset={-64}
                smooth={true}
                duration={700}
                delay={250}
                onClick={() => onClose()}>
                {title}</Link>
            </li>)}
      </ul>
      </div>
      </nav>
      </div>
      </>
  )
}

export default Menu
