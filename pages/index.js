import React from 'react';
import Head from 'next/head';
import {
  Layout,
  Hero,
  About,
  Expo,
  Contact,
  Work,
  Observer,
} from '../components';
import { getDataFromAirtable } from '../utils';
import { TranslationContext, PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';

const IndexPage = ({ translations, pics }) => {
  return (
    <PictureContext.Provider value={pics}>
      <TranslationContext.Provider value={translations}>
        <Layout>
          <Head>
            <title>Winke</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
          </Head>
          <Hero></Hero>
          <Observer id="about">
            <About></About>
          </Observer>
          <Observer id="work">
            <Work></Work>
          </Observer>
          <Observer id="expo">
            <Expo></Expo>
          </Observer>
          <Observer id="contact">
            <Contact></Contact>
          </Observer>
        </Layout>
      </TranslationContext.Provider>
    </PictureContext.Provider>
  );
};

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return { props: data };
};

IndexPage.propTypes = {
  translations: PropTypes.array.isRequired,
  pics: PropTypes.array.isRequired,
};
export default IndexPage;
