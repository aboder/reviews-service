import React from 'react';

const Header = (props) => {
  const { rating } = props;

  return (
    <div id="reviewsComponent-header">
      <h1>Reviews</h1>
      <div id="reviewsComponent-subheader">
        <h2>* {rating}</h2>
        <h2>*50* reviews</h2>
        <input placeholder='Search reviews'/>
      </div>
    </div>
  );
};

export default Header;
