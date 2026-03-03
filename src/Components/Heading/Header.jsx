import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/lashma-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [networkDropdownOpen, setNetworkDropdownOpen] = useState(false);
  const [armsDropdownOpen, setArmsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const networkTimeoutId = useRef(null);
  const armsTimeoutId = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNetworkEnter = () => {
    clearTimeout(networkTimeoutId.current);
    setNetworkDropdownOpen(true);
  };
  const handleNetworkLeave = () => {
    networkTimeoutId.current = setTimeout(() => setNetworkDropdownOpen(false), 300);
  };
  const handleArmsEnter = () => {
    clearTimeout(armsTimeoutId.current);
    setArmsDropdownOpen(true);
  };
  const handleArmsLeave = () => {
    armsTimeoutId.current = setTimeout(() => setArmsDropdownOpen(false), 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route navigation
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="header-topbar">
        <div className="topbar-inner">
          <div className="topbar-marquee">
            <span>
              📞 24/7 Support: <strong>0800-ILERAEKO</strong> (0800-453-72356) &nbsp;|&nbsp;
              <strong>0800-ASKLASHMA</strong> (0800-2755-27462) &nbsp;|&nbsp;
              <strong>0700-ILERAEKO</strong> (0700-453-72356) &nbsp;|&nbsp;
              WhatsApp: <strong>0704-535-8275</strong>, <strong>0704-616-0051</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo" onClick={closeMenu}>
            <img src={logo} alt="LASHMA Logo" />
            <div className="logo-text">
              <span className="logo-name">LASHMA</span>
              <span className="logo-tagline">Your Good Health, Our Mandate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/plan" className="nav-link" onClick={closeMenu}>Health Plans</Link></li>

              {/* Our Arms Dropdown */}
              <li
                className="nav-dropdown"
                onMouseEnter={handleArmsEnter}
                onMouseLeave={handleArmsLeave}
              >
                <button className="nav-link nav-dropdown-trigger">
                  Our Arms
                  <svg className={`dropdown-chevron ${armsDropdownOpen ? 'chevron-open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul className={`dropdown-menu ${armsDropdownOpen ? 'dropdown-open' : ''}`}>
                  <li><Link to="/maintenance" onClick={closeMenu}>ILERA EKO</Link></li>
                  <li><Link to="/maintenance" onClick={closeMenu}>LSHS Regulation</Link></li>
                  <li><Link to="https://lashma.com/ekosha" onClick={closeMenu}>EKOSHA</Link></li>
                </ul>
              </li>

              <li><Link to="/about" className="nav-link" onClick={closeMenu}>Our Team</Link></li>

              {/* Our Network Dropdown */}
              <li
                className="nav-dropdown"
                onMouseEnter={handleNetworkEnter}
                onMouseLeave={handleNetworkLeave}
              >
                <button className="nav-link nav-dropdown-trigger">
                  Our Network
                  <svg className={`dropdown-chevron ${networkDropdownOpen ? 'chevron-open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul className={`dropdown-menu ${networkDropdownOpen ? 'dropdown-open' : ''}`}>
                  <li><Link to="https://lagosstate.gov.ng/" onClick={closeMenu}>Lagos State</Link></li>
                  <li><Link to="https://ileraekospotlight.com/" onClick={closeMenu}>Ilera Eko SpotLight</Link></li>
                  <li><Link to="/resources" onClick={closeMenu}>Resources</Link></li>
                  <li><Link to="/marketing-agents" onClick={closeMenu}>Marketing Agents</Link></li>
                  <li><Link to="https://verify.lshsportal.com:8283/" onClick={closeMenu}>LSHS Verification</Link></li>
                  <li><Link to="/provider" onClick={closeMenu}>Healthcare Provider</Link></li>
                  <li><Link to="https://bit.ly/change-my-ileraeko-provider" onClick={closeMenu}>Change Hospital</Link></li>
                </ul>
              </li>

              <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link></li>
            </ul>

            {/* Mobile CTA Buttons */}
            <div className="nav-cta-mobile">
              <Link to="https://lashma.myclinify.com/register" className="cta-btn cta-primary" onClick={closeMenu}>
                Enroll ILERA EKO
              </Link>
              <Link to="https://lashma.myclinify.com/paypolicy" className="cta-btn cta-dark" onClick={closeMenu}>
                Pay Now
              </Link>
            </div>
          </nav>

          {/* Desktop CTA + Hamburger */}
          <div className="header-actions">
            <Link to="https://lashma.myclinify.com/register" className="cta-btn cta-primary">
              Enroll ILERA EKO
            </Link>
            <Link to="https://lashma.myclinify.com/paypolicy" className="cta-btn cta-dark">
              Pay Now
            </Link>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
