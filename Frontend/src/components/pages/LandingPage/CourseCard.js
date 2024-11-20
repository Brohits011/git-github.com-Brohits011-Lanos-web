import React from 'react';
import './CourseCard.css';

function CourseCard({ image, title, instructor, price, discount, rating }) {
  return (
    <div className="course-card">
        <div className='CourseCardMain'>
      <img src={image} alt={title} className="course-image" />
      <div className='cardLowerPt'>
      <h2>{title}</h2>
      <p className='instructor'>{instructor}</p>
      <div className="rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)} {}
      </div>
      <div className='PriDis'>
      <p className='price'>{price}</p>
      <p className="discount">{discount}</p>
      </div>
      </div>
      </div>
      <button className="buy-now">Buy Now</button>
    </div>
  );
}

export default CourseCard;