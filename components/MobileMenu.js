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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
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
    color: var(--grey-blue);
    padding: 2rem;
    position: relative;
    outline: none;
    background: #ffffffa3;
    border-radius: 50%;
  }
  position: absolute;

  margin-left: -2rem;
  box-sizing: border-box;
  left: 10vw;

  ul {
    margin-left: 0;
    transition: all 300ms ease;
    pointer-events: ${(props) => (props.showMenu ? 'all' : 'none')};
    opacity: ${(props) => (props.showMenu ? '1' : '0')};
    background: white;
    width: 100vw;
    position: fixed;
    left: 0;
    padding: 7rem;
    list-style: none;
    top: ${(props) => (props.showMenu ? '0' : 'calc(-100% - 10rem)')};
  }
  li {
    padding: 1rem 0;
    a {
      text-decoration: none;
    }
  }
  @media (min-width: ${(props) => props.theme.medium}) {
    display: none;
  }
`;
const NavLink = styled.li``;
export default MobileMenu;
