import React from 'react'
import '../../styles/components/chooseus.css'
import { Box } from '@mui/material'
import useIntersectionObserver from './useIntersectionObserver'

const ChooseUs = ({backgroundColor, titleColor}) => {
  const titleRef = React.useRef(null)
  const cardRef = React.useRef(null)
  useIntersectionObserver(titleRef, { threshold: 0.5 })
  useIntersectionObserver(cardRef, { threshold: 0.5 })

  return (
    <Box className='us-container' sx={{backgroundColor: backgroundColor}}>
      <div className="container us">
        <h1 ref={titleRef} className="title us-title a-up" style={{color: titleColor}}>Why choose us?</h1>
        <div ref={cardRef} className="card-container a-up">
          <div className="us-card">
            <div className="us-logo">
              <img src="https://picsum.photos/id/28/4928/3264.jpg" alt="card-logo" />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
          <div className="us-card">
            <div className="us-logo">
              <img src="https://picsum.photos/id/28/4928/3264.jpg" alt="card-logo" />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
          <div className="us-card">
            <div className="us-logo">
              <img src="https://picsum.photos/id/28/4928/3264.jpg" alt="card-logo" />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
          <div className="us-card">
            <div className="us-logo">
              <img src="https://picsum.photos/id/28/4928/3264.jpg" alt="card-logo" />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default ChooseUs