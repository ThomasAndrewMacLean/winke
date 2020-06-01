import React, { useContext, useState } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import { getImageUrl, getImageName } from '../utils';
import styled from 'styled-components';

const Image = ({ imageId, showName }) => {
  const [click, clickSet] = useState(false);
  const pics = useContext(PictureContext);
  return (
    <ImageWrap showName={showName} onClick={() => clickSet(!click)}>
      <img src={getImageUrl(pics, imageId, true)}></img>

      {showName && click && (
        <ImageName>
          <span>{getImageName(pics, imageId)}</span>
        </ImageName>
      )}
    </ImageWrap>
  );
};

export const ImageWrap = styled.div`
  position: relative;
  cursor: ${(props) => props.showName && 'help'};
`;
const ImageName = styled.span`
  background: #ffffff80;
  color: #333;
  text-shadow: 0px 0px 3px #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
Image.propTypes = {
  imageId: PropTypes.string.isRequired,
  showName: PropTypes.bool,
};

export default Image;
