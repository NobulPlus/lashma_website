import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Header from './Components/Heading/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import YoutubeVid from './Components/layouts/YoutubeVid/YoutubeVid';
import Card from './Components/layouts/Card/Card'; // Capitalize Card for consistency
import Break from './Components/layouts/Break/Break';
import Stat from './Components/layouts/Stat/Stat';
import Gmaps from './Components/layouts/GMaps/Gmaps';
import Telemedicine from './Components/layouts/Telemedicine/Telemedicine';
import Programs from './Components/layouts/Programs/Programs';
import Gap from './Components/layouts/Gap/Gap';
import Footer from './Components/Footeer/Footer'; // Fix typo (Footer)
import Partner from './Components/layouts/Partner/Partner';
// import AboutUs from './Components/AboutUs/AboutUs';
import ReactGA from 'react-ga4';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';

function App() {
  ReactGA.initialize('G-16Y7GXWY2D');
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  })

  return (
    <>
      <ScrollToTop smooth />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/youtube" element={<YoutubeVid />} />
          <Route path="/card" element={<Card />} />  {/* Add route for Card */}
          <Route path="/break" element={<Break />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/gmaps" element={<Gmaps />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gap" element={<Gap />} />
          <Route path="/partner" element={<Partner />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About />}/>
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        </Routes>
        <Footer /> {/* Render Footer outside of Routes */}
      </Router>
    </>
  );
}

export default App;
