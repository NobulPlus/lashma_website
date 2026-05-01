import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/lashma-logo.png';
import './ComingSoon.css';

const LAUNCH_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

function getTimeLeft() {
  const diff = LAUNCH_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const CountUnit = ({ value, label }) => (
  <div className="cs-count-unit">
    <div className="cs-count-box">
      <span className="cs-count-number">{String(value).padStart(2, '0')}</span>
    </div>
    <span className="cs-count-label">{label}</span>
  </div>
);

const Maintenance = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleNotify = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Simulate success (wire up emailjs / API as needed)
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="cs-root">
      {/* Ambient orbs */}
      <div className="cs-orb cs-orb-1" />
      <div className="cs-orb cs-orb-2" />
      <div className="cs-orb cs-orb-3" />

      {/* Grid overlay */}
      <div className="cs-grid" />

      <div className="cs-inner">

        {/* Logo */}
        <Link to="/" className="cs-logo-wrap">
          <img src={logo} alt="LASHMA Logo" className="cs-logo-img" />
          <div className="cs-logo-text">
            <span className="cs-logo-name">LASHMA</span>
            <span className="cs-logo-tagline">Your Good Health, Our Mandate</span>
          </div>
        </Link>

        {/* Badge */}
        <span className="cs-badge">
          <span className="cs-badge-dot" />
          Under Construction
        </span>

        {/* Headline */}
        <h1 className="cs-headline">
          Something
          <span className="cs-headline-accent"> Great </span>
          is Coming
        </h1>

        <p className="cs-subline">
          We're working hard to bring you this page. Stay tuned — it'll be worth the wait.
        </p>

        {/* Countdown */}
        <div className="cs-countdown">
          <CountUnit value={timeLeft.days} label="Days" />
          <span className="cs-sep">:</span>
          <CountUnit value={timeLeft.hours} label="Hours" />
          <span className="cs-sep">:</span>
          <CountUnit value={timeLeft.minutes} label="Minutes" />
          <span className="cs-sep">:</span>
          <CountUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Notify form */}
        <div className="cs-notify-wrap">
          <p className="cs-notify-label">Get notified when we launch</p>
          <form className="cs-notify-form" onSubmit={handleNotify}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="cs-notify-input"
              required
            />
            <button type="submit" className="cs-notify-btn">
              Notify Me
            </button>
          </form>
          {status === 'success' && (
            <p className="cs-notify-success">✓ You're on the list! We'll notify you.</p>
          )}
        </div>

        {/* Social */}
        <div className="cs-socials">
          <a href="https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cs-social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="cs-social-icon"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
          </a>
          <a href="https://www.instagram.com/lashma__?igsh=MTdlMm5zYWVqNzN5MA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cs-social-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="cs-social-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://wa.me/2347045358275" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="cs-social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="cs-social-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.386a.5.5 0 00.602.634l5.784-1.459A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.508-5.21-1.394l-.374-.22-3.434.866.892-3.327-.243-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/lagos-state-health-management-agency/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cs-social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="cs-social-icon"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>

        {/* Back home */}
        <Link to="/" className="cs-back-btn">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>

        {/* Contact strip */}
        <div className="cs-contact-strip">
          <span>Need immediate help?</span>
          <a href="tel:08004537235600" className="cs-contact-link">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.037 11.037 0 005 5l1.127-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            0800-ILERAEKO
          </a>
          <span>or</span>
          <a href="https://wa.me/2347045358275" target="_blank" rel="noopener noreferrer" className="cs-contact-link">
            WhatsApp us
          </a>
        </div>

      </div>
    </div>
  );
};

export default Maintenance;
