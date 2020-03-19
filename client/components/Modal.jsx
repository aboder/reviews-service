import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import RatingsList from './RatingsList';
import ReviewsList from './ReviewsList';
import ModalButton from './ModalButton';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewGroup: 0,
    };
    this.increaseVisibleReviews = this.increaseVisibleReviews.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/reviews/0/');
      this.setState({
        reviews: res.data.reviews,
      });
    } catch (error) { console.log(error); }
  }

  handleScroll(e) {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.increaseVisibleReviews();
    }
  }

  async increaseVisibleReviews() {
    try {
      const { reviewGroup, reviews } = this.state;
      const updatedReviewGroup = reviewGroup + 1;
      const additionalReviews = await axios.get(`/api/reviews/0/?reviewgroup=${updatedReviewGroup}`);
      let updatedReviews = reviews;
      updatedReviews = updatedReviews.concat(additionalReviews.data.reviews);
      this.setState({
        reviews: updatedReviews,
        reviewGroup: updatedReviewGroup,
      });
    } catch (error) { console.log(error); }
  }

  render() {
    const { mainState, switchModal } = this.props;
    const { modalView, rating } = mainState;
    const { reviews } = this.state;
    const modalButtonText = 'X';
    if (modalView === false) {
      return null;
    }
    return (
      <div id="reviewsComponent-modal">
        <div id="reviewsComponent-modal-main">
          <ModalButton switchModal={switchModal} text={modalButtonText} />
          <Header rating={rating.overall} numOfReviews={reviews.length} />
          <RatingsList rating={rating} />
          <div id="reviewsScroller" onScroll={this.handleScroll}>
            <ReviewsList reviews={reviews} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
