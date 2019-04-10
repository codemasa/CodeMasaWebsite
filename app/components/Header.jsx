import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import ResponsiveMenu from 'react-responsive-navbar';

const Header = styled.header`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  height: 30px;
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEAAAA;
`
const Brand = styled.h1`
  padding-left: 10vw;
`
const Menu = styled.ul`
  padding-right: 10vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
  font-size: 15px;
`
const MenuLink = styled.li`
  margin-left: 2em;
  text-decoration: none;
`
export default () => (

  <Header>
    <Brand>Cody Masao</Brand>
    <ResponsiveMenu
      menuOpenButton={<Menu />}
      menuCloseButton={<Menu />}
      changeMenuOn="500px"
      largeMenuClassName="large-menu-classname"
      smallMenuClassName="small-menu-classname"
      menu={
        <Menu>
          <MenuLink>
            <NavLink
              to="/"
              exact activeClassName="active"
            >Home</NavLink>
          </MenuLink>
          <MenuLink>
            <NavLink
              to="/projects"
              exact activeClassName="active"
            >Projects</NavLink>
          </MenuLink>
          <MenuLink>
            <NavLink
              to="/about"
              exact activeClassName="active"
            >About</NavLink>
          </MenuLink>
        </Menu>
      }
    />

  </Header>

)
