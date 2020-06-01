import React from 'react';
import styled from 'styled-components';
import { T } from './index';
import { useStore } from '../store';
import { links } from '../utils/constants';

const MobileMenu = () => {
  const { mobileNavIsOpen, setMobileNav, currentNavLink } = useStore();

  return (
    <Nav showMenu={mobileNavIsOpen}>
      <button onClick={() => setMobileNav(!mobileNavIsOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-map"
        >
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
      </button>

      <ul>
        {links.map((link, index) => {
          return (
            <NavLink
              onClick={() => {
                setMobileNav(false);
              }}
              key={link + index}
              activeLink={currentNavLink === link}
            >
              <a href={'#' + link}>
                <T translationKey={link + 'Title'}></T>
              </a>
            </NavLink>
          );
        })}
      </ul>
      <BackGround
        onClick={() => {
          setMobileNav(false);
        }}
        showMenu={mobileNavIsOpen}
      ></BackGround>
    </Nav>
  );
};

const BackGround = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  right: 0;
  background: black;
  pointer-events: ${(props) => (props.showMenu ? 'all' : 'none')};
  opacity: ${(props) => (props.showMenu ? '0.1' : '0')};
`;
const Nav = styled.nav`
  button {
    background: none;
    border: none;
    z-index: 1;
    position: relative;
  }
  position: absolute;
  padding: 2rem 4rem;

  ul {
    margin-left: 0;
    transition: all 300ms ease;
    pointer-events: ${(props) => (props.showMenu ? 'all' : 'none')};
    opacity: ${(props) => (props.showMenu ? '1' : '0')};
    background: white;
    width: 100vw;
    position: absolute;
    left: 0;
    padding: 4rem;
    top: ${(props) => (props.showMenu ? '0' : 'calc(-100% - 10rem)')};
  }

  @media (min-width: ${(props) => props.theme.medium}) {
    display: none;
  }
`;
const NavLink = styled.li``;
export default MobileMenu;
