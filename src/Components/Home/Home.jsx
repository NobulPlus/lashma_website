import React, { useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero/Hero';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';
// import Notice from '../Modal/ModalComponent';
import CookieConsent from 'react-cookie-consent';
import SurveyBanner from './SurveyBanner';

// Lazy load components
const YoutubeVid = lazy(() => import('../layouts/YoutubeVid/YoutubeVid'));
const Testimonials = lazy(() => import('../layouts/Testimonials/Testimonials'));
const About = lazy(() => import('../layouts/About/About'));
const HowItWorks = lazy(() => import('../layouts/HowItWorks/HowItWorks'));
const Card = lazy(() => import('../layouts/Card/Card'));
const WhyLashma = lazy(() => import('../layouts/WhyLashma/WhyLashma'));
const Break = lazy(() => import('../layouts/Break/Break'));
const Stat = lazy(() => import('../layouts/Stat/Stat'));
const Gmaps = lazy(() => import('../layouts/GMaps/Gmaps'));
// const Telemedicine = lazy(() => import('../layouts/Telemedicine/Telemedicine'));
const Programs = lazy(() => import('../layouts/Programs/Programs'));
const CTABanner = lazy(() => import('../layouts/CTABanner/CTABanner'));
const Gap = lazy(() => import('../layouts/Gap/Gap'));
const Partner = lazy(() => import('../layouts/Partner/Partner'));
const ZohoChat = lazy(() => import('../Chatbot/ZohoChat'));
const HomeBlogSection = lazy(() => import('../layouts/Blog/HomeBlogSection'));
const IleraEkoSpotlight = lazy(() => import('../layouts/EkoSpotLight/IleraEkoSpotLight'));

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

      <Suspense fallback={<div>Loading...</div>}>
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

        {/* {<HomeBlogSection />} */}

        {/* Media / radio spotlight */}
        <IleraEkoSpotlight />

        {/* {<Quality />} */}
        <Gap />

        {/* Partners marquee */}
        <Partner />
        <ZohoChat />
      </Suspense>
    </>
  );
};

export default Home;

