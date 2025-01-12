import { useState, useEffect } from 'react';

const useIntersectionObserver = (elementRef, options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          // Comment out this line to remove the fade-in effect
          entry.target.classList.remove('show');
        }
      },
      options
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options]);

  return isVisible;
};

export default useIntersectionObserver;