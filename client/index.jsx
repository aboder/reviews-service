import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const params = new URLSearchParams(window.location.search);
let roomId = params.get('roomId');
if (roomId === null) {
  roomId = 0;
}
ReactDOM.render(<App roomId={roomId} />, document.getElementById('reviews'));
