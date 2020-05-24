import React, { useRef, useEffect } from 'react';
import { Section } from '../styles';
import { T } from './index';
import { useStore } from '../store';

const ContactSection = () => {
  const ref = useRef();
  const { setCurrentNavLink } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('intersect CONTACT');
          setCurrentNavLink('contact');
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
    <Section ref={ref} id="contact">
      <h2>
        <T translationKey="contactTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Section>
  );
};

export default ContactSection;
