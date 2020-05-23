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

const Title = styled.h2``;

PageTitle.propTypes = {
  titleName: PropTypes.string.isRequired,
};
export default PageTitle;
