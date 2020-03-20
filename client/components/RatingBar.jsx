import React from 'react';

const RatingBar = (props) => {
  return (
    <div className="reviewsComponent-rating-bar">
      <div className="reviewsComponent-rating-barValue" style={{width: `${20 * props.rating}%`}}></div>
    </div>
  );
};

export default RatingBar;
