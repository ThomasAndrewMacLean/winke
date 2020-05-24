import React, { useRef, useEffect } from 'react';
import { Section } from '../styles';
import { T } from './index';
import { useStore } from '../store';

const AboutSection = () => {
  const ref = useRef();
  const { setCurrentNavLink } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('intersect ABOUT');
          setCurrentNavLink('about');
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
    <Section ref={ref} id="about">
      <h2>
        <T translationKey="aboutTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Section>
  );
};

export default AboutSection;
