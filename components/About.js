import React from 'react';
import { Section } from '../styles';
import { T, Tabs } from './index';

const AboutSection = () => {
  return (
    <Section>
      <h2>
        <T translationKey="resourcesTitle" />
      </h2>

      <Tabs tabs={['about', 'cv']}></Tabs>
    </Section>
  );
};

export default AboutSection;
