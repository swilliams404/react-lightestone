import React from 'react'
import './index.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image1 from './../Reusable/image-1.png'
import Image2 from './../Reusable/image-2.png'
import Image3 from './../Reusable/image-3.png'

class ImageGallaryComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Preview Gallery</h2>
        <Carousel
          autoPlay
          interval="5000"
          transitionTime="1000"
          onChange={this.onChangeEvent}
          onClickItem={this.onClickItemEvent}
          onClickThumb={this.onClickThumbEvent}
          onSwipeStart={this.onSwipeStartEvent}
          onSwipeEnd={this.onSwipeEndEvent}
          onSwipeMove={this.onSwipeMoveEvent}
        >
          <div>
            <img src={Image1} alt="1" />
          </div>
          <div>
            <img src={Image2} alt="2" />
          </div>
          <div>
            <img src={Image3} alt="3" />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default ImageGallaryComponent
