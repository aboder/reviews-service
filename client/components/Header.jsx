import React from 'react';

const Header = (props) => {
  const { rating, numOfReviews } = props;

  return (
    <div className='reviewsComponent-header'>
      <h1>* {rating} ({numOfReviews} reviews)</h1>
    </div>
  );
};

export default Header;
