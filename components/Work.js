import React from 'react';
import { Section } from '../styles';
import { T } from './index';

const WorkSection = () => {
  return (
    <Section id="work">
      <h2>
        <T translationKey="workTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Section>
  );
};

export default WorkSection;
