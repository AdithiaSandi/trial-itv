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
import ReactGA from 'react-ga';

function App () {
  const TRACKING_ID = "G-JGRLH6VWQ1"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
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
