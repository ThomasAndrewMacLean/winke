import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Layout } from '../components';
import { getDataFromAirtable } from '../utils';
import { TranslationContext, PictureContext } from '../utils/contexts';

const WorkPage = ({ translations, pics }) => {
  return (
    <PictureContext.Provider value={pics}>
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
    </PictureContext.Provider>
  );
};

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return { props: data };
};

WorkPage.propTypes = {
  translations: PropTypes.array.isRequired,
  pics: PropTypes.array.isRequired,
};
export default WorkPage;
