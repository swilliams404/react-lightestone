import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import './index.scss'

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 8000)
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div
      {...handlers}
      className="carousel-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="slide-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index)
              }}
            >
              <span className="thumbnail-image">{child}</span>
              <span className="thumbnail-dot">•</span>
            </button>
          )
        })}
        <button
          className="left-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        ></button>
        <button
          className="right-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        ></button>
      </div>
    </div>
  )
}
export default Carousel
