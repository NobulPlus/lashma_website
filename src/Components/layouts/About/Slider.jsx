import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IMG1 from '../../../assets/All/Mgt/IMG2.png';
import IMG2 from '../../../assets/All/Mgt/img9.png';
import PSImg from '../../../assets/All/Mgt/ps.png';
import AdetoroImg from '../../../assets/All/Mgt/adetoro.jpg';
import UcheImg from '../../../assets/All/Mgt/uche.jpeg';

const Slider = () => {
  const slides = [
    {
      title: "Permanent Secretary",
      name: "Dr. Emmanuella Zamba",
      img: PSImg,
      linkedin: "https://www.linkedin.com/in/dr-emmanuella-zamba-19aaa433/",
    },
    {
      title: "Head, Corporate Strategy (HCS)",
      name: "Lanre Green",
      img: null,
      linkedin: "https://www.linkedin.com/in/lanre-green-29a93983/",
    },
    {
      title: "Head, Policy, Regulation & Member Engagement (HPRME)",
      name: "Adetoro Tayo Adetoro",
      img: AdetoroImg,
      linkedin: "https://www.linkedin.com/in/adetoro-tayo-adetoro-7196ab32/",
    },
    {
      title: "Head, Inspectorate & Logistics Management (HILM)",
      name: "Olugbenga Fadipe",
      img: null,
      linkedin: "https://www.linkedin.com/in/olugbenga-fadipe-52988b1b0/",
    },
    {
      title: "Head, Sales & Agent Coordination (HSAC)",
      name: "Uche Igweonyia",
      img: UcheImg,
      linkedin: "https://www.linkedin.com/in/uche-igweonyia-377823182/",
    },
    {
      title: "Head, Finance",
      name: "Mrs. Ojo Aramide",
      img: IMG1,
      linkedin: null,
    },
    {
      title: "Head, ICT",
      name: "Mr. Oladejo Sefiu",
      img: null,
      linkedin: null,
    },
    {
      title: "Director, Account",
      name: "Mr. Abalagada Wahaab",
      img: null,
      linkedin: null,
    },
    {
      title: "Director, Admin & Human Resource",
      name: "Mrs. Olufunke Longe",
      img: null,
      linkedin: null,
    },
    {
      title: "Team Lead, EKOSHA",
      name: "Mrs. Tawa Taiwo",
      img: IMG2,
      linkedin: null,
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
                  <p className="flex justify-center mt-2 text-gray-600 text-md">{slide.name}</p>
                  {slide.linkedin ? (
                    <a
                      href={slide.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2 mt-4 text-white text-center transition duration-300 bg-orange-600 rounded-md hover:bg-orange-700"
                    >
                      View Profile
                    </a>
                  ) : (
                    <button className="w-full py-2 mt-4 text-white transition duration-300 bg-orange-600 rounded-md hover:bg-orange-700">
                      View More
                    </button>
                  )}
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
