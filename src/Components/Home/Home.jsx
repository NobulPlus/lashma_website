import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero/Hero';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';
// import Notice from '../Modal/ModalComponent';
import CookieConsent from 'react-cookie-consent';
import SurveyBanner from './SurveyBanner';

// Normal imports
import YoutubeVid from '../layouts/YoutubeVid/YoutubeVid';
import Testimonials from '../layouts/Testimonials/Testimonials';
import About from '../layouts/About/About';
import HowItWorks from '../layouts/HowItWorks/HowItWorks';
import Card from '../layouts/Card/Card';
import WhyLashma from '../layouts/WhyLashma/WhyLashma';
import Break from '../layouts/Break/Break';
import Stat from '../layouts/Stat/Stat';
import Gmaps from '../layouts/GMaps/Gmaps';
// import Telemedicine from '../layouts/Telemedicine/Telemedicine';
import Programs from '../layouts/Programs/Programs';
import CTABanner from '../layouts/CTABanner/CTABanner';
import Gap from '../layouts/Gap/Gap';
import Partner from '../layouts/Partner/Partner';
import ZohoChat from '../Chatbot/ZohoChat';
import HomeBlogSection from '../layouts/Blog/HomeBlogSection';
import IleraEkoSpotlight from '../layouts/EkoSpotLight/IleraEkoSpotLight';
// import SocialUpdates from '../layouts/SocialUpdates/SocialUpdates';

const Home = () => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  return (
    <>
      <Helmet>
        <title>LASHMA | Your good health, Our mandate</title>
        <meta name="description" content="Lagos State Health Management Agency. LASHMA" />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Cookie Consent */}
      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        declineButtonText="Reject All (except necessary)"
        enableDeclineButton
        cookieName="lashma_cookie_consent"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          background: "#ea580c",
          color: "#fff",
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "5px",
        }}
        declineButtonStyle={{
          background: "#999",
          color: "#fff",
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
        contentStyle={{
          fontSize: "14px",
          color: "#fff",
          maxWidth: "900px",
        }}
      >
        We value your privacy. We use cookies to enhance your browsing experience, analyze site traffic, personalize content,
        and serve targeted advertisements. By clicking &quot;Accept All Cookies&quot; or continuing to use our website,
        you consent to our use of cookies in accordance with our{' '}
        <Link to="/cookies-policy" style={{ color: '#F97316', textDecoration: 'underline' }}>
          Cookies Policy
        </Link>.
      </CookieConsent>

      {/* Main Content */}
      {/* <Notice /> */}
      <Hero />
      <SurveyBanner />

      
        {/* Social proof: video testimonials */}
        <YoutubeVid />

        {/* Text-based beneficiary quotes (dark section) */}
        <Testimonials />

        {/* Who we are */}
        <About />

        {/* How enrollment works (dark section) */}
        <HowItWorks />

        {/* Quick-action cards */}
        <Card />

        {/* Why choose LASHMA - feature tiles */}
        <WhyLashma />

        {/* Enrollee quick-action bar */}
        <Break />

        {/* Impact numbers */}
        <Stat />

        {/* Provider map */}
        <Gmaps />

        {/* {<Telemedicine />} */}

        {/* Our programs */}
        <Programs />

        {/* Final enrollment CTA (dark section) */}
        <CTABanner />

        {/* Featured social posts */}
        {/* <SocialUpdates /> */}

        {/* {<HomeBlogSection />} */}

        {/* Media / radio spotlight */}
        <IleraEkoSpotlight />

        {/* {<Quality />} */}
        <Gap />

        {/* Partners marquee */}
        <Partner />
        <ZohoChat />
    </>
  );
};

export default Home;
