import React, { useEffect, useRef, useState} from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import Loader from './Loader';
import { Box } from '@mui/material';
import DOMPurify from 'dompurify';

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState({});
  const [company, setCompany] = useState({});
  const isActive = false;
  const titleRef = useRef();
  const descRef = useRef();
  useIntersectionObserver(titleRef, { threshold: 0 });
  useIntersectionObserver(descRef, { threshold: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box
      className="funfood__header header__section body"
      sx={{
        backgroundImage: ``,
      }}
    >
      <div className="header__blank"></div>
      <div className="funfood__header__container header__container__section container">
        <h1 ref={titleRef} className="funfood__header__title header__title__section title-sm a-right">
          {company.company_name}
        </h1>
        <div
          ref={descRef}
          className="funfood__header__description header__description__section a-right"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(company.company_desc),
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
}

export default Header