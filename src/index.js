import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './components/PhotoGallery.jsx';

ReactDOM.render(
  <PhotoGallery slideNum={10} />,
  document.getElementById('app'),
);
