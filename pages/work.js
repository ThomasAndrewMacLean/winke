import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import { getDataFromAirtable } from '../utils';
import { TranslationContext } from '../utils/contexts';
const IndexPage = ({ translations }) => {
  return (
    <TranslationContext.Provider value={translations}>
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
    </TranslationContext.Provider>
  );
};

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return { props: data };
};

export default IndexPage;
