import React, { Component } from 'react';
import Header from './Header';
import RatingsList from './RatingsList';
import ReviewsList from './ReviewsList';
import ModalButton from './ModalButton';

class Modal extends Component {
  constructor(props) {
    super(props);
    const { mainState } = this.props;
    this.state = {
      allReviews: mainState.reviews,
      visibleReviews: 5,
    };
  }

  increaseVisibleReviews() {
    const { visibleReviews } = this.state;
    this.setState({
      visibleReviews: visibleReviews + 5,
    });
  }

  render() {
    const { mainState, switchModal } = this.props;
    const { modalView, rating } = mainState;
    const { visibleReviews, allReviews } = this.state;
    const modalButtonText = 'X';
    if (modalView === false) {
      return null;
    }
    return (
      <div id='reviewModal'>
        <ModalButton switchModal={switchModal} text={modalButtonText} />
        <Header rating={rating.overall} />
        <RatingsList rating={rating} />
        <ReviewsList reviews={allReviews.slice(0, visibleReviews)} />
      </div>
    );
  }
};

export default Modal;
