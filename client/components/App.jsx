import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    render() {
        return(
            <h1>Howdy!</h1>
        )
    }
}
export default App;