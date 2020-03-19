import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import RatingsList from './RatingsList';
import ReviewsList from './ReviewsList';
import Modal from './Modal';
import ModalButton from './ModalButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: {},
      reviews: [],
      modalView: false,
    };
    this.switchModal = this.switchModal.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/reviews/0/');
      this.setState(res.data);
    } catch (error) { console.log(error); }
  }

  switchModal(e) {
    const { modalView } = this.state;
    this.setState({
      modalView: !modalView,
    });
  }

  render() {
    const { rating, reviews } = this.state;
    const modalButtonText = `Show all ${reviews.length} reviews`;
    return (
      <div id="reviewsComponent">
        <Header rating={rating.overall} numOfReviews={reviews.length} />
        <RatingsList rating={rating} />
        <ReviewsList reviews={reviews} />
        <ModalButton switchModal={this.switchModal} text={modalButtonText} />
        <Modal mainState={this.state} switchModal={this.switchModal} />
      </div>
    );
  }
}

export default App;
