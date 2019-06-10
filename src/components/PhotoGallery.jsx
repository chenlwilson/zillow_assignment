import React from 'react';
import { Carousel } from 'react-bootstrap';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      photoArray: [],
      index: 0,
      direction: null,
    };
  }

  componentDidMount() {
    const { slideNum } = this.props;
    const array = [];
    for (let i = 1; i <= slideNum; i += 1) {
      array.push({
        url: `images/${i}.jpg`,
        caption: `Photo ${i} Caption Text`,
      });
    }
    this.setState({
      photoArray: array,
    });
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction, photoArray } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {photoArray.map(photo => (
          <Carousel.Item>
            <img src={photo.url} alt={photo.caption} />
            <Carousel.Caption>
              <p>{photo.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default PhotoGallery;
