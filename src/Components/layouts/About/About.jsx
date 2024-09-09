import React from 'react';
import about_img from '../../../assets/All/import/backdrop.png';
import play_icon from '../../../assets/All/import/play-icon.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="about bg-cover bg-fixed py-16 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Section with Image */}
          <div className="relative w-full md:w-2/5 mb-8 md:mb-0">
            <img src={about_img} alt="About LASHMA" className="w-full h-auto rounded-lg shadow-lg" />
            <Link to="https://youtu.be/ZfI8Qo8E7U8" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={play_icon} alt="Play" className="w-16 hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right Section with Text */}
          <div className="md:w-3/5 space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-orange-600">ABOUT LASHMA</h3>
            <p className="text-lg text-gray-700">
              Lagos State Health Management Agency (LASHMA) was established by the enabling act No. 14 of 25 May, 2015 and registered in Lagos State of Nigeria (Official Gazette No. 32, Vol. 48) dated 5th June 2015 to ensure that all residents of Lagos State including Public Servants have access to affordable and quality health care.
            </p>
            <p className="text-lg text-gray-700">
              Through the Scheme, people living in Lagos can be protected from financial distress resulting from huge medical bills.
            </p>
            <p className="text-lg text-gray-700">
              Our Vision is to improve the overall health indices of Lagos State through Universal Health Coverage for all residents of the state.
            </p>

            {/* Button */}
            <div className="mt-6">
              <Link to="/about" className="inline-block px-6 py-3 no-underline text-white bg-orange-600 rounded-md shadow-md hover:bg-orange-700 transition-colors">
                READ MORE
                <i className="ml-2 fa fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
