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
      reviewGroup: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.increaseVisibleReviews = this.increaseVisibleReviews.bind(this);
  }

  componentDidMount() {
    axios.get('/api/reviews/0/')
      .then((res) => this.setState(res.data))
      .catch(console.log);
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
