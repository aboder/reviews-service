import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header.jsx';
import RatingsList from './RatingsList.jsx';

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
      <div>
        <Header rating={rating.overall} />
        <RatingsList rating={rating} />
      </div>
    );
  }
}
export default Reviews;
