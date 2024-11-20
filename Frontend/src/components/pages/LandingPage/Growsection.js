
import React from 'react'
import'./Growsection.css'
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
function Growsection(){
    return(
        <div className="grid-text-container">
            <div className="grid-section">
                <img src={img1} alt="Image 1" className="images"/>
                <img src={img2} alt="Image 2" className="images"/>
                <img src={img3} alt="Image 3" className="images"/>
                <img src={img4} alt="Image 4" className="images"/>

            </div>
            <div className='text-section'>
                <h2  className='title'>A Place where everyone grows together</h2>
                <p className='description'>A place where everyone grows with each other, learns every aspect of the work and be work ready.</p>

            </div>
        </div>
    );
}
export default Growsection