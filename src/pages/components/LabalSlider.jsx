import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { useNavigate } from "react-router-dom";

const LabalSlider = ({id, index, title, desc}) => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const descRef = useRef();
  const buttonRef = useRef();

  useIntersectionObserver(titleRef, {threshold: 0});
  useIntersectionObserver(descRef, {threshold: 0});
  useIntersectionObserver(buttonRef, {threshold: 0});

  const alterIndex = (index) => {
    if (index % 2 === 0) {
      return "slider-container";
    } else {
      return "slider-container-right";
    }
  }

  const slideIndex = (index) => {
    if (index % 2 === 0) {
      return "a-right";
    } else {
      return "a-left";
    }
  }


  return (
    <div className={`container ${alterIndex(index)}`}>
      <h1 ref={titleRef} className={`title slider__title ${slideIndex(index)}`}>{title}</h1>
      <p ref={descRef} className={`funfood__subheader ${slideIndex(index)}`}>
        {desc}
      </p>
      {title ? (

        <button
        ref={buttonRef}
        className={`slider__button ${slideIndex(index)}`}
        onClick={
          index === 0
          ? () => navigate(`/about`)
          : () => navigate(`/${id}`)
        }
        >
        Book Now
      </button>
      ) : null}
    </div>
  );
};

export default LabalSlider;