import './index.scss'
import Carousel, { CarouselItem } from './Reusable'
import Water from './../../../assets/images/Circle_Watering_Can.png'
import Table from './../../../assets/images/Circle_Table.png'
import Card from './../../../assets/images/Card_3.png'
import Pie from './../../../assets/images/Circle_Pie.png'
import Wood from './../../../assets/images/Circle_Wood.png'
import SlideOne from './Reusable/image1.png'
import SlideTwo from './Reusable/image4.png'
import SlideThree from './Reusable/image1.png'
import SlideFour from './Reusable/image4.png'

const Preview = () => {
  return (
    <div className="preview-container">
      <div className="preview-wrapper">
        <div className="preview-card-container">
          <div className="preview-left-icons">
            <img src={Water} alt="water" />
            <img src={Table} alt="table" />
          </div>
          <div className="preview-card">
            <img src={Card} alt="Preview-card" />
            <h1>And More!</h1>
            <div className="preview-text-body">
              <p>
                Farm, Build, Explore, Relax, Decorate, Quest- spend your time
                doing whatever makes you happy!{' '}
              </p>
              <p>
                Enjoy the story or play the game in Free Mode to head straight
                into play without story related blockades.
              </p>
            </div>
          </div>
          <div className="preview-right-icons">
            <img src={Pie} alt="Pie" />
            <img src={Wood} alt="wood" />
          </div>
        </div>
      </div>

      <div className="preview-hero">
        <Carousel>
          <CarouselItem>
            <img src={SlideOne} alt="First-Slide" />
          </CarouselItem>
          <CarouselItem
            style={{ backgroundImage: 'url(./Resuable/image2.png)' }}
          >
            <img src={SlideTwo} alt="Second-Slide" />
          </CarouselItem>
          <CarouselItem
            style={{ backgroundImage: 'url(./Resuable/image3.png)' }}
          >
            <img src={SlideThree} alt="Third-Slide" />
          </CarouselItem>
          <CarouselItem
            style={{ backgroundImage: 'url(./Resuable/image1.png)' }}
          >
            <img src={SlideFour} alt="Fourth-Slide" />
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  )
}

export default Preview
