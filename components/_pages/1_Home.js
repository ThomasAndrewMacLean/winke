import React, { useContext } from 'react';
import { Section } from '../../styles';
import { Image, T } from '../index';
import { ImageWrap } from '../Image';
import { TranslationContext, PictureContext } from '../../utils/contexts';

import styled from 'styled-components';

const Hero = () => {
  const translationsFromContext = useContext(TranslationContext) || [];
  const imagesFromContext = useContext(PictureContext) || [];
  const telephoneNumber = translationsFromContext.find(
    (t) => t.id === 'telephone'
  )['NL zonder opmaak'];
  const homeImageId = imagesFromContext.find((x) => x.home).id.toString();

  const instagramlink = translationsFromContext.find(
    (t) => t.id === 'instagramlink'
  )['NL zonder opmaak'];

  const facebooklink = translationsFromContext.find(
    (t) => t.id === 'facebooklink'
  )['NL zonder opmaak'];
  return (
    <HeroSection>
      <Image imageId={homeImageId}>
        <Overlay>
          <T translationKey="heroText" />
        </Overlay>
      </Image>
      {/* <h2>
        <T translationKey="heroText"></T>
      </h2> */}
      <address>
        <div className="socialIcons">
          <a href={facebooklink} target="_blank" rel="noopener noreferrer">
            <img src="icon-facebook.svg"></img>
          </a>
          <a href={instagramlink} target="_blank" rel="noopener noreferrer">
            <img src="icon-instagram.svg"></img>
          </a>
        </div>
        {/* <T translationKey="address" /> */}
        <a href={'tel:' + telephoneNumber}>
          <T translationKey="telephone" />
        </a>
        <T translationKey="email" />
      </address>
    </HeroSection>
  );
};
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem 4rem;
  color: var(--darker-text);
  text-shadow: 0 0 5px white;
  background: var(--white-opaque);
  font-size: 1.2rem;
  width: 100%;
  font-weight: 100;
  text-align: right;
`;
const HeroSection = styled(Section)`
  ${ImageWrap} {
    position: absolute;
    right: calc(-50vw + 300px + 4rem);

    @media (max-width: ${(props) => props.theme.medium}) {
      left: 0;
      right: 0;
    }
  }
  display: flex;
  align-items: center;
  padding-top: 0;
  position: relative;
  p {
    line-height: 2rem;
    font-size: 1.3rem;
    font-weight: 200;
    color: var(--grey-blue);
  }
  img {
    max-height: 60vh;
    width: calc(50vw + 300px - 4rem);
    object-fit: cover;
    @media (max-width: ${(props) => props.theme.medium}) {
      width: 100%;
    }
  }
  ${ImageWrap} {
    margin-left: auto;
    @media (max-width: ${(props) => props.theme.small}) {
      width: 100vw;
      left: -10vw;
      margin-left: 0 !important;
    }

    img {
      background: #666732;
      /* animation: zoom 15s infinite; */
    }
  }

  address {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.medium}) {
    address {
      .socialIcons {
        img {
          margin-right: 1rem;
          margin-bottom: 1rem;
          width: 18px;
          height: 18px;
          opacity: 0.7;
        }
      }
      position: absolute;
      display: block;
      bottom: 2rem;
      a {
        font-weight: 400;
      }
      a,
      p {
        line-height: 1.5rem;
        font-size: 14px !important;
      }
    }
  }
`;

export default Hero;
