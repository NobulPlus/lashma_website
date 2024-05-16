/* eslint-disable no-unused-vars */
import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
import Header from './Components/Heading/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import YoutubeVid from './Components/YoutubeVid/YoutubeVid'
import About from './Components/About/About'


function App(){
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <YoutubeVid/>
        {/* <div className="container"> */}
          <About/>
        {/* </div> */}
        
      </Router>
      {/* <Navbar/> */}
      {/* <Hero/> */}
    </>
  )
}

export default App
