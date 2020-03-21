import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import RatingsList from './RatingsList';
import ReviewsList from './ReviewsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: {},
      reviews: [],
      modalView: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.increaseVisibleReviews = this.increaseVisibleReviews.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/reviews/0/');
      this.setState(res.data);
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
      this.setState({
        reviewGroup: updatedReviewGroup,
        reviews: reviews.concat(additionalReviews.data.reviews),
      });
    } catch (error) { console.log(error); }
  }

  render() {
    const { rating, reviews } = this.state;
    return (
      <div id='reviewsComponent'>
        <Header rating={rating.overall} />
        <RatingsList rating={rating} />
        <ReviewsList reviews={reviews} handleScroll={this.handleScroll} />
      </div>
    );
  }
}

export default App;
