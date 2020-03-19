import React from 'react';
import RatingBar from './RatingBar';

const RatingsListItem = (props) => {
  const { ratingType, ratingValue } = props;
  return (
    <div className="reviewsComponent-rating">
      {ratingType}
      <RatingBar rating={ratingValue} />
      {ratingValue}
    </div>
  );
};

export default RatingsListItem;
