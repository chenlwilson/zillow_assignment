import React from 'react';

const Photo = ({ index, total, caption }) => (
  <div className="mySlides fade">
    <div class="numbertext">{index}{' '}/{' '}{total}</div>
    <img src={`images/${index}.jpg`} alt={caption} />
    <div className="text">{caption}</div>
  </div>
);

export default Photo;
