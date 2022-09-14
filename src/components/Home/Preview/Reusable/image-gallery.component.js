import React, { useState } from 'react'
import './index.scss'

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentUser] = useState(0)

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  return (
    <div className="carousel-container">
      <div className="slide-container" style={slideStyles}></div>
    </div>
  )
}

export default Carousel
