import React from 'react'
import '../../styles/components/topbar.css'
import { useNavigate } from 'react-router-dom'

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <div className="container topbar-container">

      <div className="logo" onClick={() => navigate('/')}>Logo</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tours">Tours and Fares</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Topbar