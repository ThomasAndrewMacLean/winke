import React, { useContext } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TranslationContext } from '../utils/contexts';

const Docs = ({ tab }) => {
  const translationsFromContext = useContext(TranslationContext) || [];
  const docsFromContext = translationsFromContext.find(
    (t) => t.id === tab + 'Documenten'
  );

   if (
    !docsFromContext ||
    !docsFromContext.documents ||
    !docsFromContext.documents.length
  ) {
    return null;
  }

  return (
    <ul>
      {docsFromContext.documents.map((x, i) => {
        console.log(x);
        return (
          <li key={i}>
            <a href={x.url} download={x.filename}>
              {x.filename}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Docs.propTypes = {
  tab: PropTypes.string.isRequired,
};
export default Docs;
