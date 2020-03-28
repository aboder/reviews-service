import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import RatingsList from './RatingsList';
import ReviewsList from './ReviewsList';
import Pagination from './Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: {},
      reviews: [],
      reviewGroup: 0,
      numOfReviews: 0,
      visibleReviews: 0,
    };
    this.updateReviews = this.updateReviews.bind(this);
  }

  async componentDidMount() {
    const { roomId } = this.props;
    try {
      const res = await axios.get(`/api/reviews/${roomId}/`, {
        params: {
          reviewgroup: 'default',
        },
      });
      this.setState(res.data);
    } catch (error) { console.log(error); }
  }

  async updateReviews(newReviewGroup) {
    const { roomId } = this.props;
    try {
      const additionalReviews = await axios.get(`/api/reviews/${roomId}/?reviewgroup=${newReviewGroup}`);
      this.setState({
        reviewGroup: newReviewGroup,
        reviews: additionalReviews.data,
      });
    } catch (error) { console.log(error); }
  }

  render() {
    const { rating, reviews, numOfReviews, reviewGroup, visibleReviews } = this.state;
    return (
      <div id='reviewsComponent'>
        <Header rating={rating.overall} numOfReviews={numOfReviews} />
        <RatingsList rating={rating} />
        <ReviewsList reviews={reviews} />
        <Pagination reviewGroup={reviewGroup} numOfReviews={numOfReviews} updateReviews={this.updateReviews} visibleReviews={visibleReviews} />
      </div>
    );
  }
}

export default App;
