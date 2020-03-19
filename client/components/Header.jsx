import React from 'react';

const Header = (props) => {
  const { rating, numOfReviews } = props;

  return (
    <div id='header'>
      *STAR ICON* {rating} ({numOfReviews} reviews)
    </div>
  );
};

export default Header;
