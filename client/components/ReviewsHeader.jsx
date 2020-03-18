import React from 'react';

const ReviewsHeader = (props) => {
  const { rating } = props;

  return (
    <div>
      <h1>*50*</h1>
      <h1>{rating}</h1>
    </div>
  );
};

export default ReviewsHeader;
