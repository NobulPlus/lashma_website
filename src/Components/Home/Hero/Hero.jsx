import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./hero.css";
import sliderImg1 from "../../../assets/images/Pic3.webp";
import sliderImg2 from "../../../assets/images/sliderImg2.jpg";
import sliderImg3 from "../../../assets/images/quality.jpg";
import sliderImg4 from "../../../assets/images/vbooth.jpg";
import sliderImg5 from "../../../assets/images/tiwa.jpg";
import sliderImg6 from "../../../assets/images/door.jpg";

const slides = [
  {
    image: sliderImg1,
    label: "ILERA EKO SCHEME",
    title: "Affordable Healthcare\nat Your Fingertips!",
    subtitle: "Access top hospitals, flexible health plans & 24/7 support for every Lagos resident.",
    btnText: "Enroll Today",
    btnLink: "https://lashma.myclinify.com/register",
  },
  {
    image: sliderImg2,
    label: "UNIVERSAL COVERAGE",
    title: "Healthcare for Every\nResident of Lagos",
    subtitle: "Access top hospitals & clinics with flexible payment plans and reliable support.",
    btnText: "Register Now",
    btnLink: "https://lashma.myclinify.com/register",
  },
  {
    image: sliderImg3,
    label: "QUALITY ASSURANCE",
    title: "Ensuring Compliance.\nProtecting Lives.",
    subtitle: "Upholding healthcare standards through effective regulation of the LSHS.",
    btnText: "Learn More",
    btnLink: "http://portal.lashmaregulations.com.ng/",
  },
  {
    image: sliderImg5,
    label: "EASY PAYMENTS",
    title: "The Smarter Way\nto Pay for Healthcare",
    subtitle: "Seamless, secure & hassle-free payment experience.",
    btnText: "Pay Now",
    btnLink: "https://lashma.myclinify.com/paypolicy",
  },
  {
    image: sliderImg4,
    label: "TELEMEDICINE",
    title: "Virtual Consultation\nMade Easy",
    subtitle: "E-prescriptions, medical advice & 24/7 virtual doctor consultations.",
    btnText: "Talk to a Doctor",
    btnLink: "tel:080000356828",
  },
  {
    image: sliderImg6,
    label: "GET COVERED",
    title: "Your Health,\nOur Priority",
    subtitle: "Affordable health insurance with a wide network and easy enrollment.",
    btnText: "Explore Plans",
    btnLink: "/plan",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} hero-bullet"></span>`;
          },
        }}
        loop
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          if (swiper.realIndex === 2) {
            swiper.params.autoplay.delay = 30000;
          } else {
            swiper.params.autoplay.delay = 6000;
          }
          swiper.autoplay.start();
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Gradient Overlay */}
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={`slide-content-${index}`}
                    className="hero-text-group"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.15 } },
                      exit: {},
                    }}
                  >
                    <motion.span
                      className="hero-label"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
                      }}
                    >
                      {slide.label}
                    </motion.span>

                    <motion.h1
                      className="hero-title"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
                      }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="hero-subtitle"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
                      }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      className="hero-cta-group"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        exit: { opacity: 0, transition: { duration: 0.2 } },
                      }}
                    >
                      <a href={slide.btnLink} className="hero-cta-primary">
                        {slide.btnText}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
