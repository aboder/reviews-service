import React from 'react';
import RatingsListItem from './RatingsListItem';

const RatingsList = (props) => {
  const { rating } = props;
  return (
    <div id="reviewsComponent-ratings">
      {Object.keys(rating).map((ratingType, index) => {
        if (ratingType !== 'overall') {
          return <RatingsListItem key={ratingType + index} ratingType={ratingType} ratingValue={rating[ratingType]} />;
        }
      })}
    </div>
  );
};

export default RatingsList;
