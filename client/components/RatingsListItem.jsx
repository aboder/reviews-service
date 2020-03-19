import React from 'react';

const RatingsListItem = (props) => {
  const { ratingType, ratingValue } = props;
  return (
    <div id='rating'>{ratingType}: {ratingValue}</div>
  );
};

export default RatingsListItem;
