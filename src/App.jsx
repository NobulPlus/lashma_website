/* eslint-disable no-unused-vars */
import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
import Header from './Components/Heading/Header'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'


function App(){
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      {/* <Navbar/> */}
      {/* <Hero/> */}
    </>
  )
}

export default App
