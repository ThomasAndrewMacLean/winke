import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useStore } from '../store';

const Menu = () => {
  const { currentNavLink, setCurrentNavLink } = useStore();

  return (
    <Nav>
      <ul>
        <NavLink
          onClick={() => setCurrentNavLink('/about')}
          activeLink={currentNavLink === '/about'}
        >
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavLink>
        <NavLink
          onClick={() => setCurrentNavLink('/work')}
          activeLink={currentNavLink === '/work'}
        >
          <Link href="/work">
            <a>Work</a>
          </Link>
        </NavLink>
        <NavLink
          onClick={() => setCurrentNavLink('/expo')}
          activeLink={currentNavLink === '/expo'}
        >
          <Link href="/expo">
            <a>Expo</a>
          </Link>
        </NavLink>
        <NavLink
          onClick={() => setCurrentNavLink('/contact')}
          activeLink={currentNavLink === '/contact'}
        >
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </NavLink>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 20vw;
  height: 100vh;
  background: whitesmoke;
  ul {
    list-style: none;
  }
`;

const NavLink = styled.li`
  text-align: right;
  font-size: 14px;
  cursor: pointer;
  transition: padding-left 500ms ease-in-out;
  padding-left: ${(props) => props.activeLink && '100%'};
  color: ${(props) => (props.activeLink ? '#444' : 'var(--light)')};
  a {
    text-decoration: none;
    color: ${(props) => (props.activeLink ? '#444' : 'var(--light)')};
    &:hover {
      color: ${(props) => (props.activeLink ? '#444' : ' #666')};
    }
  }
`;
export default Menu;
