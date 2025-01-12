import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { mockTours } from "../assets/mockTours";
import Header from "./components/Header";
import { ToursSection } from "./Homepage";
import { mockImagesData } from "./Gallery";
import DOMPurify from "dompurify";
import ImageGallery from "react-image-gallery";
import useIntersectionObserver from "./components/useIntersectionObserver";
import "../styles/components/tour-info.css";
import "react-image-gallery/styles/css/image-gallery.css";

const TourInfo = () => {
  const { slug } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        // Simulate fetching tour data from mock data
        const tourData = mockTours.find((tour) => tour.slug === slug);
        if (tourData) {
          setTour(tourData);
        } else {
          console.log("Tour not found");
        }
      } catch (error) {
        console.log("Error fetching tour:", error);
      }
    };

    fetchTour();
  }, [slug]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header title={tour.name} background={tour.src} tour={tour.name} />
      <ImageCarousel/>
      <TourInfoSection tour={tour} />
      <ToursSection tourId={tour.id} />
    </div>
  );
};

//image carousel section
const ImageCarousel = () => {
  const imageGalleryRef = useRef();

  useIntersectionObserver(imageGalleryRef, { threshold: 0.3 });
  const images = mockImagesData.map((image) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  return (
    <div className="image-carousel-section">
      <div ref={imageGalleryRef} className="image-carousel container a-up">
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
      </div>
    </div>
  );
};

//tour info section
const TourInfoSection = ({ tour }) => {
  const infoRef = useRef();
  const bookRef = useRef();
  const activitiesRef = useRef();
  const includesRef = useRef();
  const excludesRef = useRef();
  const formRef = useRef();

  useIntersectionObserver(infoRef, { threshold: 0.3 });
  useIntersectionObserver(bookRef, { threshold: 0 });
  useIntersectionObserver(activitiesRef, { threshold: 0.3 });
  useIntersectionObserver(includesRef, { threshold: 0.3 });
  useIntersectionObserver(excludesRef, { threshold: 0.3 });
  useIntersectionObserver(formRef, { threshold: 0 });

  return (
    <div className="tour-content container">
      <div className="tour-info">
        <div ref={infoRef} className="info-group a-up">
          <h2 className="title ">Tour Activities</h2>
          <div
            ref={activitiesRef}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(tour.activities),
            }}
          />
        </div>
        <div ref={includesRef} className="info-group  a-up">
          <h2 className="title">Tour Includes</h2>
          <ul>
            {tour.includes.map((include, index) => (
              <li key={index}>{include}</li>
            ))}
          </ul>
        </div>
        <div ref={excludesRef} className="info-group  a-up">
          <h2 className="title">Tour Excludes</h2>
          <ul>
            {tour.excludes.map((exclude, index) => (
              <li key={index}>{exclude}</li>
            ))}
          </ul>
        </div>
      </div>
      <div ref={bookRef} className="book-now-form a-up">
        <h2 className="title">Book Now</h2>
        <form ref={formRef} className="a-up">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="pickup-time">Pickup Time</label>
            <input type="time" id="pickup-time" name="pickup-time" required />
          </div>
          <div className="form-group">
            <label htmlFor="people">Number of People</label>
            <input
              type="number"
              id="people"
              name="people"
              placeholder="Number of People"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TourInfo;
