import React, { useRef, useEffect, useState } from 'react';
import { Image } from './index';
import styled from 'styled-components';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';

const Caroussel = ({ projects }) => {
  const ref = useRef();
  const firstRef = useRef();
  const lastRef = useRef();

  const [showBackArrow, setShowBackArrow] = useState(false);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // no intersection obsrever, always show arrows
      setShowBackArrow(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBackArrow(false);
        } else {
          setShowBackArrow(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    if (firstRef.current) {
      observer.observe(firstRef.current);
    }
  }, [firstRef]);

  const [showNextArrow, setShowNextArrow] = useState(true);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // no intersection obsrever, always show arrows
      setShowNextArrow(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowNextArrow(false);
        } else {
          setShowNextArrow(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    if (lastRef.current) {
      observer.observe(lastRef.current);
    }
  }, [lastRef]);

  const scrollNext = () => {
    ref.current.scrollBy({
      top: 0,
      left: ref.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollPrevious = () => {
    ref.current.scrollBy({
      top: 0,
      left: -ref.current.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollWrapper>
      <Scroll ref={ref}>
        <div ref={firstRef}></div>
        <PictureContext.Provider value={projects}>
          {projects.map((project) =>
            project.pic.map((_, imageIndex) => (
              <ScrollItem key={`${project.id}-${imageIndex}`}>
                <Image
                  imageId={project.id.toString()}
                  imageIndex={imageIndex}
                  showName
                ></Image>
              </ScrollItem>
            ))
          )}
        </PictureContext.Provider>
        <div ref={lastRef}></div>
      </Scroll>
      {showBackArrow && (
        <PreviousButton onClick={scrollPrevious}>←</PreviousButton>
      )}
      {showNextArrow && <NextButton onClick={scrollNext}>→</NextButton>}
    </ScrollWrapper>
  );
};

Caroussel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      pic: PropTypes.array.isRequired,
    })
  ).isRequired,
};

const ScrollWrapper = styled.div`
  margin-left: calc(-50vw + 300px + 175px);
  width: calc(100vw - 175px);
  position: relative;
  height: calc(100vh - 14rem);
  @media (max-width: ${(props) => props.theme.medium}) {
    margin-left: -10vw;
    width: 100vw;
  }
  @media (min-width: ${(props) => props.theme.medium}) {
    display: none;
  }
`;
const NextButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  cursor: pointer;
  color: var(--light);
  font-weight: 100;
  right: 0;
  padding: 20px;
  top: 50%;
  outline: none;
  font-size: 2rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;

    color: var(--darker-text);
  }
  @media (max-width: ${(props) => props.theme.medium}) {
    right: 0;
  }
`;

const PreviousButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  cursor: pointer;
  color: var(--light);
  padding: 20px;
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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: scroll;

  /* padding-left: 100px; */
  list-style: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  overflow: -moz-scrollbars-none; /* Firefox */
  scrollbar-width: none; /* Firefox 64 */
  -ms-overflow-style: none; /* IE */

  @media (max-width: ${(props) => props.theme.medium}) {
    margin-left: 0;
    width: 100vw;
  }
`;
const ScrollItem = styled.li`
  padding: 0;
  flex: none;
  div {
    height: 100%;
    scroll-snap-align: start;
    width: calc(100vw - 175px);

    @media (max-width: ${(props) => props.theme.medium}) {
      margin-left: 0;
      width: 100vw;
    }
  }
  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;
export default Caroussel;
