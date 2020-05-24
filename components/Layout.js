import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Menu, T, Footer } from './index';
import styled from 'styled-components';
import { useStore } from '../store';

const Layout = ({ children }) => {
  const ref = useRef();
  const { setAreAtTop } = useStore();
  useEffect(() => {
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
        <Menu></Menu>

        <Title href="#home">
          <T translationKey="title" />
        </Title>
      </Header>
      <Main>
        <Top ref={ref}></Top>
        {children}
      </Main>
      <Footer></Footer>
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
  width: 100vw;
  scroll-behavior: smooth;
`;

const Title = styled.a`
  text-decoration: none;
  color: var(--grey-blue);
  position: fixed;
  right: 0;
  top: 0;
  padding: 2rem 4rem;
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
