import React from 'react';
import RatingBar from './RatingBar';

const RatingsListItem = (props) => {
  const { ratingType, ratingValue } = props;
  return (
    <div className="reviewsComponent-rating">
      <div className="reviewsComponent-rating-type">{ratingType}</div>
      <RatingBar rating={ratingValue} />
      <div className="reviewsComponent-rating-value">{ratingValue}</div>
    </div>
  );
};

export default RatingsListItem;
