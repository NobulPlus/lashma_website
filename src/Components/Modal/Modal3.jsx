// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import noticeImage from '../../assets/images/whatsapp-notice-sep2026.jpeg';

Modal.setAppElement('#root');

const Modal3 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Open the modal when the component mounts
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Notice Modal"
        style={{
          overlay: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            padding: 0,
            width: 'min(560px, 92vw)',
            maxWidth: 'min(560px, 92vw)',
            maxHeight: '90vh',
            overflow: 'visible',
          },
        }}
      >
        {/* Non-scrolling wrapper: keeps the close button fixed in place
            while the box below it scrolls independently. */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={closeModal}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '10px',
              right: '12px',
              zIndex: 10,
              background: 'rgba(0,0,0,0.55)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '18px',
              lineHeight: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.85)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
          >
            &times;
          </button>

          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: '90vh',
            }}
          >
            <img
              src={noticeImage}
              alt="LASHMA Notice"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Modal3;
