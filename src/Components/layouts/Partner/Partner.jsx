import React from 'react'
import './Partner.css'
import Marquee from 'react-fast-marquee'
import img1 from '../../../assets/All/import/Partner/bono.png'
import img2 from '../../../assets/All/import/Partner/arfh.png'
import img3 from '../../../assets/All/import/Partner/6334.png'
import img4 from '../../../assets/All/import/Partner/ccsi.png'
import img5 from '../../../assets/All/import/Partner/civic.png'
import img6 from '../../../assets/All/import/Partner/dfaf.png'
import img7 from '../../../assets/All/import/Partner/firstbank1.png'
import img8 from '../../../assets/All/import/Partner/global_fund.png'
import img9 from '../../../assets/All/import/Partner/HP.png'
import img10 from '../../../assets/All/import/Partner/isf.png'
import img11 from '../../../assets/All/import/Partner/lstef.png'
import img12 from '../../../assets/All/import/Partner/mint.png'
import img13 from '../../../assets/All/import/Partner/senator.png'
import img14 from '../../../assets/All/import/Partner/sterling3.png'
import img15 from '../../../assets/All/import/Partner/swipin.png'
import img16 from '../../../assets/All/import/Partner/unicef.png'
import img17 from '../../../assets/All/import/Partner/USAID.png'
import img18 from '../../../assets/All/import/Partner/wema.png'

const Partner = () => {
  return (
    <>
      <div className="partner">        
        <Marquee pauseOnHover speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img11} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img12} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img13} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img14} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img15} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img16} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img17} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img18} alt="" />
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default Partner
