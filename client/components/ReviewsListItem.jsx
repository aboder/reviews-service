import React from 'react';

const ReviewsListItem = (props) => {
  const { review } = props;
  return (
    <div id='review'>
      {review.author}
      <br />
      {review.authorsAvatar}
      <br />
      {review.createdAt}
      <br />
      {review.text}
    </div>
  );
};

export default ReviewsListItem;
