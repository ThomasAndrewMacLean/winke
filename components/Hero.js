import React, { useRef, useEffect } from 'react';
import { Section } from '../styles';
import { useStore } from '../store';
import { Image, T } from './index';

const HeroSection = () => {
  const ref = useRef();
  const { setCurrentNavLink } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('intersect HERO');
          setCurrentNavLink('home');
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
    <Section ref={ref} id="home">
      
      <Image imageId="2"></Image>

    </Section>
  );
};

export default HeroSection;
