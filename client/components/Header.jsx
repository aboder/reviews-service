import React from 'react';

const Header = (props) => {
  const { rating, numOfReviews } = props;

  return (
    <div className='reviewsComponent-header'>
      <p>*STAR ICON* {rating} ({numOfReviews} reviews)</p>
    </div>
  );
};

export default Header;
