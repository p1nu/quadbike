import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Box } from '@mui/material'
import Loader from './components/Loader'
import ImagesCard from './components/ImagesCard'
import useIntersectionObserver from './components/useIntersectionObserver'
import '../styles/components/gallery.css'

const Gallery = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Box>
      <Header background={"https://picsum.photos/id/11/2500/1667.jpg"} title={"Unleash Your Adventure with Quad Biking!"} description={"Welcome to Village Quad Bike Trails, where adventure meets the stunning beauty of the Khmer countryside. Join us for an unforgettable quad biking experience that celebrates our rich culture and traditions."}/>
      <Content />
    </Box>
  )
}

const Content = () => {
  const titleRef = React.useRef(null)

  useIntersectionObserver(titleRef, { threshold: 0.5 });

  return (
    <div className="gallery">
      <h1 ref={titleRef} className='gallery-title title a-up'>Gallery</h1>
      <div className="gallery-container container">
        {mockImagesData.map((image) => (
          <ImagesCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

const mockImagesData = [
  {
    id: 1,
    url: "https://picsum.photos/id/1011/800/600",
    title: "Quad Biking Adventure 1",
    description: "Adventure 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/1012/800/600",
    title: "Quad Biking Adventure 2",
    description: "Adventure 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/1013/800/600",
    title: "Quad Biking Adventure 3",
    description: "Adventure 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/1014/800/600",
    title: "Quad Biking Adventure 4",
    description: "Adventure 4",
  },
  {
    id: 5,
    url: "https://picsum.photos/id/1015/800/600",
    title: "Quad Biking Adventure 5",
    description: "Adventure 5",
  },
  {
    id: 6,
    url: "https://picsum.photos/id/1016/800/600",
    title: "Quad Biking Adventure 6",
    description: "Adventure 6",
  },
  {
    id: 7,
    url: "https://picsum.photos/id/1015/800/600",
    title: "Quad Biking Adventure 7",
    description: "Adventure 7",
  },
  {
    id: 8,
    url: "https://picsum.photos/id/1018/800/600",
    title: "Quad Biking Adventure 8",
    description: "Adventure 8",
  },
  {
    id: 9,
    url: "https://picsum.photos/id/1019/800/600",
    title: "Quad Biking Adventure 9",
    description: "Adventure 9",
  },
  {
    id: 10,
    url: "https://picsum.photos/id/1020/800/600",
    title: "Quad Biking Adventure 10",
    description: "Adventure 10",
  },
  {
    id: 11,
    url: "https://picsum.photos/id/1021/800/600",
    title: "Quad Biking Adventure 11",
    description: "Adventure 11",
  },
  {
    id: 12,
    url: "https://picsum.photos/id/1022/800/600",
    title: "Quad Biking Adventure 12",
    description: "Adventure 12",
  },
  {
    id: 13,
    url: "https://picsum.photos/id/1023/800/600",
    title: "Quad Biking Adventure 13",
    description: "Adventure 13",
  },
  {
    id: 14,
    url: "https://picsum.photos/id/1024/800/600",
    title: "Quad Biking Adventure 14",
    description: "Adventure 14",
  },
  {
    id: 15,
    url: "https://picsum.photos/id/1025/800/600",
    title: "Quad Biking Adventure 15",
    description: "Adventure 15",
  },
]

export default Gallery