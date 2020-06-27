import React from 'react';
import Head from 'next/head';
import {
  Layout,
  Hero,
  About,
  Show,
  Contact,
  Work,
  Observer,
  Plant,
  Invasion,
} from '../components';
import { getDataFromAirtable } from '../utils';
import {
  TranslationContext,
  PictureContext,
  BomenContext,
} from '../utils/contexts';
import PropTypes from 'prop-types';

const IndexPage = ({ translations, pics, projects }) => {
  console.log(projects);
  return (
    <BomenContext.Provider value={projects}>
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
            <Observer id="home">
              <Hero></Hero>
            </Observer>

            <Observer id="work">
              <Work></Work>
            </Observer>
            <Observer id="plant a tree">
              <Plant></Plant>
            </Observer>
            <Observer id="invasion">
              <Invasion></Invasion>
            </Observer>
            <Observer id="shows">
              <Show></Show>
            </Observer>
            <Observer id="resources">
              <About></About>
            </Observer>
            <Observer id="contact">
              <Contact></Contact>
            </Observer>
          </Layout>
        </TranslationContext.Provider>
      </PictureContext.Provider>
    </BomenContext.Provider>
  );
};

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  console.log(data);
  return { props: data };
};

IndexPage.propTypes = {
  translations: PropTypes.array.isRequired,
  pics: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
};
export default IndexPage;
