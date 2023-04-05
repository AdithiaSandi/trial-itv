import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { MenuBar } from '../components/MenuBar'
import { Banner } from '../components/Banner'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Teams } from '../components/Teams'

function App () {
  return (
    <div className="App">
      <MenuBar />
      <Banner />
      <Products />
      <Teams />
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default App
