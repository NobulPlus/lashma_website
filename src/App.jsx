import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Header from './Components/Heading/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import YoutubeVid from './Components/YoutubeVid/YoutubeVid';
import About from './Components/About/About';
import Card from './Components/Card/Card'; // Capitalize Card for consistency
import Break from './Components/Break/Break';
import Stat from './Components/Stat/Stat';
import Gmaps from './Components/GMaps/Gmaps';
import Telemedicine from './Components/Telemedicine/Telemedicine';
import Programs from './Components/Programs/Programs';
import Gap from './Components/Gap/Gap';
import Footer from './Components/Footeer/Footer'; // Fix typo (Footer)
import Partner from './Components/Partner/Partner';
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-16Y7GXWY2D');
  return (
    <>
      <ScrollToTop smooth />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/youtube" element={<YoutubeVid />} />
          <Route path="/card" element={<Card />} />  {/* Add route for Card */}
          <Route path="/break" element={<Break />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/gmaps" element={<Gmaps />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gap" element={<Gap />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
        <Footer /> {/* Render Footer outside of Routes */}
      </Router>
    </>
  );
}

export default App;
