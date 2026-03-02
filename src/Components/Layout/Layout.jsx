import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Heading/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ScrollTrigger from 'react-scroll-trigger';
// import PublicNoticeModal from '../PublicNotice/PublicNoticeModal';
// import Modal2 from '../Modal/Modal2';

const Layout = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Show the modal whenever the route changes
    setShowModal(true);

    // Optional: auto close the modal after a few seconds
    // const timer = setTimeout(() => setShowModal(false), 8000); 
    // return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <ScrollTrigger smooth />
      {/* <PublicNoticeModal /> */}
      <Header />
      {/* {showModal && <Modal2 onClose={() => setShowModal(false)} />} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
