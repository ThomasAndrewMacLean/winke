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
      <main>{children}</main>
    </Wrapper>
  );
};

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
