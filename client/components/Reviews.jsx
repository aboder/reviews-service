import React, { Component } from 'react';
import axios from 'axios';

import ReviewsHeader from './ReviewsHeader.jsx'

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: {},
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get('/api/reviews/0')
      .then((res) => this.setState(res.data))
      .catch(console.log);
  }

  render() {
    const { rating } = this.state;
    return (
      <ReviewsHeader rating={rating.overall} />
    );
  }
}
export default Reviews;
