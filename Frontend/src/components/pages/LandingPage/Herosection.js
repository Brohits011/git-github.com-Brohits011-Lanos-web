import React from 'react'
import './Herosection.css';
import design from "../../../assets/design.png";
const Herosection = () => {
  return (
    <div className='herosection'>
        <div className='heroLeftPt'>
            <h1>Browse from our wide variety of Courses</h1>
            <p>Select from our distinguished array of courses,
            propelling yourself one step closer to success under
            the guidance of our highly skilled educators,
            poised to instruct you seamlessly on the move. </p>
            <div className='herosectionBtn'>
            <button className='heroBtn1'>View Courses</button>
            <button className='heroBtn2'>Call Now</button>
        </div>
        </div>
        <img src={design}/>
        
        

    </div>
  )
}

export default Herosection