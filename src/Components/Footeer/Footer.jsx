import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Footer.css'
import { Link } from 'react-router-dom'
import standard from '../../assets/doc/individualStandard.pdf';
import diaspora from '../../assets/doc/diaspora.pdf';
import telemedicine from '../../assets/doc/telemedicine.pdf';
import seniorsPlan from '../../assets/doc/seniorsPlan.pdf';

const Footer = () => {
    const form = useRef();

  const sendDetails = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wokgw6g', 'template_bdfvaxi', form.current, {
        publicKey: 'nJb5cZW-Jm_wTpEho',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent successfully");
          // Show success message and confirm reload
          if (confirm("Your email has been sent successfully! Press OK to continue?"))
            {
                window.location.reload();
            }
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("There was an error sending your email. Please try again later.");
        },
      );
  };
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_padding">
            <div className="footer_links">
                <div className="sb_div1">
                    <h4>Signup for weekly newsletter</h4>
                    <div className="input-group">
                        <form ref={form} onSubmit={sendDetails} className='form-group'>
                            <input type="email" name='user_email' placeholder='Email' className='email-input'/>
                            <input type="text"  placeholder='First Name' name='user_name' className='name-input' />
                            <button className='form-button'>Subscribe</button>
                            {/* <input type="submit" value="Subscribe" /> */}
                        </form>
                    </div>
                </div>
                <div className="sb_div2">
                    <div className="sb_div2-list">
                        <h4>Give us a Call</h4>
                        <ul>
                            <li><i class="fa-solid fa-phone"></i> <b>0800-ILERAEKO</b> (0800-4537-2356) - Toll Free Line</li>
                            <li><i class="fa-solid fa-phone"></i> <b>0800-ASKLASHMA</b> (0800-4537-2356) - Toll Free Line</li>
                            <li><i class="fa-solid fa-phone"></i> <b>0700-ILERAEKO</b> (0700-4537-2356) - Sales Hotline</li>
                        </ul>
                    </div>
                    <div className="sb_div2-links">
                        <p>
                            Follow Us:
                            <Link to='https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL'><i class="fa-brands fa-facebook"></i></Link>
                            <Link to="https://wa.me/2347045358275"><i class="fa-brands fa-whatsapp"></i></Link>
                            <Link to="https://www.instagram.com/lashma__?igsh=MTdlMm5zYWVqNzN5MA=="><i class="fa-brands fa-instagram"></i></Link>
                            <Link to='https://www.linkedin.com/company/lagos-state-health-management-agency/'><i class="fa-brands fa-linkedin"></i></Link>
                        </p>
                    </div>
                </div>
                <div className="sb_div3">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Help Desk</Link></li>
                        <li><Link to='#'>FAQ</Link></li>
                    </ul>
                </div>
                <div className="sb_div4">
                    <h4>Health Insurance</h4>
                    <ul>
                        <li><a href={standard}>Standard Plan</a></li>
                        <li><a href={seniorsPlan}>Senior Plan</a></li>
                        <li><a href={diaspora}>Diaspora Plan</a></li>
                        <li><a href={telemedicine}>Telemedicine Plan</a></li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Lagos State Health Management Agency. All right reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <Link><p>Privacy</p></Link>
                    <Link><p>Security</p></Link>
                    <Link><p>Terms & Agreement</p></Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
