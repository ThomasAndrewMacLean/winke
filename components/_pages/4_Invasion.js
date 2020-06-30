import React, { useContext, useState, useEffect } from 'react';
import { Section } from '../../styles';
import { T, PageTitle, Modal } from '../index';
import { BomenContext } from '../../utils/contexts';

import styled from 'styled-components';
import { getBushranger, getTermietenberg, getMouflon } from '../../utils';

const NUMBER_OF_TREES = 8;
const boomTypes = ['bushRanger', 'termiet', 'mouflon'];
const ExpoSection = () => {
  const [page, setPage] = useState(0);
  const [bigTree, setBigTree] = useState(null);
  const [bomen, setBomen] = useState([]);
  const [boomType, setBoomType] = useState('bushRanger');
  const pics = useContext(BomenContext);
  //const bomen = getBushranger(pics);

  useEffect(() => {
    if (boomType === 'bushRanger') setBomen(getBushranger(pics));
    if (boomType === 'termiet') setBomen(getTermietenberg(pics));
    if (boomType === 'mouflon') setBomen(getMouflon(pics));
  }, [boomType]);
  const maxPage = Math.ceil(bomen.length / NUMBER_OF_TREES);
  return (
    <Section>
      {bigTree && (
        <Modal
          picSrc={bigTree}
          close={() => {
            setBigTree(null);
          }}
          title={bigTree.name}
        ></Modal>
      )}
      <PageTitle titleName="invasionTitle"></PageTitle>
      <TreeWrap>
        <Text>
          <Switcher>
            {boomTypes.map((bt) => {
              return (
                <P
                  active={bt === boomType}
                  key={bt}
                  onClick={() => {
                    setBoomType(bt);
                  }}
                >
                  <T translationKey={bt} />
                </P>
              );
            })}
          </Switcher>

          {boomType === 'bushRanger' && <T translationKey="bushRangerText" />}
          {boomType === 'termiet' && <T translationKey="termietText" />}
          {boomType === 'mouflon' && <T translationKey="mouflonText" />}
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
          {bomen
            .slice(page * NUMBER_OF_TREES, (page + 1) * NUMBER_OF_TREES)
            .map((boom, index) => {
              return (
                <Boom
                  onClick={() => setBigTree(boom)}
                  key={boom.small + index}
                  src={boom.small}
                  loading="lazy"
                ></Boom>
              );
            })}
        </Wrap>
      </TreeWrap>
    </Section>
  );
};
const Switcher = styled.div`
  margin-bottom: 2rem;
`;
const P = styled.p`
  cursor: pointer;
  color: ${(props) => props.active && 'black'};
`;
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
    margin-top: -2rem;
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
