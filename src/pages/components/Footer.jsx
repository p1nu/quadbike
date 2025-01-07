import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@quadbike.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +1 (234) 567-890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Quad Biking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;