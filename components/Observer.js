import React, { useRef, useEffect } from 'react';
import { useStore } from '../store';

const Observer = ({ id, children }) => {
  const ref = useRef();
  const { setCurrentNavLink } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(id);
          setCurrentNavLink(id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);
  return (
    <div id={id} ref={ref}>
      {children}
    </div>
  );
};

export default Observer;
