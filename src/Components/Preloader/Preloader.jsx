import { useState, useEffect } from 'react';
import logo from '../../assets/lashma-logo.png';
import './Preloader.css';

/**
 * Branded boot preloader.
 * Mounts immediately (before Router hydrates).
 * Waits for document.readyState === 'complete', then fades out.
 * Hard timeout of MAX_MS prevents it from blocking forever.
 */
const MAX_MS = 2500; // absolute max display time in ms
const FADE_DELAY = 200; // small extra pause before fade so logo is seen

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let timer;

    const dismiss = () => {
      // Small grace pause so the progress bar animation looks complete
      setTimeout(() => {
        setFading(true);
        // Remove from DOM after CSS transition ends (0.55 s)
        setTimeout(() => setVisible(false), 600);
      }, FADE_DELAY);
    };

    if (document.readyState === 'complete') {
      dismiss();
    } else {
      window.addEventListener('load', dismiss, { once: true });
      // Hard safety timeout
      timer = setTimeout(dismiss, MAX_MS);
    }

    return () => {
      window.removeEventListener('load', dismiss);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay${fading ? ' fade-out' : ''}`} role="status" aria-label="Loading LASHMA website">
      <div className="preloader-logo-wrap">
        <img src={logo} alt="LASHMA Logo" className="preloader-logo" />
        <span className="preloader-brand-name">LASHMA</span>
        <span className="preloader-tagline">Your good health, Our mandate</span>

        <div className="preloader-dots">
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="preloader-bar-track" aria-hidden="true">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
};

export default Preloader;
