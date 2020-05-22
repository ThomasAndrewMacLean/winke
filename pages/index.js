import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { T, Menu } from '../components';

const IndexPage = () => {
  return (
    <Main>
      <Head>
        <title>Winke</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Menu />
    </Main>
  );
};

const Main = styled.main`
  background: var(--background);
`;

export default IndexPage;
