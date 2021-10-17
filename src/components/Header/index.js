import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
      return (
            <header className="header">
                  <h2 className="header__logo">Movies App</h2>

                  <ul className="navbar">
                        <li className="navbar__item"><Link to='/' className="navbar__link">Home</Link></li>
                        <li className="navbar__item"><Link to='/watchlist' className="navbar__link">WatchList</Link></li>
                  </ul>

                  <button className="button button-themes">
                        Themes
                  </button>
            </header>
      )
}
