import React, { useState } from 'react'
import './MenuBar.css'
import logo from '../assets/logo.svg'
import search from '../assets/search-magnifying-glass-svgrepo-com.svg'
import condense from '../assets/chevron-right-duo-svgrepo-com.svg'
import collapse from '../assets/burger-menu-svgrepo-com.svg'

export const MenuBar = () => {
  const [showSearch, setShowSearch] = useState('hid')
  const [showNav, setShowNav] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const toggleSearch = () => {
    setShowSearch((prev) => {
      if (prev === 'hid') {
        return 'show'
      } else {
        return 'hid'
      }
    })
  }

  const toggleNav = () => {
    setShowNav(prev => {
      return !prev
    })
  }

  const resizeResponse = () => {
    console.log('masuk')
    if (window.innerWidth > 768) {
      // document.getElementsByClassName('start').className = 'start'
      // console.log(document.getElementsByClassName('start'))
      setIsMobile(false)
    } else {
      // document.getElementsByClassName('start').className = 'start ' + showNav
      // console.log(document.getElementsByClassName('start'))
      setIsMobile(true)
    }
  }

  window.onresize = resizeResponse

  return (
    <header>
      <div className="header-border">
        <div className="container">
          <div className="wrapper">
            <a href=".">
              <img src={logo}></img>
            </a>
            <div className={isMobile ? 'start ' + showNav : 'start'}>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Team</li>
                <li>About</li>
              </ul>
            </div>
            <div className="end">
              <button className="mobile" onClick={() => toggleSearch()}>
                <img src={showSearch === 'hid' ? search : condense} />
              </button>
              <div className={showSearch}>
                <input type="search" />
                <button className="normal">
                  <img src={search} />
                </button>
              </div>
            </div>
            <div className="btn-collapse">
              <button onClick={() => toggleNav()}>
                <img src={collapse} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
