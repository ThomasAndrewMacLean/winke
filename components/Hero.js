import React from 'react';
import { Section } from '../styles';
import { Image, T } from './index';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <Image imageId="2"></Image>
      <h2>
        <T translationKey="heroText"></T>
      </h2>
    </HeroSection>
  );
};

const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  padding-top: 0;
  p {
    line-height: 2rem;
    font-size: 1.3rem;
    font-weight: 200;
    color: var(--grey-blue);
  }
`;

export default Hero;
