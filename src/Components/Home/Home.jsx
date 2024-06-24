import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import YoutubeVid from '../layouts/YoutubeVid/YoutubeVid';
import About from '../layouts/About/About'
import Card from '../layouts/Card/Card'
import Break from '../layouts/Break/Break'
import Stat from '../layouts/Stat/Stat'
import Gmaps from '../layouts/GMaps/Gmaps'
import Telemedicine from '../layouts/Telemedicine/Telemedicine'
import Programs from '../layouts/Programs/Programs'
import Gap from '../layouts/Gap/Gap'
import Partner from '../layouts/Partner/Partner'
import ReactGA from 'react-ga4'

const Home = () => {

  useEffect (() => {
    // Send pageview with a path
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <>
      <Hero/>
      <YoutubeVid/>
      <About/>
      <Card/>
      <Break/>
      <Stat/>
      <Gmaps/>
      <Telemedicine/>
      <Programs/>
      <Gap/>
      <Partner/>
    </>
  )
}

export default Home
