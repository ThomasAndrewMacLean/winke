import React from 'react';
import PropTypes from 'prop-types';

import { Menu, T } from './index';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <header>
        <Menu></Menu>
        <Title>
          <T translationKey="title" />
        </Title>
      </header>
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Main = styled.main`
  // background: lightcoral;
  width: ${(props) => `calc(100vw -  ${props.theme.menuWidth})`};
  margin-left: ${(props) => props.theme.menuWidth};
  padding: 5rem 8rem;
`;

const Title = styled.div`
  position: fixed;
  right: 0;
  top: 0;
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
