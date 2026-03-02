import React from 'react';
import AboutImg from '../../../assets/images/65.png';

const AboutUs = () => {
  return (
    <div className="flex justify-center pt-48 aboutus_container">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 p-8 bg-white shadow-lg aboutus_content md:grid-cols-2 rounded-xl">
        <div className="flex flex-col justify-center aboutus_content-right">
          <img
            src={AboutImg}
            alt="About LASHMA"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center aboutus_content-left">
          <h3 className="text-3xl font-normal text-[#f28201] mb-4">Welcome to LASHMA!</h3>

          {/* <blockquote className="italic text-gray-600 mb-6 pl-4 border-l-4 border-[#f28201]">
            <p>
              "A wise man once said that health is wealth. The productivity of a nation is driven by the health and wellbeing of its citizens."
            </p>
          </blockquote> */}

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            At the Lagos State Health Management Agency (<b>LASHMA</b>), we are dedicated to ensuring that every resident of Lagos State has access to quality and affordable healthcare services. Our mission is to improve the overall health and well-being of the community by providing comprehensive health insurance plans that cater to the diverse needs of our population.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Our vision is to make healthcare services accessible to all residents of Lagos State. To provide affordable health insurance options that ensure financial protection against medical expenses. To ensure that all healthcare services provided under our schemes meet the highest standards of quality and care.
          </p>

          <p className="text-lg font-semibold text-black">
            <b>Dr. Emmanuella Zamba</b> <br />
            PS, Lagos State Health Management Agency
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
