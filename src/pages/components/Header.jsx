import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import Loader from "./Loader";
import { Box } from "@mui/material";
import DOMPurify from "dompurify";
import "../../styles/components/header.css";

const Header = ({ title, description, background }) => {
  const isActive = false;
  const titleRef = useRef();
  const descRef = useRef();
  useIntersectionObserver(titleRef, { threshold: 0 });
  useIntersectionObserver(descRef, { threshold: 0 });

  return (
    <Box className="header__section body">
      <div className="header__blank">
        <img src={background} alt="background image" />
      </div>
      <div className="header__container__section container">
        <h1
          ref={titleRef}
          className="header__title__section title-sm a-up"
        >
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
    </Box>
  );
};

export default Header;
