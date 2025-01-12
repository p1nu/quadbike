import React from 'react'
import '../../styles/components/chooseus.css'
import { Box } from '@mui/material'

const ChooseUs = () => {
  return (
    <Box className='us-container'>
      <div className="container us">
        <h1 className="title us-title">Why choose us?</h1>
        <div className="card-container">
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