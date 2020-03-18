import React from 'react';

const ReviewsListItem = (props) => {
  const { review } = props;
  return (
    <li>
      {review.author}
      <br />
      {review.authorsAvatar}
      <br />
      {review.createdAt}
      <br />
      {review.text}
    </li>
  );
};

export default ReviewsListItem;
