import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import noticeImage from '../../assets/images/notice2.jpg';

const PublicNoticeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const isDismissed = sessionStorage.getItem('publicNoticeDismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('publicNoticeDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white shadow-lg"
      role="alert"
      aria-live="assertive"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-start justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⚠️</span>
              <h2 className="text-lg md:text-xl font-bold">
                ❌❌❌ IMPORTANT PUBLIC NOTICE ❌❌❌
              </h2>
            </div>
            
            <div className="text-sm md:text-base space-y-2">
              <p className="font-semibold">
                The Lagos State Health Management Agency (LASHMA) alerts the public and Public Servants that the message currently circulating on social media requesting ILERA EKO registration, verification, or printing of policy slips through unauthorised links is <span className="font-bold text-yellow-300">FAKE NEWS</span>.
              </p>
              
              <p>Such messages should be disregarded and not shared.</p>
              
              <p>All ILERA EKO enrolment and policy-related activities are carried out only through approved LASHMA channels and designated offices.</p>
              
              <div className="mt-3 bg-red-700 p-3 rounded">
                <p className="font-bold mb-2">PLEASE NOTE:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>LASHMA did not issue the message.</li>
                  <li>LASHMA does not conduct policy verification for Public Servants through unofficial portals.</li>
                </ul>
                
                <p className="font-semibold mt-2">The only approved channels are:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                  <li>Head Office - Good Shepherd House, Opposite Secretariat Main Gate, Alausa, Ikeja</li>
                  <li>ILERA EKO Kiosk - Adjacent Adeyemi Bero Hall, Alausa Secretariat, Ikeja</li>
                </ol>
                
                <p className="text-sm mt-2">
                  In addition, MDAs' may formally request the deployment of a LASHMA team for on-site validation and registration, subject to the availability of adequate space for the exercise.
                </p>
              </div>
              
              <p className="text-xs mt-3 italic">
                Management<br />
                Lagos State Health Management Agency (LASHMA)
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-2 hover:bg-red-700 rounded-full transition-colors"
            aria-label="Close notice"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicNoticeBanner;
