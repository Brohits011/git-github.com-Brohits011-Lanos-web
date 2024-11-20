import React from 'react';
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="form-section">
        <h2 className="form-title">Contact US</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" placeholder="Enter your contact number" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Query</label>
            <textarea placeholder="Enter your query"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682982.144490862!2d74.42137849999999!3d23.473324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e4b5b5e6127d%3A0x15bd377b2dd35e2b!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1698145055623!5m2!1sen!2sin" 
  
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Google Map">
        </iframe>
        <div className="directions-section">
          <h3>Get Directions</h3>
          <hr class="gray-line"></hr>
          
          <div className="directions-inputs">
            <div className="form-group">
              <label>From:</label>
              <input className='text' type="text" placeholder="Enter starting location" />
            </div>
            <div className="form-group">
              <label>To:</label>
              <input className='text' type="text" value="Lanos Institute of Technologies" readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
