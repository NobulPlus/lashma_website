import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import YoutubeVid from '../YoutubeVid/YoutubeVid';
import About from '../About/About'
import Card from '../Card/Card'
import Break from '../Break/Break'
import Stat from '../Stat/Stat'
import Gmaps from '../GMaps/Gmaps'
import Telemedicine from '../Telemedicine/Telemedicine'
import Programs from '../Programs/Programs'
import Gap from '../Gap/Gap'
import Partner from '../Partner/Partner'
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
