import React from 'react';
import { Image } from './index';
import styled from 'styled-components';

const Caroussel = () => {
  const imagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Scroll>
      {imagesArr.map((a) => {
        return (
          <ScrollItem key={a}>
            <Image imageId={a.toString()} showName></Image>
          </ScrollItem>
        );
      })}
    </Scroll>
  );
};

const Scroll = styled.ul`
  scroll-snap-type: x mandatory;
  display: flex;
  width: calc(50vw + 300px + 100px);
  height: calc(100vh - 14rem);
  overflow-x: scroll;
  margin-left: -100px;
  /* padding-left: 100px; */
  list-style: none;
`;
const ScrollItem = styled.li`
  flex: none;
  div {
    height: 100%;
    scroll-snap-align: start;
    width: calc(50vw + 300px + 100px);
  }
  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;
export default Caroussel;
