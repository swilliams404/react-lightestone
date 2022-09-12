import './index.scss'
import Carousel from './Reusable/image-gallery.component'

const Preview = () => {
  return (
    <div className="preview-container">
      <div className="preview-wrapper">
        <div className="preview-card-container">
          <div className="preview-left-icons">
            {/* <img src={Water} alt="water" />
            <img src={Table} alt="table" /> */}
          </div>
          <div className="preview-card">
            {/* <img src={Card} alt="Preview-card" /> */}
          </div>
          <div className="preview-right-icons"></div>
          {/* <img src={Pie} alt="Pie" />
          <img src={Wood} alt="wood" /> */}
        </div>
        <div className="preview-hero"></div>
        <Carousel />
      </div>
    </div>
  )
}

export default Preview
