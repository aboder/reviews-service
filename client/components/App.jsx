import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }
    componentDidMount() {
        axios.get('/api/reviews/:roomid/')
            .then(console.log)
            .catch(console.log)
    }

    render() {
        return(
            <div id='reviews'>
                <div id='reviewsHeader'>
                    <h1>Reviews</h1>
                    <img id='ratingStar' src="https://www.pikpng.com/pngl/m/30-301248_file-gold-star-svg-yellow-star-transparent-background.png" alt="File - Gold Star - Svg - Yellow Star Transparent Background Clipart@pikpng.com"/>
                    <h3>4.92</h3> 
                    <h3>273 reviews</h3>
                    <input placeholder='Search reviews'></input>
                </div>
                <div id='reviewsRatings'>
                    <h3>Some Ratings</h3>
                </div>
                <div id='reviewsMain'>
                    <h3>Some reviews</h3>
                </div>  
                <div id='reviewsNavigator'>
                    <h3>Pagination</h3>
                </div>
            </div>
        )
    }
}
export default App;