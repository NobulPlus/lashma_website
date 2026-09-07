import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';
import SurveyBanner from './SurveyBanner';

import YoutubeVid from '../layouts/YoutubeVid/YoutubeVid';
import Testimonials from '../layouts/Testimonials/Testimonials';
import About from '../layouts/About/About';
import HowItWorks from '../layouts/HowItWorks/HowItWorks';
import Card from '../layouts/Card/Card';
import WhyLashma from '../layouts/WhyLashma/WhyLashma';
import Break from '../layouts/Break/Break';
import Stat from '../layouts/Stat/Stat';
import Gmaps from '../layouts/GMaps/Gmaps';
import Programs from '../layouts/Programs/Programs';
import CTABanner from '../layouts/CTABanner/CTABanner';
import Gap from '../layouts/Gap/Gap';
import Partner from '../layouts/Partner/Partner';
import ZohoChat from '../Chatbot/ZohoChat';
import IleraEkoSpotlight from '../layouts/EkoSpotLight/IleraEkoSpotLight';
import Modal3 from '../Modal/Modal3';
import IntentPrompt from './IntentPrompt';

const Home = () => {
  const [noticeOpen, setNoticeOpen] = useState(true);

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  return (
    <>
      <Helmet>
        <title>LASHMA | Your good health, Our mandate</title>
        <meta
          name="description"
          content="Lagos State Health Management Agency. Enroll in ILERA EKO for affordable, quality healthcare across Lagos."
        />
        <link rel="canonical" href="https://www.lashma.com/" />
      </Helmet>

      {/* Homepage-only notice modal */}
      <Modal3 onClose={() => setNoticeOpen(false)} />

      {/* Non-blocking wayfinding prompt: waits for the notice modal to be
          dismissed first so the two never stack. */}
      <IntentPrompt active={!noticeOpen} />

      {/* First viewport: brand story + enroll path */}
      <Hero />
      <YoutubeVid />
      <Testimonials />
      <About />
      <HowItWorks />
      <Card />

      {/* Engagement & surveys after core story */}
      <SurveyBanner />

      <WhyLashma />
      <Break />
      <Stat />
      <Gmaps />
      <Programs />
      <CTABanner />
      <IleraEkoSpotlight />
      <Gap />
      <Partner />
      <ZohoChat />
    </>
  );
};

export default Home;
