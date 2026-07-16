import { Outlet } from 'react-router-dom';
import Header from '../Heading/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ScrollTrigger from 'react-scroll-trigger';
import PublicNoticeModal from '../PublicNotice/PublicNoticeModal';
// import Modal2 from '../Modal/Modal2';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollTrigger smooth />
      <PublicNoticeModal />
      <Header />
      {/* {showModal && <Modal2 onClose={() => setShowModal(false)} />} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
