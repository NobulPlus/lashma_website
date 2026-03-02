import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../../assets/All/import/Partner/bono.png';
import img2 from '../../../assets/All/import/Partner/arfh.png';
import img3 from '../../../assets/All/import/Partner/6334.png';
import img4 from '../../../assets/All/import/Partner/ccsi.png';
import img5 from '../../../assets/All/import/Partner/civic.png';
import img6 from '../../../assets/All/import/Partner/dfaf.png';
import img7 from '../../../assets/All/import/Partner/firstbank1.png';
import img8 from '../../../assets/All/import/Partner/global_fund.png';
import img9 from '../../../assets/All/import/Partner/HP.png';
import img10 from '../../../assets/All/import/Partner/isf.png';
import img11 from '../../../assets/All/import/Partner/lstef.png';
import img12 from '../../../assets/All/import/Partner/mint.png';
import img13 from '../../../assets/All/import/Partner/senator.png';
import img14 from '../../../assets/All/import/Partner/sterling3.png';
import img15 from '../../../assets/All/import/Partner/swipin.png';
import img16 from '../../../assets/All/import/Partner/unicef.png';
import img17 from '../../../assets/All/import/Partner/USAID.png';
import img18 from '../../../assets/All/import/Partner/wema.png';

const partners = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

const Partner = () => {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">Trusted By</span>
          <h2 className="section-heading">Our Partners</h2>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <Marquee pauseOnHover speed={40} gradient={false}>
            {partners.map((img, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center"
                style={{ minWidth: '120px' }}
              >
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partner;
