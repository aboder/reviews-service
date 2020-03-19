import React, { Component } from 'react';
import Header from './Header';
import RatingsList from './RatingsList';
import ReviewsList from './ReviewsList';
import ModalButton from './ModalButton';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { modalView, rating, reviews } = mainState;
    const { visibleReviews } = this.state;
    const modalButtonText = 'X';
    if (modalView === false) {
      return null;
    }
    return (
      <div id='reviewModal' className='modal display-block'>
        <div className='modal-main'>
          <ModalButton switchModal={switchModal} text={modalButtonText} />
          <Header rating={rating.overall} numOfReviews={reviews.length} />
          <RatingsList rating={rating} />
          <ReviewsList reviews={reviews.slice(0, visibleReviews)} />
        </div>
      </div>
    );
  }
}

export default Modal;
