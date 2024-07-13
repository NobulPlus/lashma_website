import React from 'react';
import { Link } from 'react-router-dom';
import GapBackground from '../../../assets/All/import/gap-bg.jpg';

const Gap = () => {
  return (
    <div 
      className="w-full bg-cover bg-fixed py-8" 
      style={{ backgroundImage: `url(${GapBackground})` }}
    >
      <div className="gap-container mx-auto flex flex-wrap items-center justify-evenly">
        <div className="left-gap text-center w-full md:w-1/2 text-black">
          <h3 className="left-text text-4xl font-semibold md:text-5xl">
            Get Health Insurance.<br/> Get Wealth Bonus.<br/> Get Living.
          </h3>
        </div>
        <div className="right-gap flex flex-col items-start md:w-1/2 text-black px-4">
          <p className="right-text text-xl md:text-2xl font-light mb-6">
            We leverage technology to redefine ‘‘quality healthcare’’ by making it simple, affordable, flexible and holistic.
          </p>
          <div className="gap-button flex flex-wrap justify-start space-x-4">
            <button className="get_started bg-black text-white py-2 px-6 rounded transition duration-300 hover:bg-gray-800">
              <Link to="https://selfregistration.lshsportal.com:467/" className="no-underline text-slate-100">Get Started</Link>
            </button>
            <button className="contact bg-transparent border border-black text-black py-2 px-6 rounded transition duration-300 hover:bg-black hover:text-white">
              <Link to="/contact" className="no-underline text-slate-100">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gap;
