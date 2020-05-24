import React from 'react';
import { Section } from '../styles';
import { T } from './index';

const ExpoSection = () => {
  return (
    <Section>
      <h2>
        <T translationKey="expoTitle" />
      </h2>

      <T translationKey="expoText" />

      <iframe
        style={{ marginTop: '3rem' }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4m4Aq7_DXrY?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Section>
  );
};

export default ExpoSection;
