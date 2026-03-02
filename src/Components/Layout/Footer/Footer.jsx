import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Send,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import logo from '../../../assets/lashma-logo.png';

// Import PDFs
import jaaraNew from '../../../assets/doc/jaaraNew.pdf';
import seniorsPlan from '../../../assets/doc/seniorsPlan.pdf';
import diaspora from '../../../assets/doc/diaspora.pdf';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !firstName) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_wokgw6g',
        'template_bdfvaxi',
        {
          user_email: email,
          user_name: firstName,
        },
        'nJb5cZW-Jm_wTpEho'
      );

      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
      setFirstName('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Health Plans', path: '/plan' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Resources', path: '/resources' },
    { label: 'Provider Portal', path: '/provider' },
  ];

  const healthPlans = [
    { label: 'Standard Jaara Plan', path: jaaraNew, external: true },
    { label: 'Senior Plan', path: seniorsPlan, external: true },
    { label: 'Diaspora Plan', path: diaspora, external: true },
    { label: 'VBooth Telemedicine', path: '/maintenance' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Toll Free Lines',
      details: [
        '0800-ILERAEKO (0800-4537-2356)',
        '0800-ASKLASHMA (0800-2755-27462)',
        '0700-ILERAEKO (0700-4537-2356)',
      ]
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Support',
      details: [
        '0704-535-8275',
        '0704-616-0051',
      ]
    },
    {
      icon: Mail,
      label: 'Email Support',
      details: ['info@lashma.lg.gov.ng']
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/lashma__?igsh=MTdlMm5zYWVqNzN5MA=='
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/lagos-state-health-management-agency/'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/2347045358275'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="LASHMA Logo" className="h-12 w-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest health updates and announcements.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button
                type="submit"
                fullWidth
                loading={isSubmitting}
                icon={<Send className="h-4 w-4" />}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <contact.icon className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-200 mb-2">{contact.label}</h4>
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Plans */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Health Plans</h3>
            <ul className="space-y-3">
              {healthPlans.map((plan, index) => (
                <li key={index}>
                  {plan.external ? (
                    <a
                      href={plan.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                    >
                      <span>{plan.label}</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  ) : (
                    <Link
                      to={plan.path}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                    >
                      <span>{plan.label}</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Follow Us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-orange-600 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Lagos State Health Management Agency. All rights reserved.
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies-policy"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
              >
                Cookies Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
              >
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;