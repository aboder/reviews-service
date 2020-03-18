import React from 'react';

const RatingsListItem = (props) => {
  const { ratingType, ratingValue } = props;
  return (
    <li>{ratingType}: {ratingValue}</li>
  );
};

export default RatingsListItem;
