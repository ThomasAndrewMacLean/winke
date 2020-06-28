import React, { useContext, useState } from 'react';
import { Section } from '../../styles';
import { T, PageTitle } from '../index';
import { BomenContext } from '../../utils/contexts';

import styled from 'styled-components';
import { getBomen } from '../../utils';
const NUMBER_OF_TREES = 12;
const ExpoSection = () => {
  const [page, setPage] = useState(0);

  const pics = useContext(BomenContext);
  const bomen = getBomen(pics);
  //setMaxPage(bomen.length / NUMBER_OF_TREES);
  console.log(bomen.length);
  const maxPage = Math.ceil(bomen.length / NUMBER_OF_TREES);
  return (
    <Section>
      <PageTitle titleName="plant a treeTitle"></PageTitle>
      <TreeWrap>
        <Text>
          <T translationKey="plant a treeText" />
        </Text>
        <Subs>
          {Array(maxPage)
            .fill(0)
            .map((_, i) => {
              return (
                <Sub onClick={() => setPage(i)} active={i === page} key={i}>
                  {i + 1}
                </Sub>
              );
            })}
        </Subs>
        <Wrap>
          {bomen.slice(page * 12, (page + 1) * 12).map((boom, index) => {
            return <Boom key={boom + index} src={boom}></Boom>;
          })}
        </Wrap>
      </TreeWrap>
    </Section>
  );
};
const Subs = styled.div`
  position: absolute;

  display: flex;
  top: -35px;
  left: 41%;
  p {
    cursor: pointer;
    padding: 0 0.4rem;
  }
  @media (max-width: ${(props) => props.theme.medium}) {
    display: none;
  }
`;
const Sub = styled.p`
  color: ${(props) => props.active && 'black'};
`;
const Text = styled.div`
  @media (min-width: ${(props) => props.theme.medium}) {
    max-width: calc(35% + 4rem);
    padding-right: 2rem;
    margin-top: 2rem;
  }
`;
const TreeWrap = styled.div`
  position: relative;

  display: flex;
  margin-top: 6rem;

  @media (min-width: ${(props) => props.theme.medium}) {
    /* margin-left: -4rem; */
    /* background: lightblue; */
    /* margin-left: calc(-50vw + 300px + 175px); */
    width: calc(50vw + 300px - 4rem);
  }
  p {
    line-height: 2rem;
  }

  @media (max-width: ${(props) => props.theme.medium}) {
    flex-direction: column;
  }
`;
const Wrap = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(3,1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;
  overflow: hidden;
  img{
    display: flex;
  padding:0;
}

  gap: 10px ; 
  /* @media (min-width: ${(props) => props.theme.medium}) {
    margin-left: 2rem;
  }
  display: flex;
  flex-wrap: wrap; 
  @media (max-width: ${(props) => props.theme.medium}) {
    padding-top: 4rem;
  } */
`;
const Boom = styled.img`
  width: 100%;

  height: auto;

  object-fit: cover;
  object-position: 50% 50%;
  padding: 0.3em;
  @media (max-width: ${(props) => props.theme.medium}) {
    /* width: 50%; */
  }
`;

export default ExpoSection;
