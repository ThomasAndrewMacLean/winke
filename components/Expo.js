import React from 'react';
import { Section } from '../styles';
import { T } from './index';

const ExpoSection = () => {
  return (
    <Section>
      <h2>
        <T translationKey="expoTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Section>
  );
};

export default ExpoSection;
