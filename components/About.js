import React from 'react';
import { Section } from '../styles';
import { T } from './index';

const AboutSection = () => {
  return (
    <Section id="about">
      <h2>
        <T translationKey="aboutTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Section>
  );
};

export default AboutSection;
