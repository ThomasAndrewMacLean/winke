import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { TranslationContext } from '../utils/contexts';

import { Menu, T, Footer, MobileMenu } from './index';
import styled from 'styled-components';
import { useStore } from '../store';

const Layout = ({ children }) => {
  const ref = useRef();
  const { setAreAtTop, areAtTop } = useStore();
  const translationsFromContext = useContext(TranslationContext) || [];
  const instagramlink = translationsFromContext.find(
    (t) => t.id === 'instagramlink'
  )['NL zonder opmaak'];

  const facebooklink = translationsFromContext.find(
    (t) => t.id === 'facebooklink'
  )['NL zonder opmaak'];
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAreAtTop(true);
        }
        if (!entry.isIntersecting) {
          setAreAtTop(false);
        }
      },
      {
        threshold: 1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);
  return (
    <Wrapper>
      <Header>
        <MobileMenu />
        <Menu></Menu>
        <Title areAtTop={areAtTop} href="#home"  target="_self">
          <T translationKey="title" />
        </Title>
        <TitleMobile areAtTop={areAtTop}>
          <a href={facebooklink} target="_blank" rel="noopener noreferrer">
            <img src="icon-facebook.svg"></img>
          </a>
          <a href={instagramlink} target="_blank" rel="noopener noreferrer">
            <img src="icon-instagram.svg"></img>
          </a>

          <T translationKey="titleMobile" />
        </TitleMobile>
      </Header>
      <Main>
        <Top ref={ref}></Top>
        {children}
        <Footer></Footer>
      </Main>
    </Wrapper>
  );
};
const Top = styled.div``;

const Header = styled.header`
  z-index: 1;
`;

const Main = styled.main`
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  scroll-behavior: smooth;
  @media (max-width: ${(props) => props.theme.medium}) {
    scroll-snap-type: inherit;
  }
`;

const TitleMobile = styled.div`
  display: flex;
  a {
    margin-right: 3rem;
    transform: rotate(90deg);
    opacity: 0.7;
    height: 40px;
    width: 40px;
  }
  color: var(--grey-blue);
  h1,
  h2 {
    font-weight: 100;
    font-size: 28px;
  }

  right: 0;
  top: 0;
  position: fixed;
  transform-origin: right bottom;
  padding: 0;
  margin-top: -2rem;
  transition: all 300ms ease;
  transform: rotate(-90deg) scale(0.5) translateY(0);
  opacity: 0;
  @media (max-width: ${(props) => props.theme.medium}) {
    opacity: 1;
    transform: ${(props) =>
      props.areAtTop
        ? 'rotate(-90deg) scale(0.5) translateY(100%)'
        : 'rotate(-90deg) scale(0.5) translateY(0)'};
  }
`;
const Title = styled.a`
  text-decoration: none;
  color: var(--grey-blue);
  position: fixed;
  right: 0;
  top: 0;
  padding: 2rem 4rem;
  transition: all 300ms ease;
  transform-origin: right bottom;
  @media (max-width: ${(props) => props.theme.medium}) {
    opacity: ${(props) => (props.areAtTop ? '1' : '0')};
    pointer-events: none;
    position: absolute;
    right: 10vw;
    // background: var(--white-opaque);
    padding-right: 0;
  }
  h1 {
    font-weight: 100;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
