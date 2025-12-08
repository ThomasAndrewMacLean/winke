import React from 'react';
import { Section } from '../../styles';
import { Tabs, PageTitle } from '../index';

const AboutSection = () => {
  return (
    <Section>
      <PageTitle titleName="resourcesTitle"></PageTitle>
      <Tabs tabs={['about', 'cv',  'text']}></Tabs>
    </Section>
  );
};

export default AboutSection;
