import React, { useContext } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils';

const Image = ({ imageId }) => {
  const pics = useContext(PictureContext);
  return <img src={getImageUrl(pics, imageId, true)}></img>;
};

Image.propTypes = {
  imageId: PropTypes.string.isRequired,
};

export default Image;
