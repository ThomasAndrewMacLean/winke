import React, { useRef, useEffect } from 'react';
import { Section } from '../styles';
import { T } from './index';
import { useStore } from '../store';

const ExpoSection = () => {
  const ref = useRef();
  const { setCurrentNavLink } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('intersect EXPO');
          setCurrentNavLink('expo');
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
    <Section ref={ref} id="expo">
      <h2>
        <T translationKey="expoTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Section>
  );
};

export default ExpoSection;
