import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import { MenuBar } from '../components/MenuBar'
import { Banner } from '../components/Banner'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Teams } from '../components/Teams'
import { About } from '../components/About'
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = "G-JGRLH6VWQ1"; // YOUR_OWN_MEASUREMENT_ID
ReactGA.initialize(MEASUREMENT_ID, { debug: true });

function App () {
  // ReactGA.pageview(window.location.pathname + window.location.search)
  useEffect(() => {
    ReactGA.send("pageview")
  }, [])
  
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
