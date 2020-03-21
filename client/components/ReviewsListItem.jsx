import React from 'react';

const ReviewsListItem = (props) => {
  const { review } = props;
  return (
    <div className='reviewsComponent-review'>
      <h2>{review.author}</h2>
      {review.authorsAvatar}
      <br />
      {review.createdAt}
      <br />
      <p>{review.text}</p>
    </div>
  );
};

export default ReviewsListItem;
