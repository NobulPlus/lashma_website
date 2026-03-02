// Components/Modal/ModalWrapper.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import Modal2 from './Modal2';

const ModalWrapper = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);

    const timer = setTimeout(() => {
      setShowModal(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {showModal && <Modal2 close={() => setShowModal(false)} />}
    </>
  );
};

export default ModalWrapper;
