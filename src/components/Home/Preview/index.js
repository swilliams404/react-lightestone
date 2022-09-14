import './index.scss'
import Carousel from './Reusable/image-gallery.component'
import Water from './../../../assets/images/Circle_Watering_Can.png'
import Table from './../../../assets/images/Circle_Table.png'
import Card from './../../../assets/images/Card_3.png'
import Pie from './../../../assets/images/Circle_Pie.png'
import Wood from './../../../assets/images/Circle_Wood.png'

const Preview = () => {
  const slides = [
    { url: './Reusable/image-1.png' },
    { url: './Reusable/image-2.png' },
    { url: './Reusable/image-3.png' },
    { url: './Reusable/image-4.png' },
  ]
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
                doing whatever makes you happy!
                <p>
                  Enjoy the story or play the game in Free Mode to head straight
                  into play without story related blockades.
                </p>
              </p>
            </div>
          </div>
          <div className="preview-right-icons">
            <img src={Pie} alt="Pie" />
            <img src={Wood} alt="wood" />
          </div>
        </div>
        <div className="preview-hero"></div>
        <Carousel slides={slides} />
      </div>
    </div>
  )
}

export default Preview
