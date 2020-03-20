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
    };
    this.updateReviewGroup = this.updateReviewGroup.bind(this);
  }

  componentDidMount() {
    axios.get('/api/reviews/0/')
      .then((res) => this.setState(res.data))
      .catch(console.log);
  }

  componentDidUpdate(prevProps, prevState) {
    const { reviewGroup } = this.state;
    if (prevState.reviewGroup !== reviewGroup) {
      axios.get(`/api/reviews/0/?reviewgroup=${reviewGroup}`)
        .then((res) => this.setState({
          reviews: res.data.reviews,
        }))
        .catch(console.log);
    }
  }


  updateReviewGroup(newReviewGroup) {
    this.setState({
      reviewGroup: newReviewGroup,
    });
  }

  render() {
    const { rating, reviews, reviewGroup } = this.state;
    return (
      <div id='reviewsComponent'>
        <Header rating={rating.overall} />
        <RatingsList rating={rating} />
        <ReviewsList reviews={reviews} />
        <Pagination reviewGroup={reviewGroup} updateReviewGroup={this.updateReviewGroup} />
      </div>
    );
  }
}
export default App;
