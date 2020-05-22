import React from 'react';
import Menu from './Menu';
import T from './Translation';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Menu></Menu>
      <T id="title" />
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default Layout;
