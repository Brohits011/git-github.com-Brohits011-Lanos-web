import React from 'react'
import'./percentageSec.css';
import image1 from '../../../assets/photo1.png';
import image2 from '../../../assets/photo2.png';
import image3 from '../../../assets/arrow.jpg';

const PercentageSec = () => {
  return (
    <div className='per-section'>
      
      <h1>Be with the Change</h1>
        
        <div className='secondpt'>

            <h2>What makes the difference?</h2>

              <div className='arrow-container'>

                <div className='threept'>

                  <div className='blank'></div>
                  <div className='num'><p>97%</p></div>
                </div>
                <div className='arrow-part'>
                  <image src={image3} alt="Arrow" className='arrow'/>
                  <p>Percentage of students that starts the course but doesn’t complete.</p>
                </div>
              </div>

            <div className='thirdPt'>
               <div  className='second-Per '>

                <span className='second-blank'></span>
                <span className='second-Heading'>3%</span>
                <span className='second-Pera'>Percentage of students that starts <br/>the course and completes it. </span>
               </div>
            </div>
            <div className='highlight'><p>Thats<span className='number-per'>97%</span>wastage of money and most importantly time.</p></div>
            <div className="imagesPercentageSec">
              <img src={image1} alt="Image 1" className="image"/>
              <img src={image2} alt="Image 2" className="image"/>
            </div>
            <div className='enroll-btn'> <button className="enroll-inner">Enroll Now</button></div>
          
           
          

        </div>
        
      
      
      


    </div>
  )
}

export default PercentageSec