import React from 'react'
import '../../styles/components/topbar.css'
import '../../styles/components/mobile-navbar.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Topbar = () => {
  const navigate = useNavigate();
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <>
      <nav className="topbar">
        <div className="topbar-container container">
          <div className="logo" onClick={() => navigate('/')}>Logo</div>
          <ul className="header__menu">
            <li>
              <a href="/" className="header__link">
                Home
              </a>
            </li>
            <li>
              <a href="/tours" className="header__link">
                Tours and Fares
              </a>
            </li>
            <li>
              <a href="/gallery" className="header__link">
                Gallery
              </a>
            </li>
            <li>
              <a href="/about-us" className="header__link">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="header__link">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="header__bars" onClick={toggleMobileNav}>
            <MenuIcon />
          </div>
        </div>
      </nav>
      {isMobileNavVisible && (
        <div className="mobile-nav">
          <div className="mobile-nav__close" onClick={toggleMobileNav}>
            <CloseIcon style={{ fontSize: "2rem", color: "var(--clr-light)" }} />
          </div>
          <ul className="mobile-nav__menu container">
            <li>
              <a href="/" className="mobile-nav__link" onClick={toggleMobileNav}>
                Home
              </a>
            </li>
            <li>
              <a href="/tours" className="mobile-nav__link" onClick={toggleMobileNav}>
                Tours and Fares
              </a>
            </li>
            <li>
              <a href="/gallery" className="mobile-nav__link" onClick={toggleMobileNav}>
                Gallery
              </a>
            </li>
            <li>
              <a href="/about-us" className="mobile-nav__link" onClick={toggleMobileNav}>
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="mobile-nav__link" onClick={toggleMobileNav}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Topbar