import React from 'react';
import { Section } from '../styles';
import { T, Caroussel } from './index';

const WorkSection = () => {
  return (
    <Section>
      <h2>
        <T translationKey="workTitle" />
      </h2>

      <Caroussel />
    </Section>
  );
};

export default WorkSection;
