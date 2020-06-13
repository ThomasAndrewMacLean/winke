import React, { useContext } from 'react';
import { Section } from '../styles';
import { T, PageTitle } from './index';
import { BomenContext } from '../utils/contexts';

import styled from 'styled-components';
import { getBomen } from '../utils';

const ExpoSection = () => {
  const pics = useContext(BomenContext);
  const bomen = getBomen(pics);
  return (
    <Section>
      <PageTitle titleName="plant a treeTitle"></PageTitle>

      <T translationKey="plant a treeText" />
      <Wrap>
        {bomen.map((boom, index) => {
          return <Boom key={boom + index} src={boom}></Boom>;
        })}
      </Wrap>
    </Section>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 4rem;
`;
const Boom = styled.img`
  width: 200px;

  height: 200px;
  object-fit: cover;
  padding: 0.3em;
  @media (max-width: ${(props) => props.theme.small}) {
    width: 50%;
  }
`;

export default ExpoSection;
