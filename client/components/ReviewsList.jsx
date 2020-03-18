import React from 'react';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = (props) => {
  const { reviews } = props;
  return (
    <ul>
      {reviews.map((review, index) => (
        <ReviewsListItem key={review.author + index} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;
