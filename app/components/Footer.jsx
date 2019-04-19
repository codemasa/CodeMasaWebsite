import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";


const Footer = styled.footer`
  color: #feda6a
  z-index: 100;
  position: flex;
  max-width: 100vw;
  min-height: 30px;
  padding: 1em 5em;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, rgba(57,63,77,1) 0%, rgba(29,30,34,1) 7%);
`
const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  float: right;
`
const MenuLink = styled.li`
  margin-left: 2em;
  text-decoration: none;
`
export default () => (

  <Footer>
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
