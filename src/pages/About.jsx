import React from 'react'
import Header from './components/Header'
import {ChooseUs} from './Homepage'
import Loader from './components/Loader'

const About = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Header title={"About us"} description={"We are a team of experienced tour guides who are passionate about showing you the best of Cambodia. Our goal is to provide you with the best possible experience, so you can relax and enjoy your time in our beautiful country."} background={"https://picsum.photos/id/11/2500/1667.jpg"}/>
      <ChooseUs backgroundColor={"#fff"}/>
    </div>
  )
}

export default About