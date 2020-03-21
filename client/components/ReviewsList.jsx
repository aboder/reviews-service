import React from 'react';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = (props) => {
  const { reviews } = props;
  return (
    <div className='reviewsComponent-reviewsList'>
      {reviews.map((review, index) => (
        <ReviewsListItem key={review.author + index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
