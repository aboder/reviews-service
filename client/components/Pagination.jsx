import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(newReviewGroup) {
    const { updateReviews, numOfReviews, reviewGroup } = this.props;
    const lastReviewGroup = numOfReviews % 7 === 0 ? (numOfReviews / 7) - 1 : Math.floor(numOfReviews / 7);
    const newReviewGroupIsWithinBounds = newReviewGroup <= lastReviewGroup && newReviewGroup >= 0;
    if (newReviewGroupIsWithinBounds) {
      updateReviews(newReviewGroup);
      const topOfReviewDiv = document.getElementById('reviewsComponent-reviews').offsetTop - 10;
      window.scrollTo({
        top: topOfReviewDiv,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { reviewGroup, numOfReviews } = this.props;
    const lastReviewGroup = numOfReviews % 7 === 0 ? (numOfReviews / 7) - 1 : Math.floor(numOfReviews / 7);
    const previousButtonText = reviewGroup !== 0 ? '<' : 1;
    const nextButtonText = reviewGroup !== lastReviewGroup ? '>' : lastReviewGroup + 1;
    return (
      <div id="reviewsComponent-pagination">
        <button id='prev' onClick={()=>this.handleClick(reviewGroup-1)}>{previousButtonText}</button>
        <button id='firstButton' onClick={()=>this.handleClick(0)}>1</button>
        {'...'}
        <button id='lastButton' onClick={()=>this.handleClick(lastReviewGroup)}>{lastReviewGroup + 1}</button>
        <button id='next' onClick={()=>this.handleClick(reviewGroup+1)}>{nextButtonText}</button>
      </div>
    );
  }
}

export default Pagination;
