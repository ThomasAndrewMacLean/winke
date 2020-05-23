import React from 'react';
import Head from 'next/head';
import { Layout, T } from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Winke - about</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <h2>
        <T translationKey="aboutTitle" />
      </h2>

      <T translationKey="aboutText" />
    </Layout>
  );
};

export default IndexPage;
