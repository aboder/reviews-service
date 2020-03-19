import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: false,
      next: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.determineButtonVisiblility = this.determineButtonVisiblility.bind(this);
  }

  componentDidMount() {
    document.getElementById('prev').style.visibility = 'hidden';
  }

  componentDidUpdate(prevProps, prevState) {
    const { previous, next } = this.state;
    if (prevState.previous !== previous || prevState.next !== next) {
      this.determineButtonVisiblility();
    }
  }

  determineButtonVisiblility() {
    const { previous, next } = this.state;
    if (previous === false) {
      document.getElementById('prev').style.visibility = 'hidden';
    } else if (previous === true) {
      document.getElementById('prev').style.visibility = 'visible';
    }

    if (next === false) {
      document.getElementById('next').style.visibility = 'hidden';
    } else if (next === true) {
      document.getElementById('next').style.visibility = 'visible';
    }
  }

  handleClick(direction) {
    const { reviewGroup, updateReviewGroup } = this.props;
    const newReviewGroup = reviewGroup + direction;
    const newReviewGroupIsWithinBounds = newReviewGroup <= 9 && newReviewGroup >= 0;
    if (newReviewGroupIsWithinBounds) {
      updateReviewGroup(newReviewGroup);
      this.handleStateChange(newReviewGroup);
    }
  }

  handleStateChange(newReviewGroup) {
    const { previous, next } = this.state;
    if ((newReviewGroup > 0 && newReviewGroup < 9) && (previous === false || next === false)) {
      this.setState({
        previous: true,
        next: true,
      });
    } else if (newReviewGroup === 0 && previous === true) {
      this.setState({
        previous: false,
      });
    } else if (newReviewGroup === 9 && next === true) {
      this.setState({
        next: false,
      });
    }
  }

  render() {
    const previousButton = <button id='prev' onClick={()=>this.handleClick(-1)}>Prev</button>
    const nextButton = <button id='next' onClick={()=>this.handleClick(1)}>Next</button>
    const currentGroup = this.props.reviewGroup + 1;
    return (
      <div>
        {previousButton}
        {currentGroup}
        {nextButton}
      </div>
    );
  }
}

export default Pagination;
