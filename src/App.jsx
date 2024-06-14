/* eslint-disable no-unused-vars */
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import Header from './Components/Heading/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import YoutubeVid from './Components/YoutubeVid/YoutubeVid'
import About from './Components/About/About'
import Card  from './Components/Card/Card'
import Break from './Components/Break/Break'
import Stat from './Components/Stat/Stat'
import Gmaps from './Components/GMaps/Gmaps'
import Telemedicine from './Components/Telemedicine/Telemedicine'
import Programs from './Components/Programs/Programs'
import Gap from './Components/Gap/Gap'
import Footer from './Components/Footeer/Footer'

function App(){
  return (
    <>
    <ScrollToTop smooth/>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <YoutubeVid/>
          <About/>
          <Card />
          <Break />
          <Stat />
          <Telemedicine />
          <Gmaps />
          <Programs />
          <Gap />
          <Footer/>
      </Router>
    </>
  )
}

export default App
