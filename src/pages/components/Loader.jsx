import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import '../../styles/components/loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress style={{ color: '#0f957a' }} />
    </div>
  )
}

export default Loader