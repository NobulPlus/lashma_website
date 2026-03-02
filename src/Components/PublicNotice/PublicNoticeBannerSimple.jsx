import React, { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';

const PublicNoticeBannerSimple = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const isDismissed = sessionStorage.getItem('publicNoticeBannerDismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('publicNoticeBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl border-b-4 border-yellow-400"
      role="alert"
      aria-live="assertive"
      style={{ paddingTop: '0' }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 mt-1">
            <AlertTriangle size={32} className="text-yellow-300 animate-pulse" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
              <span>⚠️</span>
              <span>IMPORTANT PUBLIC NOTICE - FAKE NEWS ALERT</span>
              <span>⚠️</span>
            </h2>
            
            <div className="text-sm md:text-base space-y-2">
              <p className="font-semibold">
                LASHMA alerts the public: Messages circulating on social media requesting ILERA EKO registration through unauthorised links are <span className="bg-yellow-400 text-red-900 px-2 py-1 rounded font-bold">FAKE NEWS</span>. 
              </p>
              
              <p className="text-yellow-100">
                ✓ Only use official LASHMA channels | ✓ Visit approved offices | ✓ Disregard and do not share fake messages
              </p>
              
              <details className="mt-2">
                <summary className="cursor-pointer font-semibold hover:text-yellow-300 transition-colors">
                  Click for approved channels and more information →
                </summary>
                <div className="mt-3 bg-red-800 bg-opacity-50 p-3 rounded space-y-2">
                  <p className="font-bold">Approved Channels:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Head Office - Good Shepherd House, Opposite Secretariat Main Gate, Alausa, Ikeja</li>
                    <li>ILERA EKO Kiosk - Adjacent Adeyemi Bero Hall, Alausa Secretariat, Ikeja</li>
                  </ol>
                  <p className="text-xs italic mt-2">
                    Management - Lagos State Health Management Agency (LASHMA)
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-2 hover:bg-red-800 rounded-full transition-colors group"
            aria-label="Close notice"
            title="Dismiss notice"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicNoticeBannerSimple;
