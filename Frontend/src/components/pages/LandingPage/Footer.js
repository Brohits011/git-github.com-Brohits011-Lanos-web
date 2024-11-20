import React from 'react';
import './Footer.css'; // Import CSS file for styling
import logo from'../../../assets/Lanos LOGO.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Logo and Courses Section */}
        <div className="footer-section">
          <img src={logo} alt='logo' className='footer-logo'/>
          <h3>Our Courses</h3>
          <ul>
            <li>C++ Complete Bundle</li>
            <li>Python</li>
            <li>Full stack web development</li>
            <li>Mobile app development</li>
          </ul>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
            
          <ul>
            <li>Get the app</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Help and Support</li>
            <li>Careers</li>
          </ul>
          
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie Settings</li>
            <li>Site map</li>
            <li>Teach on Lanos</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="footer-section contact-form">
          <form>
            <input type="text" placeholder="Name" className='footer-input'/>
            <input type="email" placeholder="Email" className='footer-input' />
            <textarea placeholder="Query" className='text-area'></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
