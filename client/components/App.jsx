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
    };
  }

  componentDidMount() {
    axios.get('/api/reviews/0')
      .then((res) => this.setState(res.data))
      .catch(console.log);
  }

  render() {
    const { rating, reviews } = this.state;
    return (
      <div>
        <Header rating={rating.overall} />
        <RatingsList rating={rating} />
        <ReviewsList reviews={reviews} />
      </div>
    );
  }
}
export default App;
