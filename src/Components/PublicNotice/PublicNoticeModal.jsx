import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
// import noticeImage1 from '../../assets/images/Whats.jpeg';
// import noticeImage2 from '../../assets/images/WhatsApp.jpeg';

const PublicNoticeModal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const noticeImages = [noticeImage1, noticeImage2];

  useEffect(() => {
    // Check if all modals were dismissed in this session
    const dismissedCount = parseInt(sessionStorage.getItem('publicNoticeModalDismissedCount') || '0');
    
    if (dismissedCount < noticeImages.length) {
      // Show modal after a brief delay
      const timer = setTimeout(() => {
        setCurrentImageIndex(dismissedCount);
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    
    const nextIndex = currentImageIndex + 1;
    const dismissedCount = nextIndex;
    
    // Save the count of dismissed images
    sessionStorage.setItem('publicNoticeModalDismissedCount', dismissedCount.toString());
    
    // If there are more images, show the next one after a brief delay
    if (nextIndex < noticeImages.length) {
      setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setIsVisible(true);
      }, 300);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        onClick={handleDismiss}
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-title"
      >
        {/* Modal Content */}
        <div 
          className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 z-10 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
            aria-label="Close notice"
          >
            <X size={24} />
          </button>

          {/* Current Notice Image */}
          <div className="w-full bg-gray-100">
            <img 
              src={noticeImages[currentImageIndex]} 
              alt={`LASHMA Important Public Notice - Image ${currentImageIndex + 1} of ${noticeImages.length}`}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {noticeImages.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicNoticeModal;
