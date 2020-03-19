import React from 'react';

const RatingBar = (props) => {
  return (
    <div className="ratingBar">
      <div className="ratingBarValue" style={{width: `${20 * props.rating}%`}}></div>
    </div>
  );
};

export default RatingBar;
