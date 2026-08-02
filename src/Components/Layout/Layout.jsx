import { Link, Outlet } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Header from '../Heading/Header';
import Footer from '../Footer/Footer';
import ScrollTrigger from 'react-scroll-trigger';
import PublicNoticeModal from '../PublicNotice/PublicNoticeModal';

const Layout = () => {
  return (
    <>
      <ScrollTrigger smooth />
      <PublicNoticeModal />
      <Header />
      <Outlet />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        declineButtonText="Reject All (except necessary)"
        enableDeclineButton
        cookieName="lashma_cookie_consent"
        style={{ background: '#0f172a' }}
        buttonStyle={{
          background: '#f28201',
          color: '#fff',
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '5px',
        }}
        declineButtonStyle={{
          background: '#64748b',
          color: '#fff',
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '5px',
          marginLeft: '10px',
        }}
        contentStyle={{
          fontSize: '14px',
          color: '#fff',
          maxWidth: '900px',
        }}
      >
        We value your privacy. We use cookies to enhance your browsing experience, analyze site traffic,
        personalize content, and serve targeted advertisements. By clicking &quot;Accept All Cookies&quot; or
        continuing to use our website, you consent to our use of cookies in accordance with our{' '}
        <Link to="/cookies-policy" style={{ color: '#f28201', textDecoration: 'underline' }}>
          Cookies Policy
        </Link>
        .
      </CookieConsent>
    </>
  );
};

export default Layout;
