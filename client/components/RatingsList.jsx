import React from 'react';
import RatingsListItem from './RatingsListItem';

const RatingsList = (props) => {
  const { rating } = props;
  return (
    <ul>
      {Object.keys(rating).map((ratingType, index) => (
        <RatingsListItem key={ratingType + index} ratingType={ratingType} ratingValue={rating[ratingType]} />
      ))}
    </ul>
  );
};

export default RatingsList;
