import React from 'react';

const RatingBar = (props) => (
  <div className="reviewsComponent-rating-bar">
    <div className="reviewsComponent-rating-barValue" style={{ width: `${20 * props.rating}%` }} />
  </div>
);

export default RatingBar;
