import React from 'react'
import './About.css'
import AboutImg from '../../../assets/All/import/AboutImg.png'

const AboutUs = () => {
  return (
    <>
      <div className="aboutus_container">
        <div className="aboutus_content">
            <div className="aboutus_content-right">
                <img src={AboutImg} alt="" />
            </div>
            <div className="aboutus_content-left">
                <h3>Welcome to LASHMA!</h3>

                <blockquote>
                    <p>
                        "A wise man once said that health is wealth. The productivity of a nation is driven by the health and wellbeing of its citizens."
                    </p>
                </blockquote>

                <p>
                    At the Lagos State Health Management Agency (<b>LASHMA</b>), we are dedicated to ensuring that every resident of Lagos State has access to quality and affordable healthcare services. Our mission is to improve the overall health and well-being of the community by providing comprehensive health insurance plans that cater to the diverse needs of our population.
                </p>

                <p>
                    Our vision is to make healthcare services accessible to all residents of Lagos State. To provide affordable health insurance options that ensure financial protection against medical expenses. To ensure that all healthcare services provided under our schemes meet the highest standards of quality and care.
                </p>
                <p>
                    <b>Dr. Emmanuella Zamba</b> <br/>
                    PS, Lagos State Health Management Agency
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
