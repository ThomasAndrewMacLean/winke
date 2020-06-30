import React, { useContext, useState } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import { getImageUrl, getImageName, getImageDescriptions } from '../utils';
import styled from 'styled-components';
import marked from 'marked';

const Image = ({ imageId, showName, children }) => {
  const [click, clickSet] = useState(false);
  const pics = useContext(PictureContext);
  return (
    <ImageWrap showName={showName} onClick={() => clickSet(!click)}>
      <img src={getImageUrl(pics, imageId, true)}></img>
      {children}
      {showName && click && (
        <ImageName>
          <h4>{getImageName(pics, imageId)}</h4>
          <span
            dangerouslySetInnerHTML={{
              __html: marked(getImageDescriptions(pics, imageId)),
            }}
          ></span>
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
  h4 {
    margin-bottom: 1rem;
  }
  background: #ffffffdd;
  color: #333;
  text-shadow: 0px 0px 3px #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;

  padding: 5rem;
  justify-content: center;
  align-items: center;
  opacity: 1;
  margin: auto;
  line-height: 1.5rem;
  text-align: center;
  &:hover,
  &:focus {
  }
`;
Image.propTypes = {
  imageId: PropTypes.string.isRequired,
  showName: PropTypes.bool,
};

export default Image;
