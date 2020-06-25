import React from 'react';
import styled from 'styled-components';
import { T } from '../components';
import { getDataFromAirtable } from '../utils';
import { TranslationContext } from '../utils/contexts';
import PropTypes from 'prop-types';

const PrivacyPage = ({ translations }) => {
  return (
    <TranslationContext.Provider value={translations}>
      <Page>
        <T translationKey="privacy"></T>
      </Page>
    </TranslationContext.Provider>
  );
};

const Page = styled.div`
  max-width: 700px;
  padding: 3rem;
  margin: auto;

  h1,
  h2,
  h3 {
    margin-top: 2rem;
  }
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  console.log(data);
  return { props: data };
};

PrivacyPage.propTypes = {
  translations: PropTypes.array.isRequired,
};
export default PrivacyPage;
