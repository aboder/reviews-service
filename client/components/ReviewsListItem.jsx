import React from 'react';
import convertDate from './util.js';

const ReviewsListItem = (props) => {
  const { review } = props;
  const convertedDate = convertDate(review.createdAt);
  return (
    <div className="reviewsComponent-review">
      <div className="reviewsComponent-review-avatar">
        <img src={review.authorsAvatar}></img>
      </div>
      <div className="reviewsComponent-review-info">
        <p>{review.author}</p>
        <p>{convertedDate}</p>
      </div>
      <div className="reviewsComponent-review-text">
        {review.text}
      </div>
    </div>
  );
};

export default ReviewsListItem;
