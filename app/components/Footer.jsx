import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";


const Footer = styled.footer`
  z-index: 100;
  position: flex;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  max-height: 30vh;
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEEEAA;
`
const Brand = styled.h1`
  padding-left: 10vw;
  font-size: var(--step-up-1);
`
const Menu = styled.ul`
  padding-right: 10vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
`
const MenuLink = styled.li`
  margin-left: 2em;
  text-decoration: none;
`
export default () => (

  <Footer>
    <Brand>Cody Masao</Brand>
    <Menu>
      Socials: 
      <MenuLink>
        <a href="https://github.com/codemasa" target="_blank">
          <FaGithub/>
        </a>
      </MenuLink>
      <MenuLink>
        <a href="https://www.linkedin.com/in/codemasa" target="_blank">
          <FaLinkedin/>
        </a>
      </MenuLink>
      <MenuLink>
        <a href="https://www.twitter.com/codymasao" target="_blank">
          <FaTwitterSquare/>
        </a>
      </MenuLink>
      <MenuLink>
        <a href="https://www.twitch.tv/codemasa" target="_blank">
          <FaTwitch/>
        </a>
      </MenuLink>
    </Menu>
  </Footer>

)
