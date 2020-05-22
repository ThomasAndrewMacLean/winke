import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Winke - work</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <h1>work</h1>
    </Layout>
  );
};

export default IndexPage;
