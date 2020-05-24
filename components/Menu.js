import React from 'react';
import styled from 'styled-components';
import { T } from './index';
import { useStore } from '../store';

const Menu = () => {
  const { currentNavLink } = useStore();

  const links = ['about', 'work', 'expo', 'contact'];
  return (
    <Nav>
      <ul>
        {links.map((link, index) => {
          return (
            <NavLink key={link + index} activeLink={currentNavLink === link}>
              <a href={'#' + link}>
                <T translationKey={link + 'Title'}></T>
              </a>
            </NavLink>
          );
        })}
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  pointer-events: none;
  text-transform: lowercase;
  width: ${(props) => props.theme.menuWidth};
  margin-top: 30vh;
  position: fixed;
  ul {
    list-style: none;
  }
`;

const NavLink = styled.li`
  text-align: right;
  font-size: 14px;
  cursor: pointer;
  transition: padding-left 500ms ease-in-out;
  padding-left: ${(props) => props.activeLink && '90%'};
  color: ${(props) => (props.activeLink ? '#444' : 'var(--light)')};
  a {
    text-decoration: none;
    pointer-events: all;

    color: ${(props) => (props.activeLink ? '#444' : 'var(--light)')};
    &:hover {
      color: ${(props) => (props.activeLink ? '#444' : ' #666')};
    }
  }
`;
export default Menu;
