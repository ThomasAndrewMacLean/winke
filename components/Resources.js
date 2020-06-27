import React from 'react';
import { Section } from '../styles';
import { T, Tabs, PageTitle } from './index';

const AboutSection = () => {
  return (
    <Section>
      <PageTitle titleName="resourcesTitle"></PageTitle>
      <Tabs tabs={['about', 'cv', 'press', 'text']}></Tabs>
    </Section>
  );
};

export default AboutSection;
