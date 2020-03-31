import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newReviewGroup) {
    const { updateReviews, numOfReviews, visibleReviews } = this.props;
    const lastReviewGroup = numOfReviews % visibleReviews === 0 ? (numOfReviews / visibleReviews) - 1 : Math.floor(numOfReviews / visibleReviews);
    const newReviewGroupIsWithinBounds = newReviewGroup <= lastReviewGroup && newReviewGroup >= 0;
    if (newReviewGroupIsWithinBounds) {
      updateReviews(newReviewGroup);
      const topOfReviewsListDiv = document.getElementById('reviewsComponent-reviews').offsetTop - 10;
      window.scrollTo({
        top: topOfReviewsListDiv,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { reviewGroup, numOfReviews, visibleReviews } = this.props;
    const lastReviewGroup = numOfReviews % visibleReviews === 0 ? (numOfReviews / visibleReviews) - 1 : Math.floor(numOfReviews / visibleReviews);
    const previousButtonText = reviewGroup !== 0 ? '< ' : 1;
    const nextButtonText = reviewGroup !== lastReviewGroup ? ' >' : lastReviewGroup + 1;
    if (reviewGroup === 0) {
      return (
        <div id="reviewsComponent-pagination">
          <div id='prev' className={'pagination-highlighted-element currentPage'} onClick={()=>this.handleClick(reviewGroup-1)}>{previousButtonText}</div>
          <div className='floats'>...</div>
          <div id='lastButton' onClick={()=>this.handleClick(lastReviewGroup)}>{lastReviewGroup + 1}</div>
          <div id='next' className='pagination-highlighted-element'  onClick={()=>this.handleClick(reviewGroup+1)}>{nextButtonText}</div>
        </div>
      );
    } else if (reviewGroup === lastReviewGroup) {
      return (
        <div id="reviewsComponent-pagination">
          <div id='prev' className='pagination-highlighted-element'  onClick={()=>this.handleClick(reviewGroup-1)}>{previousButtonText}</div>
          <div id='firstButton' onClick={()=>this.handleClick(0)}>1</div>
          <div className='floats'>...</div>
          <div id='next' className={'pagination-highlighted-element currentPage'}  onClick={()=>this.handleClick(reviewGroup+1)}>{nextButtonText}</div>
        </div>
      )
    } else {
      return (
        <div id="reviewsComponent-pagination">
          <div id='prev' className='pagination-highlighted-element'  onClick={()=>this.handleClick(reviewGroup-1)}>{previousButtonText}</div>
          <div id='firstButton' onClick={()=>this.handleClick(0)}>1</div>
          <div className='floats'>...</div>
          <div className={'pagination-highlighted-element currentPage'} >{reviewGroup + 1}</div>
          <div className='floats'>...</div>
          <div id='lastButton' onClick={()=>this.handleClick(lastReviewGroup)}>{lastReviewGroup + 1}</div>
          <div id='next' className='pagination-highlighted-element'  onClick={()=>this.handleClick(reviewGroup+1)}>{nextButtonText}</div>
        </div>
      );
    }
  }
}

export default Pagination;
