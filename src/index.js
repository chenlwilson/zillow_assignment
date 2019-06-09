import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <div>Hello World!</div>
    <img src='icon.png'></img>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)