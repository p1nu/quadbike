import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Box } from '@mui/material'
import { ToursSection } from './Homepage'
import Loader from './components/Loader'

const Tours = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <Header title={"Exprience with Quad Biking"} description={"Explore the breathtaking Khmer countryside on our powerful quad bikes.Unleash your adventurous spirit while enjoying stunninglandscapes and vibrant culture."} background={"https://picsum.photos/id/11/2500/1667.jpg"}/>
      <ToursSection />
    </Box>
  )
}

export default Tours