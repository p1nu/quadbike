import React, { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/homepage/slider.css";
import "../styles/homepage/parallax.css";
import "../styles/homepage/tours.css";
import "../styles/homepage/customer.css";
import "../styles/homepage/contact.css";
import "../styles/components/chooseus.css";
import tripadvisorLogo from "/tripadvisor.svg";
import useIntersectionObserver from "./components/useIntersectionObserver";
import LabalSlider from "./components/LabalSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
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
    <Box sx={{ overflowX: "hidden", width: "100vw" }}>
      <Slider sliderRef={sliderRef} />
      <Welcome sliderRef={sliderRef} />
      <ChooseUs backgroundColor={"#003329"} titleColor={"#fff"} />
      <ToursSection />
      <CustomerReviews />
      <ContactSection />
    </Box>
  );
};

//Contact section
export const ContactSection = ({ background }) => {
  const titleRef = useRef(null);
  const infoRef = useRef(null);

  useIntersectionObserver(titleRef, { threshold: 0.5 });
  useIntersectionObserver(infoRef, { threshold: 0.5 });

  return (
    <Box className="contact">
      <div className="background__image">
        <img src={background} alt="background image" />
      </div>
      <div className="container">
        <div className="contact-content">
          <div ref={titleRef} className="contact-info a-up">
            <h1 className="title">Contact Us</h1>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <strong>Office Address:</strong> 123 Quad Bike St, Adventure City,
              AC 12345
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{" "}
              info@quadbike.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> +1
              (234) 567-890
            </p>
          </div>
          <div ref={infoRef} className="contact-logo a-up">
            <img src={tripadvisorLogo} alt="Tripadvisor Logo" />
          </div>
        </div>
      </div>
    </Box>
  );
};

//Customer reviews section
const CustomerReviews = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useIntersectionObserver(titleRef, { threshold: 0.5 });
  useIntersectionObserver(cardRef, { threshold: 0.5 });

  return (
    <Box className="customer-reviews">
      <div className="container">
        <h1 ref={titleRef} className="title a-up">
          Customer Reviews
        </h1>
        <div ref={cardRef} className="reviews-container a-up">
          <div className="review-card">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
};

//Tours section
export const ToursSection = ({tourId}) => {
  const [tours, setTours] = useState([]);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useIntersectionObserver(titleRef, { threshold: 0.5 });
  useIntersectionObserver(cardRef, { threshold: 0.5 });

  useEffect(() => {
    setTours(mockTours);
  }, []);

  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  const handleNavigate = (name) => {
    window.scrollTo(0, 0);
    const slug = generateSlug(name);
    navigate(`/tours/${slug}`);
    window.location.reload();
  };

  const filteredTours = tourId ? tours.filter((tour) => tour.id !== tourId) : tours;

  return (
    <Box className="tours">
      <div className="container">
        <h1 ref={titleRef} className="title tour-title a-up">
          {tourId ? "Other Tours" : "Our Tours"}
        </h1>
        <div ref={cardRef} className="tours-container a-up">
          {filteredTours.map((tour) => {
            const discountedPrice =
              tour.price - (tour.price * tour.discount) / 100;
            return (
              <div key={tour.id} className="tour-card" onClick={() => handleNavigate(tour.name)}>
                <div className="tour-top">
                  <img src={tour.src} alt={tour.name} />
                  <div
                    className={
                      tour.discount
                        ? "tour-card-discount"
                        : "tour-card-discount discount-none"
                    }
                  >
                    {tour.discount}% OFF
                  </div>
                </div>
                <div className="tour-info">
                  <span className="tour-card-header">
                    <h2 className="title tour-card-title">{tour.name}</h2>
                    <span className="tour-card-price title">
                      ${Number(discountedPrice).toFixed(2)}{" "}
                      {tour.discount > 0 && (
                        <span className="original-price">
                          ${Number(tour.price).toFixed(2)}
                        </span>
                      )}
                    </span>
                  </span>
                  <p>{tour.description}</p>
                  <div className="tour-card-btn-section">
                    <button className="tour-card-btn read-more" onClick={() => handleNavigate(tour.name)}>
                      Read More
                    </button>
                    <button className="tour-card-btn book-now" onClick={() => handleNavigate(tour.name)} >Book Now</button>
                  </div>
                </div>
              </div>
            );
          })}
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

      let maxScroll;

      if (window.innerWidth < 768) {
        return;
      } else {
        maxScroll = 300;
      }

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
          <div className="container">
            <h2 className=" title">We are Village bike quad</h2>
            <p className="">
              Whether you want a relaxing with our Sunset tour, or an Village
              tours & killing fields or the Half-day tour, or the Happy-full-day
              tour with the family ride, we have a package to suit for everyone.
              So reserve yourself a place on one of our tours or contact us for
              more information now.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

//Choose us section
export const ChooseUs = ({ backgroundColor, titleColor }) => {
  const titleRef = React.useRef(null);
  const cardRef = React.useRef(null);
  useIntersectionObserver(titleRef, { threshold: 0.5 });
  useIntersectionObserver(cardRef, { threshold: 0.5 });

  return (
    <Box className="us-container" sx={{ backgroundColor: backgroundColor }}>
      <div className="container us">
        <h1
          ref={titleRef}
          className="title us-title a-up"
          style={{ color: titleColor }}
        >
          Why choose us?
        </h1>
        <div ref={cardRef} className="card-container a-up">
          <div className="us-card">
            <div className="us-logo">
              <img
                src="https://picsum.photos/id/28/4928/3264.jpg"
                alt="card-logo"
              />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
          <div className="us-card">
            <div className="us-logo">
              <img
                src="https://picsum.photos/id/28/4928/3264.jpg"
                alt="card-logo"
              />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
          <div className="us-card">
            <div className="us-logo">
              <img
                src="https://picsum.photos/id/28/4928/3264.jpg"
                alt="card-logo"
              />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
          <div className="us-card">
            <div className="us-logo">
              <img
                src="https://picsum.photos/id/28/4928/3264.jpg"
                alt="card-logo"
              />
            </div>
            <h2 className="card-title title">Card Title</h2>
            <p className="card-desc">Card Description</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

//Slider section
const Slider = ({ sliderRef }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(mockTours);
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
              <div className="carousel-legend">
                <LabalSlider
                  companyId={image.innerWidth}
                  index={index}
                  title={image.name}
                  desc={image.description}
                />
              </div>
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
    src: "https://picsum.photos/id/11/2500/1667.jpg",
    description: "Description 1",
    price: 100,
    discount: 0,
  },
  {
    id: 2,
    name: "Tour 2",
    src: "https://picsum.photos/id/16/2500/1667.jpg",
    description: "Description 2",
    price: 150,
    discount: 15,
  },
  {
    id: 3,
    name: "Tour 3",
    src: "https://picsum.photos/id/12/2500/1667.jpg",
    description: "Description 3",
    price: 200,
    discount: 20,
  },
  {
    id: 4,
    name: "Tour 4",
    src: "https://picsum.photos/id/15/2500/1667.jpg",
    description: "Description 4",
    price: 250,
    discount: 25,
  },
  {
    id: 5,
    name: "Tour 5",
    src: "https://picsum.photos/id/28/4928/3264.jpg",
    description: "Description 5",
    price: 300,
    discount: 30,
  },
];
