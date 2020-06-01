import React from 'react';
import { Section } from '../styles';
import { T } from './index';
import styled from 'styled-components';

const ExpoSection = () => {
  return (
    <Section>
      <h2>
        <T translationKey="expoTitle" />
      </h2>

      <T translationKey="expoText" />

      <Iframe
        style={{ marginTop: '3rem' }}
        width="600"
        height="375"
        src="https://www.youtube.com/embed/4m4Aq7_DXrY?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
    </Section>
  );
};
const Iframe = styled.iframe`
  @media (max-width: ${(props) => props.theme.medium}) {
    width: 100vw;
    margin-left: -10vw;
  }
`;
export default ExpoSection;
