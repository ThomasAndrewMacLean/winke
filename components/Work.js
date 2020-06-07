import React from 'react';
import { Section } from '../styles';
import { T, Caroussel, PageTitle } from './index';

const WorkSection = () => {
  return (
    <Section>
      <PageTitle titleName="workTitle"></PageTitle>

      <Caroussel />
    </Section>
  );
};

export default WorkSection;
