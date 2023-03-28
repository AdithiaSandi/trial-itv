import React, { useState } from 'react'
import './MenuBar.css'
import logo from '../assets/logo.svg'
import search from '../assets/search-magnifying-glass-svgrepo-com.svg'

export const MenuBar = () => {
  const [showSearch, setShowSearch] = useState('hid')

  const toggleSearch = () => {
    setShowSearch(prev => {
      if (prev === 'hid') {
        return 'show'
      } else {
        return 'hid'
      }
    })
  }
  return (
    <header>
      <div className="header-border">
        <div className="container">
          <div className="wrapper">
            <div className="start">
              <a href=".">
                <img src={logo}></img>
              </a>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Team</li>
                <li>About</li>
              </ul>
            </div>
            <div className="end">
              <button className='mobile' onClick={() => toggleSearch()}>
                <img src={search} />
              </button>
              <div className={showSearch}>
                <input type="search" />
                <button className='normal'>
                  <img src={search} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
