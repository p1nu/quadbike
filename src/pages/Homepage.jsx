import React, { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import ChooseUs from "./components/ChooseUs";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/homepage/slider.css";
import "../styles/homepage/parallax.css";
import "../styles/homepage/tours.css";
import "../styles/homepage/customer.css";
import "../styles/homepage/contact.css";
import tripadvisorLogo from '/tripadvisor.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <Slider sliderRef={sliderRef} />
      <Welcome sliderRef={sliderRef} />
      <ChooseUs />
      <Tours />
      <CustomerReviews />
      <Contact />
    </Box>
  );
};

//Contact section
const Contact = () => {
  return (
    <Box className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
        <h1 className="title">Contact Us</h1>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Office Address:</strong> 123 Quad Bike St, Adventure City, AC 12345</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> info@quadbike.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> +1 (234) 567-890</p>
          </div>
          <div className="contact-logo">
            <img src={tripadvisorLogo} alt="Tripadvisor Logo" />
          </div>
        </div>
      </div>
    </Box>
  );
}

//Customer reviews section
const CustomerReviews = () => {
  return (
    <Box className="customer-reviews">
      <div className="container">
        <h1 className="title">Customer Reviews</h1>
        <div className="reviews-container">
          <div className="review-card">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <span>- John Doe</span>
          </div>
          <div className="review-card">
            <p>
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat."
            </p>
            <span>- Jane Smith</span>
          </div>
          <div className="review-card">
            <p>
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur."
            </p>
            <span>- Bob Johnson</span>
          </div>
        </div>
      </div>
    </Box>
  );
}

//Tours section
const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(mockTours);
  }, []);

  return (
    <Box className="tours">
      <div className="container ">
        <h1 className="title tour-title">Our Tours</h1>
        <div className="tours-container">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-top">
                <img src={tour.src} alt={tour.name} />
                  <div 
                    className={tour.discount ? "tour-card-discount" : "tour-card-discount discount-none"}
                  >
                    {tour.discount} OFF
                  </div>
              </div>
              <div className="tour-info">
                <span className="tour-card-header">
                  <h2 className="title tour-card-title">{tour.name}</h2>
                  <span className="tour-card-price title">{tour.price}</span>
                </span>
                <p>{tour.description}</p>
                <div className="tour-card-btn-section">
                  <button className="tour-card-btn read-more">Read More</button>
                  <button className="tour-card-btn book-now">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

// Parallax effect section
const Welcome = ({ sliderRef }) => {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);
  const plantRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY - sliderRef.current.offsetHeight; // Subtract the height of the slider
      const maxScroll = 300;

      if (sliderRef.current && value > 0) {
        value = Math.min(value, maxScroll); // Limit the scroll value to a maximum of 500 pixels
        if (textRef.current) textRef.current.style.marginTop = value * 2 + "px"; // Move the text element based on scroll position
        if (leafRef.current) leafRef.current.style.left = value * 1.5 + "px"; // Move the leaf element based on scroll position
        if (hill1Ref.current) hill1Ref.current.style.top = value * 1 + "px"; // Move the hill1 element based on scroll position
        if (hill4Ref.current) hill4Ref.current.style.left = value * -1.5 + "px"; // Move the hill4 element based on scroll position
        if (hill5Ref.current) hill5Ref.current.style.left = value * 1.5 + "px"; // Move the hill5 element based on scroll position
        if (plantRef.current) plantRef.current.style.top = value * -1 + "px"; // Move the plant element based on scroll position
        if (descRef.current) descRef.current.style.top = value * -1.5 + "px"; // Move the desc element based on scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="parallax-container">
      <img
        className="image"
        id="hill1"
        src="hill1.png"
        alt="hill1"
        ref={hill1Ref}
      />
      <img className="image" id="hill2" src="hill2.png" alt="hill2" />
      <img className="image" id="hill3" src="hill3.png" alt="hill3" />
      <img
        className="image"
        id="hill4"
        src="hill4.png"
        alt="hill4"
        ref={hill4Ref}
      />
      <img
        className="image"
        id="hill5"
        src="hill5.png"
        alt="hill5"
        ref={hill5Ref}
      />
      <img className="image" id="tree" src="tree.png" alt="tree" />
      <h1
        id="parallax-title"
        className="container title parallax-title"
        ref={textRef}
      >
        Welcome
      </h1>
      <img
        className="image"
        id="leaf"
        src="leaf.png"
        alt="leaf"
        ref={leafRef}
      />
      <div className="parallax-desc" ref={descRef}>
        <img id="plant" src="plant.png" alt="plant" />
        <div className="parallax-text">
          <h2 className="container title">We are Village bike quad</h2>
          <p className="container">
            Whether you want a relaxing with our Sunset tour, or an Village tours
            & killing fields or the Half-day tour, or the Happy-full-day tour
            with the family ride, we have a package to suit for everyone. So
            reserve yourself a place on one of our tours or contact us for more
            information now.
          </p>
        </div>
      </div>
    </Box>
  );
};

//Slider section
const Slider = ({ sliderRef }) => {
  const [images, setImages] = useState([]);

  // Mock data for images
  const mockImages = [
    {
      id: 1,
      name: "Image 1",
      src: "https://via.placeholder.com/800x400",
      banner_company_id: 1,
      slider_title: "Title 1",
      slider_desc: "Description 1",
    },
    {
      id: 2,
      name: "Image 2",
      src: "https://via.placeholder.com/800x400",
      banner_company_id: 2,
      slider_title: "Title 2",
      slider_desc: "Description 2",
    },
    {
      id: 3,
      name: "Image 3",
      src: "https://via.placeholder.com/800x400",
      banner_company_id: 3,
      slider_title: "Title 3",
      slider_desc: "Description 3",
    },
    {
      id: 4,
      name: "Image 4",
      src: "https://via.placeholder.com/800x400",
      banner_company_id: 4,
      slider_title: "Title 4",
      slider_desc: "Description 4",
    },
    {
      id: 5,
      name: "Image 5",
      src: "https://via.placeholder.com/800x400",
      banner_company_id: 5,
      slider_title: "Title 5",
      slider_desc: "Description 5",
    },
  ];
  useEffect(() => {
    setImages(mockImages);
  }, []);

  return (
    <Box ref={sliderRef}>
      {images.length > 0 ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={300}
          dynamicHeight
          useKeyboardArrows
        >
          {images.map((image, index) => (
            <div key={index} className="slider_images">
              <img
                src={image.src}
                alt={image.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

//Mock data for tours
const mockTours = [
  {
    id: 1,
    name: "Tour 1",
    src: "https://via.placeholder.com/800x400",
    description: "Description 1",
    price: "$100",
    discount: "",
  },
  {
    id: 2,
    name: "Tour 2",
    src: "https://via.placeholder.com/800x400",
    description: "Description 2",
    price: "$150",
    discount: "15%",
  },
  {
    id: 3,
    name: "Tour 3",
    src: "https://via.placeholder.com/800x400",
    description: "Description 3",
    price: "$200",
    discount: "20%",
  },
  {
    id: 4,
    name: "Tour 4",
    src: "https://via.placeholder.com/800x400",
    description: "Description 4",
    price: "$250",
    discount: "25%",
  },
  {
    id: 5,
    name: "Tour 5",
    src: "https://via.placeholder.com/800x400",
    description: "Description 5",
    price: "$300",
    discount: "30%",
  },
];

export default Homepage;
