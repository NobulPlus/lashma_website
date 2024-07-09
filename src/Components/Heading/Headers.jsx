import React, { useState } from 'react';
import logo from '../../assets/lashma-logo.png'
import { Link } from 'react-router-dom'
import Head from './Head';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <Head/>     
            <header className="bg-orange-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold"><img src={logo} alt="" className='logo_pics'/></h1>
                </div>
                <div className="hidden md:block">
                    <nav className="flex space-x-4">
                    <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">Home</Link>
                    <Link to="/plan" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">Plan</Link>
                    <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">About</Link>
                    <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  Our Network
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ilera Eko</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LSHS Regulation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ekosha</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lagos State</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Payment Channel</a>
                </div>
              </div>
                    <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-700">Contact</Link>
                    </nav>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button
                    onClick={toggleMenu}
                    className="bg-orange-600 p-2 rounded-md inline-flex items-center justify-center text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-500 focus:ring-white"
                    aria-expanded={isOpen}
                    >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                    </button>
                </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-orange-700">Home</Link>
                <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700">About</Link>
                <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700">Services</Link>
                <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-700">Contact</Link>
                </nav>
            </div>
            </header>
    </>
  );
};

export default Header;
