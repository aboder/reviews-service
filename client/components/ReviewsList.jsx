import React from 'react';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = (props) => {
  const { reviews, handleScroll } = props;
  return (
    <div id="reviewsComponent-reviews" onScroll={handleScroll}>
      {reviews.map((review, index) => (
        <ReviewsListItem key={review.author + index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
