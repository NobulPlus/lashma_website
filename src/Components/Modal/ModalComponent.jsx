import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import image1 from '../../assets/images/downtime.jpg'; // Adjust the path as needed

Modal.setAppElement('#root'); // Ensure accessibility

const ModalComponent = () => {
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
        contentLabel="Image Modal"
        className="fixed inset-0 z-50 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="relative flex items-center justify-center max-h-full p-1 bg-white rounded-lg shadow-lg">
          <button 
            onClick={closeModal} 
            className="absolute top-0 right-0 mt-4 mr-4 text-xs text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <img 
            src={image1} 
            alt="Sample" 
            className="object-contain w-auto max-h-screen"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
