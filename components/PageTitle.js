import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { T } from './index';

const PageTitle = ({ titleName }) => {
  return (
    <Title>
      <T translationKey={titleName}></T>
    </Title>
  );
};

const Title = styled.h2`
  opacity: 0;
  @media (max-width: ${(props) => props.theme.medium}) {
    opacity: 1;
  }
`;

PageTitle.propTypes = {
  titleName: PropTypes.string.isRequired,
};
export default PageTitle;
