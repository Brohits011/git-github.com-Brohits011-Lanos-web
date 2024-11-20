import React from 'react';
import Lanoslogo from '../../../assets/Lanos LOGO.png';
import { Link } from 'react-router-dom'; // No need for BrowserRouter here
import AdminLogin from './AdminLogin.js';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Lanoslogo} className='logo' alt="Lanos Logo" />
      <div className='rightPt'>
        <Link to="/">Home</Link> {/* Link for Home */}
        <Link to="/courses">Courses</Link> {/* Link for Courses */}
        <Link to="/about">About</Link> {/* Link for About */}
        
        <div className='navBtn'>
          <AdminLogin /> {/* AdminLogin component */}
          <button className='loginBtn'>Login</button>
          <button className='joinForFreeBtn'>Join for free</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
