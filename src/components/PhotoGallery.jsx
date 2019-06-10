import React from 'react';
import Photo from './Photo.jsx';

const PhotoGallery = (props) => {
  let photoArray = [];
  for (var i = 1; i <= props.slideNum; i++) {
    photoArray.push({
      index: i,
      caption: `Photo ${i} Caption Text`
    });
  }

  return (
    <div className="slideshow-container">
      {photoArray.map((photo) =>
        <Photo
        key={`${photo.caption}-${photo.index}`}
        index={photo.index}
        caption={photo.caption}
        total={props.slideNum} />
      )}
    </div>
  )
}

export default PhotoGallery;