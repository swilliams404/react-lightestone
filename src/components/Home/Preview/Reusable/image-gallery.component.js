import React from 'react'
import './index.scss'

const Carousel = () => {
  return (
    <div className="slider">
      <div className="buttons">
        <button id="prev">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button id="prev">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="slide current">
        <div className="content">
          <h1>Slide One</h1>
        </div>
      </div>

      <div className="slide">
        <div className="content">
          <h1>Slide Two</h1>
        </div>
      </div>

      <div className="slide">
        <div className="content">
          <h1>Slide Three</h1>
        </div>
      </div>

      <div className="slide">
        <div className="content">
          <h1>Slide Four</h1>
        </div>
      </div>

      <div className="slide">
        <div className="content">
          <h1>Slide Five</h1>
        </div>
      </div>

      <script src="index.js"></script>
    </div>
  )
}

export default Carousel
