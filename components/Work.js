import React, { useContext, useState } from 'react';
import { Section } from '../styles';
import { T, Caroussel, PageTitle } from './index';
import { PictureContext } from '../utils/contexts';
import styled from 'styled-components';

const WorkSection = () => {
  const [picSelected, setPicSelected] = useState(0);
  const [subSelected, setSubSelected] = useState(0);
  const picsRaw = useContext(PictureContext);
  const pics = picsRaw.filter((x) => x.name);

  return (
    <Section>
      <PageTitle titleName="workTitle"></PageTitle>

      <Caroussel />
      <Big>
        <Uitleg>
          <h4>{pics[picSelected].name}</h4>
          <p>{pics[picSelected].description}</p>
        </Uitleg>
        {pics[picSelected].pic.length > 1 && (
          <Subs>
            {pics[picSelected].pic.map((s, i) => {
              return (
                <Sub
                  active={subSelected === i}
                  key={i}
                  onClick={() => setSubSelected(i)}
                >
                  {i + 1}
                </Sub>
              );
            })}
          </Subs>
        )}
        <Pic src={pics[picSelected].pic[subSelected].url}></Pic>
        <Lijst>
          <ul>
            {pics.map((p, i) => {
              return (
                <Li
                  active={picSelected === i}
                  onClick={() => {
                    setPicSelected(i);
                    setSubSelected(0);
                  }}
                  key={i}
                >
                  {p.name}
                </Li>
              );
            })}
          </ul>
        </Lijst>
      </Big>
    </Section>
  );
};
const Li = styled.li`
  font-weight: ${(props) => props.active && 'bold'};
  color: ${(props) => props.active && 'black'};
`;
const Sub = styled.p`
  color: ${(props) => props.active && 'black'};
  /* font-weight: ${(props) => props.active && 'bold'}; */
`;
const Subs = styled.div`
  position: absolute;

  display: flex;
  top: -35px;
  left: 30%;

  p {
    cursor: pointer;
    padding: 0 0.4rem;
  }
`;
const Uitleg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  p {
    font-size: 10px;
  }
  width: 25%;
`;
const Pic = styled.img`
  outline: 1px solid #333;
  height: 50vh;
  width: 300px;
  object-fit: cover;
  margin: 0 4rem;
`;
const Lijst = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  li {
    cursor: pointer;
  }
`;
const Big = styled.div`
  margin-top: 6rem;
  width: calc(100vw - 175px);
  display: flex;
  position: relative;
  @media (max-width: ${(props) => props.theme.medium}) {
    display: none;
  }
`;

export default WorkSection;
