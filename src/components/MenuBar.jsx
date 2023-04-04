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
    setShowNav((prev) => {
      return !prev
    })
  }

  const resizeResponse = () => {
    console.log('masuk')
    if (window.innerWidth >= 768) {
      setIsMobile(false)
      setShowNav(false)
    } else {
      setIsMobile(true)
    }
  }

  window.onresize = resizeResponse

  return (
    <header>
      <div className="header-border">
        <div className="container">
          <div className="wrapper">
            <a href="." className='logo'>
              <img src={logo}></img>
            </a>
            <div className={isMobile ? 'start ' + 'false' : 'start'}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>
            <div
              className={
                showSearch === 'show'
                  ? isMobile
                    ? 'end show'
                    : 'end hid'
                  : 'end'
              }
            >
              <button className="mobile-search" onClick={() => toggleSearch()}>
                <img src={showSearch === 'hid' ? search : condense} />
              </button>
              <div className={showSearch}>
                <input type="search" />
                <button className="normal-search">
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
          <div className="search-small">
            <input type="search" spellCheck='false'/>
            <button className="normal-search">
              <img src={search} />
            </button>
          </div>
          <div className={ isMobile ? 'collapsible ' + showNav : 'collapsible'}>
            <ul>
              <li><a href='.'>Home</a></li>
              <li><a href='.'>Products</a></li>
              <li><a href='.'>Team</a></li>
              <li><a href='.'>About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
