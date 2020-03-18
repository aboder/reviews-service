import React from 'react';

const Header = (props) => {
  const { rating } = props;

  return (
    <div>
      <h1>STAR {rating}</h1>
      <h1>*50* reviews</h1>
    </div>
  );
};

export default Header;
