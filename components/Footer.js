import React, { useContext } from 'react';
import styled from 'styled-components';
import { TranslationContext } from '../utils/contexts';
import { T } from './index';

const Footer = () => {
  const translationsFromContext = useContext(TranslationContext) || [];
  const telephoneNumber = translationsFromContext.find(
    (t) => t.id === 'telephone'
  )['NL zonder opmaak'];
  return (
    <SiteFooter>
      <span className="copyright">
        <a href="/privacy" target="_blank">
          privacy terms
        </a>
        <br />© 2010-{new Date().getFullYear()} Winke Besard
      </span>

      <address>
        {/* <T translationKey="address" /> */}
        <div className="socialIcons">
          <a>
            <img src="icon-facebook.svg"></img>
          </a>
          <a>
            <img src="icon-instagram.svg"></img>
          </a>
        </div>
        {/* <a href={'tel:' + telephoneNumber}>
          <T translationKey="telephone" />
        </a> */}
        <T translationKey="email" />
        made by westerling & maclean
      </address>
    </SiteFooter>
  );
};

const SiteFooter = styled.footer`
  pointer-events: none;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 12px;

  padding: 2rem 4rem;
  address {
    text-align: right;
    pointer-events: all;
  }
  .copyright {
    font-size: 10px;
    pointer-events: all;
    line-height: 1.5rem;
  }

  .socialIcons {
    img {
      height: 25px;
      opacity: 0.7;
    }
    a {
      padding-left: 1rem;
      padding-bottom: 0.5rem;
      display: inline-block;
    }
  }

  @media (max-width: ${(props) => props.theme.medium}) {
    /* transform: translateX(-100%); */
    width: 80%;
    padding: 2rem 0;
    position: inherit;
    margin: auto;
  }
`;
export default Footer;
