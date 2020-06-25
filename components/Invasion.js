import React, { useContext } from 'react';
import { Section } from '../styles';
import { T, PageTitle } from './index';
import { BomenContext } from '../utils/contexts';

import styled from 'styled-components';
import { getInvasion } from '../utils';

const InvasionSection = () => {
  const pics = useContext(BomenContext);
  console.log('🌲', pics);
  const bomen = getInvasion(pics);
  return (
    <Section>
      <TreeWrap>
        <>
          <PageTitle titleName="invasionTitle"></PageTitle>

          <T translationKey="invasionText" />
        </>
        <Wrap>
          {bomen.map((boom, index) => {
            return <Boom key={boom + index} src={boom}></Boom>;
          })}
        </Wrap>
      </TreeWrap>
    </Section>
  );
};
const TreeWrap = styled.div`
  p {
    line-height: 2rem;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: flex;
`;
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

export default InvasionSection;
