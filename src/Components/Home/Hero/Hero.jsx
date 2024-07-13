import React from 'react';
import './hero.css';
import Title from '../../Common/Title/Title';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="hero-head relative overflow-hidden">
        <div className="container hero-container mx-auto text-white z-10">
          <div className="row">
            <div>
              <Title id subtitle='WELCOME TO LAGOS STATE HEALTH MANAGEMENT AGENCY' title='your good health, our mandate' />
              <p className="text-lg md:text-xl mt-4 mb-6 shadow-sm" style={{ textShadow: "0px 0px 5px #000" }}>To improve quality of care and provide financial risk protection against catastrophic and impoverishing healthcare spending for all residents of Lagos state through a mandatory health insurance scheme that is based on the principles of equity and solidarity.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                <Link to='https://selfregistration.lshsportal.com:467' className='no-underline text-slate-100'>REGISTER NOW</Link>
                <i className='fa fa-long-arrow-alt-right ml-2'></i>
              </button>
              <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-orange-500">
                <Link to='plan/' className='no-underline text-slate-100'>VIEW PLANS</Link>
                <i className='fa fa-long-arrow-alt-right ml-2'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
