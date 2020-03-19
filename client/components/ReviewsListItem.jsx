import React from 'react';

const ReviewsListItem = (props) => {
  const { review } = props;
  return (
    <div className="reviewsComponent-review">
      <div className="reviewsComponent-review-avatar">
        <img src={review.authorsAvatar}></img>
      </div>
      <div className="reviewsComponent-review-info">
        <p>{review.author}</p>
        <p>{review.createdAt}</p>
      </div>
      <div className="reviewsComponent-review-text">
        {review.text}
      </div>
    </div>
  );
};

export default ReviewsListItem;
