import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Box } from '@mui/material'
import Loader from './components/Loader'

const Gallery = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Box>
      <Header background={"https://picsum.photos/id/11/2500/1667.jpg"} content={<Content />}/>
    </Box>
  )
}

const Content = () => {
  return (
    <div>
      <h1>Gallery</h1>
    </div>
  )
}

export default Gallery