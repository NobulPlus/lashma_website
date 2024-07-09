import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IMG1 from '../../../assets/All/Mgt/IMG2.png';
import IMG2 from '../../../assets/All/Mgt/img9.png';
import AboutImg from '../../../assets/All/Mgt/Potrait.png';

const Slider = () => {
  const slides = [
    {
      title: "Permanent Secretary",
      name: "Dr. Emmanuella Zamba",
      img: AboutImg,
    },
    {
      title: "Team Lead, EKOSHA",
      name: "Mrs. Tawa Taiwo",
      img: IMG2,
    },
    {
      title: "Head, Finance",
      name: "Mrs. Ojo Aramide",
      img: IMG1,
    },
    {
      title: "Head, ICT",
      name: "Mr. Oladejo Sefiu",
    },
    {
      title: "Head, Account",
      name: "Mr. Abalagada Wahaab",
    },
    {
      title: "Head, Admin & Human Resource",
      name: "Mrs. Funmi Alonge",
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <section className="swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
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
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-32 h-32 mx-auto overflow-hidden rounded-full">
                  {slide.img && <img src={slide.img} alt={slide.name} className="object-cover w-full h-full" />}
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{slide.title}</h3>
                  <p className="mt-2 text-gray-600 text-md justify-center flex">{slide.name}</p>
                  <button className="w-full py-2 mt-4 text-white transition duration-300 bg-orange-600 rounded-md hover:bg-orange-600">
                    View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Slider;
