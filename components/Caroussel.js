import React, { useRef } from 'react';
import { Image } from './index';
import styled from 'styled-components';

const Caroussel = () => {
  const imagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ref = useRef();
  const scrollNext = () => {
    ref.current.scrollBy({
      top: 0,
      left: window.innerWidth,
      behavior: 'smooth',
    });
  };

  const scrollPrevious = () => {
    ref.current.scrollBy({
      top: 0,
      left: -window.innerWidth,
      behavior: 'smooth',
    });
  };

  // TODO: add a dummy first and last element to Scroll and add observer to check if it is in view and hide arrows accordingly
  return (
    <ScrollWrapper>
      <Scroll ref={ref}>
        {imagesArr.map((a) => {
          return (
            <ScrollItem key={a}>
              <Image imageId={a.toString()} showName></Image>
            </ScrollItem>
          );
        })}
      </Scroll>
      <PreviousButton onClick={scrollPrevious}>←</PreviousButton>
      <NextButton onClick={scrollNext}>→</NextButton>
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.div`
  width: calc(50vw + 300px);
  position: relative;
`;
const NextButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  cursor: pointer;
  color: var(--light);
  font-weight: 100;
  right: 4rem;
  top: 50%;
  outline: none;
  font-size: 2rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;

    color: var(--darker-text);
  }
`;

const PreviousButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  cursor: pointer;
  color: var(--light);
  font-weight: 100;
  left: 0;
  top: 50%;
  outline: none;
  font-size: 2rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;

    color: var(--darker-text);
  }
`;
const Scroll = styled.ul`
  scroll-snap-type: x mandatory;
  display: flex;
  width: calc(50vw + 300px + 100px);
  height: calc(100vh - 14rem);
  overflow-x: scroll;
  margin-left: -100px;
  /* padding-left: 100px; */
  list-style: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  overflow: -moz-scrollbars-none; /* Firefox */
  scrollbar-width: none; /* Firefox 64 */
  -ms-overflow-style: none; /* IE */
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
