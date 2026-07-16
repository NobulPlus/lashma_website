import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import policyUpdateLandscape from '../../assets/images/ilera-eko-policy-update-landscape.jpeg';
import policyUpdatePortrait from '../../assets/images/ilera-eko-policy-update-portrait.jpeg';

const noticeImages = [
  {
    src: policyUpdateLandscape,
    alt: 'ILERA EKO policy updates for valued clients',
  },
  {
    src: policyUpdatePortrait,
    alt: 'ILERA EKO policy updates reminder flyer',
  },
];

const dismissStorageKey = 'ileraEkoPolicyUpdateNoticeDismissedCount';

const PublicNoticeModal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if all modals were dismissed in this session
    const dismissedCount = parseInt(sessionStorage.getItem(dismissStorageKey) || '0');
    
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
    sessionStorage.setItem(dismissStorageKey, dismissedCount.toString());
    
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
        className="fixed inset-0 bg-black bg-opacity-75 z-[9999] flex items-center justify-center p-4 animate-fade-in"
        onClick={handleDismiss}
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-title"
      >
        {/* Modal Content - w-fit allows container to shrink-to-fit either landscape or portrait images */}
        <div 
          className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-[95vw] md:max-w-3xl max-h-[85vh] w-fit flex flex-col animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 z-10 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg focus:outline-none"
            aria-label="Close notice"
          >
            <X size={20} />
          </button>

          {/* Current Notice Image */}
          <div className="relative flex items-center justify-center bg-white">
            <img 
              src={noticeImages[currentImageIndex].src}
              alt={noticeImages[currentImageIndex].alt}
              className="max-h-[80vh] w-auto max-w-full object-contain block"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-65 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide z-10 shadow">
            {currentImageIndex + 1} / {noticeImages.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicNoticeModal;
