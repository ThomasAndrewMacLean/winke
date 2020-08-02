import React from 'react';
import Head from 'next/head';
import {
  Layout,
  Hero,
  Resources,
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
  return (
    <BomenContext.Provider value={projects}>
      <PictureContext.Provider value={pics.filter((p) => p.name)}>
        <TranslationContext.Provider value={translations.filter((x) => x.id)}>
          <Layout>
            <Head>
              <title>Winke</title>
              <base target="_blank"></base>
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
              <Resources></Resources>
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
  return { props: data };
};

IndexPage.propTypes = {
  translations: PropTypes.array.isRequired,
  pics: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
};
export default IndexPage;
