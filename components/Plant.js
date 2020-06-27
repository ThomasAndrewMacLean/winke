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
      <TreeWrap>
        <Text>
          <T translationKey="plant a treeText" />
        </Text>
        <Wrap>
          {bomen.map((boom, index) => {
            return <Boom key={boom + index} src={boom}></Boom>;
          })}
        </Wrap>
      </TreeWrap>
    </Section>
  );
};
const Text = styled.div`
  @media (min-width: ${(props) => props.theme.medium}) {
    max-width: 40%;
    padding: 6rem;
    margin-top: 2rem;
  }
`;
const TreeWrap = styled.div`
  position: relative;
  @media (min-width: ${(props) => props.theme.medium}) {
    margin-left: -4rem;

    margin-left: calc(-50vw + 300px + 175px);
    width: calc(100vw - 175px);
  }
  p {
    line-height: 2rem;
  }
  display: flex;
  @media (max-width: ${(props) => props.theme.medium}) {
    flex-direction: column;
  }
`;
const Wrap = styled.div`
  @media (min-width: ${(props) => props.theme.medium}) {
    margin-left: 2rem;
  }
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.medium}) {
    padding-top: 4rem;
  }
`;
const Boom = styled.img`
  width: 200px;

  height: auto;
  max-height: 200px;
  object-fit: cover;
  object-position: 50% 50%;
  padding: 0.3em;
  @media (max-width: ${(props) => props.theme.medium}) {
    width: 50%;
  }
`;

export default ExpoSection;
