import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { MenuBar } from '../components/MenuBar'
import { Banner } from '../components/Banner'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Teams } from '../components/Teams'
import { About } from '../components/About'

function App () {
  return (
    <div className="App">
      <MenuBar />
      <Banner />
      <Products />
      <Teams />
      <ScrollTop />
      <About />
      <Footer />
    </div>
  )
}

export default App
