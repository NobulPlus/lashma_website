import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../assets/lashma-logo.png';
import Button from '../../ui/Button/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Health Plans', path: '/plan' },
    {
      label: 'Our Arms',
      dropdown: [
        { label: 'ILERA EKO', path: '/maintenance' },
        { label: 'LSHS Regulation', path: '/maintenance' },
        { label: 'EKOSHA', path: 'https://lashma.com/ekosha', external: true },
      ]
    },
    { label: 'Our Team', path: '/about' },
    {
      label: 'Our Network',
      dropdown: [
        { label: 'Lagos State', path: 'https://lagosstate.gov.ng/', external: true },
        { label: 'Ilera EkoSpotLight', path: 'https://ileraekospotlight.com/', external: true },
        { label: 'Resources', path: '/resources' },
        { label: 'Marketing Agents', path: '/marketing-agents' },
        { label: 'LSHS Verification', path: 'https://verify.lshsportal.com:8283/', external: true },
        { label: 'Change Hospital', path: 'https://bit.ly/change-my-ileraeko-provider', external: true },
      ]
    },
    { label: 'Healthcare Provider', path: '/provider' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>24/7 Support: 0800-ILERAEKO (0800-453-72356)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>WhatsApp: 0704-535-8275</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="LASHMA Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200 py-2"
                        onMouseEnter={() => setActiveDropdown(index)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.path}
                                target={dropdownItem.external ? '_blank' : undefined}
                                rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-gray-700 hover:text-orange-600 transition-colors duration-200 ${
                        location.pathname === item.path ? 'text-orange-600 font-medium' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://lashma.myclinify.com/paypolicy', '_blank')}
              >
                Pay Now
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open('https://lashma.myclinify.com/register', '_blank')}
              >
                Enroll ILERA EKO
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-gray-200 py-4"
              >
                <div className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <div key={index}>
                      {item.dropdown ? (
                        <div>
                          <button
                            className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 py-2"
                            onClick={() => handleDropdownToggle(index)}
                          >
                            <span>{item.label}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === index ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-2"
                              >
                                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                  <Link
                                    key={dropdownIndex}
                                    to={dropdownItem.path}
                                    target={dropdownItem.external ? '_blank' : undefined}
                                    rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                                    className="block text-gray-600 hover:text-orange-600 transition-colors duration-200 py-1"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block text-gray-700 hover:text-orange-600 transition-colors duration-200 py-2 ${
                            location.pathname === item.path ? 'text-orange-600 font-medium' : ''
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 space-y-3">
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() => window.open('https://lashma.myclinify.com/paypolicy', '_blank')}
                    >
                      Pay Now
                    </Button>
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => window.open('https://lashma.myclinify.com/register', '_blank')}
                    >
                      Enroll ILERA EKO
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;