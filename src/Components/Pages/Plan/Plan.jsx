import React from 'react';
import Head from './head';
import './Plan.css'
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/individual.png';
import img3 from '../../../assets/images/individualPlus.png';
import img2 from '../../../assets/images/family.png';
import img4 from '../../../assets/images/familyPlus.png';
import standard from '../../../assets/doc/individualStandard.pdf';
import diaspora from '../../../assets/doc/diaspora.pdf';
import telemedicine from '../../../assets/doc/telemedicine.pdf';
import seniorsPlan from '../../../assets/doc/seniorsPlan.pdf';
import plusPlan from '../../../assets/doc/plusPlan.pdf';
import img6 from '../../../assets/images/indSenior.png';
import img7 from '../../../assets/images/familySenior.png';
import img8 from '../../../assets/images/telemedicine.png'
import img9 from '../../../assets/images/diaspora.png'


const Plan = () => {
    return (
        <>
          <Head />
          <div id='plans' className='container px-4 py-12 mx-auto'>
            <div className='grid gap-8 md:grid-cols-3'>
              <div className='p-6 bg-blue-100 rounded-lg shadow-md'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-blue-800'>Standard Plan (Individual)</h3>
                </div>
                <div className='my-4 body'>
                  <p>Take charge of your health with our Standard Plan designed for individuals. Embrace a proactive approach to healthcare and empower yourself to live a healthier and more fulfilling life.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img1} alt='Individual Plan' className='mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-12 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' className='text-white' style={{ textDecoration: 'none' }}>Buy Now</Link>
                    </button>
                    <a href={standard} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }} className='px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100'>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6 bg-green-100 rounded-lg shadow-md'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-green-800'>Standard Plan (Family)</h3>
                </div>
                <div className='my-4 body'>
                  <p>Ensure the health and wellbeing of your family with our comprehensive family health plans. Tailored to meet the needs of families, it provides peace of mind and quality care.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img2} alt='Family Plan' className='mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-12 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' style={{ textDecoration: 'none' }} className='text-white'>Buy Now</Link>
                    </button>
                    <a href={standard} target='_blank' rel='noopener noreferrer' className='px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100' style={{ textDecoration: 'none' }}>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6 bg-red-100 rounded-lg shadow-md'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-red-800'>Standard Plus (Individual)</h3>
                </div>
                <div className='my-4 body'>
                  <p>Elevate your healthcare experience with our Standard Plus Plan for individuals. Offering enhanced coverage and benefits, it's designed to meet your evolving health needs.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img3} alt='Corporate Plan' className='mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-4 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' style={{ textDecoration: 'none' }} className='text-white'>Buy Now</Link>
                    </button>
                    <a href={plusPlan} target='_blank' rel='noopener noreferrer' className='px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-100' style={{ textDecoration: 'none' }}>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6 bg-yellow-100 rounded-lg shadow-md'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-yellow-800'>Standard Plus (Family)</h3>
                </div>
                <div className='my-4 body'>
                  <p>Empower your family with our comprehensive Standard Plus Family Plan. Enjoy superior healthcare benefits and peace of mind knowing your loved ones are covered.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img4} alt='Individual Plan' className='mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-8 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' style={{ textDecoration: 'none' }} className='text-white'>Buy Now</Link>
                    </button>
                    <a href={plusPlan} target='_blank' rel='noopener noreferrer' className='px-4 py-2 text-yellow-600 border border-yellow-600 rounded-md hover:bg-yellow-100' style={{ textDecoration: 'none' }}>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6 bg-purple-100 rounded-lg shadow-md'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-purple-800'>Senior Plan (Individual)</h3>
                </div>
                <div className='my-4 body'>
                  <p>Ensure the health and wellbeing of seniors with our comprehensive Senior Plan for individuals. Tailored to their unique needs, it provides essential healthcare coverage and support.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img6} alt='Family Plan' className='mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-8 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' style={{ textDecoration: 'none' }} className='text-white'>Buy Now</Link>
                    </button>
                    <a href={seniorsPlan} target='_blank' rel='noopener noreferrer' className='px-4 py-2 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-100' style={{ textDecoration: 'none' }}>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6 bg-teal-100 rounded-lg shadow-md'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-teal-800'>Senior Plan (Family)</h3>
                </div>
                <div className='my-4 body'>
                  <p>Support your family's health journey with our Senior Family Plan. Designed for seniors and their families, it offers comprehensive coverage and personalized care.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img7} alt='Corporate Plan' className='mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-8 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' style={{ textDecoration: 'none' }} className='text-white'>Buy Now</Link>
                    </button>
                    <a href={seniorsPlan} target='_blank' rel='noopener noreferrer' className='px-4 py-2 text-teal-600 border border-teal-600 rounded-md hover:bg-teal-100' style={{ textDecoration: 'none' }}>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6 rounded-lg shadow-md bg-lime-100'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-lime-800'>Telemedicine</h3>
                </div>
                <div className='my-4 body'>
                  <p>Access healthcare anytime, anywhere with our Telemedicine Plan. Connect with healthcare professionals remotely for consultations and medical advice.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img8} alt='Family Plan' className='mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-12 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white rounded-md bg-lime-600 hover:bg-lime-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' style={{ textDecoration: 'none' }} className='text-white'>Buy Now</Link>
                    </button>
                    <a href={telemedicine} target='_blank' rel='noopener noreferrer' className='px-4 py-2 border rounded-md border-lime-600 text-lime-600 hover:bg-purple-100' style={{ textDecoration: 'none' }}>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6 bg-orange-100 rounded-lg shadow-md'>
                <div className='title'>
                  <h3 className='text-2xl font-bold text-orange-800'>Diaspora</h3>
                </div>
                <div className='my-4 body'>
                  <p>Our corporate plans provide comprehensive health solutions for your employees.</p>
                </div>
                <div className='items-center justify-between foot'>
                  <div className='foot-img'>
                    <img src={img9} alt='Corporate Plan' className='w-[90%] mx-auto rounded-full' />
                  </div>
                  <div className='flex items-center justify-center pt-4 space-x-4 foot-button'>
                    <button className='px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700'>
                      <Link to='https://selfregistration.lshsportal.com:467/' style={{ textDecoration: 'none' }} className='text-white'>Buy Now</Link>
                    </button>
                    <a href={diaspora} target='_blank' rel='noopener noreferrer' className='px-4 py-2 text-orange-600 border border-orange-600 rounded-md hover:bg-orange-100' style={{ textDecoration: 'none' }}>
                      View Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Plan
