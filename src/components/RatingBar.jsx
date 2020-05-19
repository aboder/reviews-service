import React from 'react';

const RatingBar = (props) => {
  const { rating } = props;
  const barValueCss = { width: `${20 * rating}%` };
  return (
    <div className="reviewsComponent-rating-bar">
      <div className="reviewsComponent-rating-barValue" style={barValueCss} />
    </div>
  );
};

export default RatingBar;
