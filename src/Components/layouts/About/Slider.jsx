import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './About.css';
import IMG1 from '../../../assets/All/Mgt/IMG2.png';

const Slider = () => {
  const slides = [
    {
      title: "Head of Department, Finance",
      name: "Mrs. Ojo Aramide",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: IMG1,
    },
    {
      title: "Head of Department, Finance",
      name: "Mrs. Ojo Aramide",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: IMG1,
    },
    {
      title: "Head of Department, Finance",
      name: "Mrs. Ojo Aramide",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: IMG1,
    },
    {
      title: "Head of Department, Finance",
      name: "Mrs. Ojo Aramide",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: IMG1,
    },
    {
      title: "Head of Department, Finance",
      name: "Mrs. Ojo Aramide",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: IMG1,
    },
  ];

  return (
    <>    
      <div className='AboutMgt'>
        <h2 className='management_heading'>Our Management Team</h2>
        <section className='swiper'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="card aboutMgt-Card">
                  <div className="aboutMgt-card_image">
                    <img src={slide.img} alt={slide.name} />
                  </div>
                  <div className="aboutMgt-card_content">
                    <span className="aboutMgt-card_title">{slide.title}</span>
                    <span className="aboutMgt-card_name">{slide.name}</span>
                    <p className='aboutMgt-card_text'>
                      {slide.text}
                    </p>
                    <button className="aboutMgt-card_btn">View More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}

export default Slider;
