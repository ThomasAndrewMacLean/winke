import React, { useContext } from 'react';
import { Section } from '../styles';
import { Image, T } from './index';
import { ImageWrap } from './Image';
import { TranslationContext, PictureContext } from '../utils/contexts';

import styled from 'styled-components';

const Hero = () => {
  const translationsFromContext = useContext(TranslationContext) || [];
  const imagesFromContext = useContext(PictureContext) || [];
  const telephoneNumber = translationsFromContext.find(
    (t) => t.id === 'telephone'
  )['NL zonder opmaak'];
  console.log(imagesFromContext);
  const x = imagesFromContext.indexOf(imagesFromContext.find((x) => x.home));
  return (
    <HeroSection>
      <Image imageId={x}></Image>
      {/* <h2>
        <T translationKey="heroText"></T>
      </h2> */}
      <address>
        <T translationKey="address" />
        <a href={'tel:' + telephoneNumber}>
          <T translationKey="telephone" />
        </a>
        <T translationKey="email" />
      </address>
    </HeroSection>
  );
};

const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  padding-top: 0;
  position:relative;
  p {
    line-height: 2rem;
    font-size: 1.3rem;
    font-weight: 200;
    color: var(--grey-blue);
  }
img{
  max-height:80vh;
}
  ${ImageWrap} {
    margin-left: auto;
    /* @media (max-width: ${(props) => props.theme.medium}) {
      width: 175%;
    } */
  }

    address{
      display: none;
    }
    @media (max-width: ${(props) => props.theme.medium}) {
      address{
        position: absolute;
        display: block;
        bottom: 4rem;
        a{
          font-weight: 400;
        }
        a,p{
          line-height: 1.5rem;
        font-size: 14px !important;
        }
      }
    } 
`;

export default Hero;