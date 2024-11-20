import React from 'react';
import NavBar from './Navbar';
import Herosection from './Herosection';
import CourseCard from './CourseCard';
import PercentageSec from './percentageSec';
import Growsection from './Growsection';
import ContactUs from './ContactUs';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
        <NavBar/>
        <Herosection/>
        <CourseCard/>
        <PercentageSec/>
        <Growsection/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default LandingPage