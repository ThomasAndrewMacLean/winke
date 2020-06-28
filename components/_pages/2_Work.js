import React, { useContext, useState } from 'react';
import { Section } from '../../styles';
import { Caroussel, PageTitle } from '../index';
import { PictureContext } from '../../utils/contexts';
import styled from 'styled-components';
import marked from 'marked';

const WorkSection = () => {
  const [picSelected, setPicSelected] = useState(0);
  const [subSelected, setSubSelected] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const picsRaw = useContext(PictureContext);
  const pics = picsRaw.filter((x) => x.name && !x.home);
  //console.log(pics[picSelected].pic[subSelected]);

  const zoom = () => {
    setFullScreen(true);
  };
  return (
    <Section>
      {fullScreen && (
        <Modal onClick={() => setFullScreen(false)}>
          <Pic src={pics[picSelected].pic[subSelected].url}></Pic>
        </Modal>
      )}
      <PageTitle titleName="workTitle"></PageTitle>

      <Caroussel />
      <Big>
        <Uitleg>
          <h4>{pics[picSelected].name}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: marked(pics[picSelected].description),
            }}
          ></div>
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
            <svg
              onClick={zoom}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </Subs>
        )}
        <Pic
          src={pics[picSelected].pic[subSelected].thumbnails.large.url}
        ></Pic>
        <Lijst>
          <ul>
            {pics
              .filter((p) => p.category === 'work')
              .map((p, i) => {
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
  left: 41%;

  p {
    cursor: pointer;
    padding: 0 0.4rem;
  }
  svg {
    margin-top: 3px;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
const Uitleg = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* padding: 2rem; */
  /* padding-left: 0; */

  width: 35%;
  top: 70px;
  position: absolute;

  p {
    /* font-size: 10px; */
    opacity: 0.6;
  }
  h4 {
    margin-bottom: 1rem;
    color: black;
  }
`;
const Pic = styled.img`
  //outline: 1px solid #333;
  height: 50vh;
  width: 300px;
  object-fit: cover;
  margin: 0 4rem;
  margin-left: calc(35% + 4rem);
`;
const Lijst = styled.div`
  /*  THIS IS TO HAVE IT NICELY NEXT TO THE PICTURE */
  /* display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center; */

  position: absolute;
  right: 10px;
  top: 70px;
  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
  }
`;
const Big = styled.div`
  margin-top: 6rem;
  width: calc(50vw + 300px - 4rem);
  display: flex;
  position: relative;
  @media (max-width: ${(props) => props.theme.medium}) {
    display: none;
  }
`;
const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  img {
    height: 90vh;
    width: auto;
    margin: auto;
  }
`;
export default WorkSection;
