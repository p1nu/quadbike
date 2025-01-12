import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import Loader from "./Loader";
import { Box } from "@mui/material";
import DOMPurify from "dompurify";
import "../../styles/components/header.css";
import "../../styles/components/breadcrumb.css";
import { Link } from "react-router-dom";

const Header = ({ title, description, background, content, tour }) => {
  const isActive = false;
  const titleRef = useRef();
  const descRef = useRef();
  const crumbsRef = useRef();

  useIntersectionObserver(titleRef, { threshold: 0 });
  useIntersectionObserver(descRef, { threshold: 0 });
  useIntersectionObserver(crumbsRef, { threshold: 0 });

  return (
    <Box className={!tour ? "header__section" : "header__section header__tour"}>
      <div className="header__blank">
        <img src={background} alt="background image" />
      </div>
      {!tour ? (
        <div className="header__container__section container">
          <h1 ref={titleRef} className="header__title__section title-sm a-up">
            {title}
          </h1>
          <div
            ref={descRef}
            className="header__description__section a-up"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
          <div>
            {isActive && (
              <a
                className="btn-trans funfood__header__btn header__btn__section"
                href="#"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="header__container__section container">
          <h1 ref={titleRef} className="header__title__section title-sm a-up">
            {title}
          </h1>
          <div
            ref={descRef}
            className="header__description__section a-up"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
          <div>
            {isActive && (
              <a
                className="btn-trans funfood__header__btn header__btn__section"
                href="#"
              >
                Visit Website
              </a>
            )}
          </div>
          <nav ref={crumbsRef} className="breadcrumb container a-up">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/tours" className="breadcrumb-link">
              Tours
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{tour}</span>
          </nav>
        </div>
      )}
    </Box>
  );
};

export default Header;
