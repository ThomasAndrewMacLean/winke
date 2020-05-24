import React from 'react';
import PropTypes from 'prop-types';

import { Menu, T } from './index';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <header>
        <Menu></Menu>

        <Title href="#home">
          <h1>
            <T translationKey="title" />
          </h1>
        </Title>
      </header>
      <Main>{children}</Main>
    </Wrapper>
  );
};

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
