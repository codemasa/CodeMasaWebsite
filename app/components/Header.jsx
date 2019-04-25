import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import ResponsiveMenu from 'react-responsive-navbar';
import { MdMenu, MdClear } from "react-icons/md";


const Header = styled.header`
  color: #feda6a
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  min-height: 30px;
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, rgba(57,63,77,1) 0%, rgba(29,30,34,1) 7%);
`
const Brand = styled.h1`
  padding-left: 10vw;
  text-decoration: none;
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
const BrandLink = styled(NavLink)
`
  text-decoration: none
`
export default () => (

  <Header>
    <BrandLink
      to="/"
      exact activeClassName="active">
      <Brand>Cody Masao</Brand>
    </BrandLink>
    <ResponsiveMenu
      menuOpenButton={<MdMenu/>}
      menuCloseButton={<MdClear/>}
      changeMenuOn="500px"
      smallMenuClassName="small-menu"
      menu={
        <Menu>
          <MenuLink>
            <NavLink
              to="/home"
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
            >About Me</NavLink>
          </MenuLink>
        </Menu>
      }
    />

  </Header>

)
