import React from 'react';
import Helmet from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import SSCProject from '../components/SSCProject.jsx';
import LissajousProject from '../components/Lissajous.jsx';
import TakeANoteProject from '../components/TakeANote.jsx';
import FoodOrder from '../components/FoodOrder.jsx';
import Form from '../components/Form.jsx';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

import styled from 'styled-components';
import liss from '../resources/liss.png';
import food from '../resources/food.png';
import ssc from '../resources/ssc.png';
import tan from '../resources/TaN.png';
import krab from '../resources/krab.png';
import res from '../resources/res.png';

const Main = styled.main
`
  position: relative;
  z-index: 3;
  overflow: hidden;
  text-align: left  ;
  background-color: #393f4d;
  color: #feda6a;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 10px 54px -11px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 54px -11px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 54px -11px rgba(0,0,0,0.75);
`
const Gallery = styled.div
`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 75vw;
  width: 95%;
  margin: 180px auto 0px auto;
  -webkit-box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);
  -moz-box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);
  box-shadow: 0px 10px 20px -11px rgba(0,0,0,0.9);

  div{
  width: 100%;
  height: 100%;
  position: relative;
   overflow: hidden;
   filter: grayscale(83%);
 }
`

const Section = styled.section
`
  width: 70%;
  padding: 90px 0;
  margin: 50px auto 150px auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  h2{
    font-size: 3vw;
    color: #ddd;
    text-transform: uppercase;
    line-height: 4.2rem;
    padding-right: 10px;
    border-right: 3px solid #FFF;
  }
  div{
    position: relative;
    p{
      padding-left: 20px;
    }
  }
`

const GalleryItemOne = styled(NavLink)
`
  background: url(${food}?v=0);
  background-size: 160%;
  grid-column-end: span 2;
  grid-row-end: span 2;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`

const GalleryItemTwo = styled(NavLink)
`
  background: url(${liss}?v=0);
  background-size: 160%;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`
const GalleryItemThree = styled(NavLink)
`
  background: url(${res}?v=0);
  background-size: 160%;
  &:hover{
    background-size: 135%;
    filter: grayscale(0%);
  }
`
const GalleryItemFour = styled(NavLink)
`
  background: url(${tan}?v=0);
  background-size: 160%;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`
const GalleryItemFive = styled(NavLink)
`
  background: url(${ssc}?v=0);
  background-size: 160%;
  &:hover{
    background-size: 105%;
    filter: grayscale(0%);
  }
`
const GalleryItemSix = styled(NavLink)
`
  background: url("${krab}?v=0");
  background-size: 160%;
  &:hover{
    background-size: 115%;
    filter: grayscale(0%);
  }
`

const Menu = styled.ul`
  display: flex;
  font-size: 2vw;
  float: left;
`
const MenuLink = styled.li`
  margin-left: 2em;
  text-decoration: none;
`

const Services = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: repeat(3,1fr);
  padding: 10px;
  div{
    text-align: center;
    background: #393f4d;
    width: 90%;
    border-radius: 10px;
    margin: 10px auto 50px auto;

    -webkit-box-shadow: 0px 10px 30px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 30px -9px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 30px -9px rgba(0,0,0,0.75);
  }
`

const Service = styled.div`
  margin: 0;
`
const ServiceTitle = styled.p
`
  font-size: 3.1vw;
  padding: 1vw 1vw 1vw 1vw;
  margin: 0;
`
const ServiceBody = styled.p
`
  font-size: 2vw;
  padding: 1vw 1vw 5vw 1vw;
`


const CodyMasaoBody = styled.p
`
  font-size: 2vw;
  padding: 0 1vw 0 4vw;
`


class Landing extends React.Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Cody Masao</title>
        </Helmet>
        <Main>

          <Section className="intro">
              <h2>Cody Masao</h2>
              <div>
                 <CodyMasaoBody>My name is Cody-Joe Abe, and I am a Software Engineer looking for a position in the San Francisco Bay area. I specialize in Fullstack Web Development and Mobile Application Development.</CodyMasaoBody>
              </div>
          </Section>

          <div>
             <Services >
                <Service>
                  <ServiceTitle>Front End</ServiceTitle>
                  <ServiceBody>I am able to build responsive front end applications using ReactJS. I have experience using the Cocoa Touch as well as Native Android and React Native frameworks.</ServiceBody>
                </Service>
                <Service>
                <ServiceTitle>Back End</ServiceTitle>
                <ServiceBody>I have experience in maintaining both MySQL as well as MongoDB database servers. I also have web deployment experience in Heroku and AWS.</ServiceBody>

                </Service>
                <Service>
                  <ServiceTitle>Services</ServiceTitle>
                  <ServiceBody>I am able to help you in developing any Web Application idea that you may have. I can also provide guidance for any quetions anyone may have on the subject of web development or programming in general. </ServiceBody>

                </Service>
              </Services>

            </div>



          <Gallery>

            <GalleryItemOne
            to="/projects"
            exact activeClassName="active"/>
            <GalleryItemTwo
            to="/projects"
            exact activeClassName="active"/>
            <GalleryItemThree
            to="/home"
            exact activeClassName="active"/>
            <GalleryItemFour
            to="/projects"
            exact activeClassName="active"/>
            <GalleryItemFive
            to="/projects"
            exact activeClassName="active"/>
            <GalleryItemSix
            to="/projects"
            exact activeClassName="active"/>
          </Gallery>

          <Section>
              <h2>About Me</h2>
              <div>
                <p>I like music and I play multiple instruments. I am not bragging or anything. Its just the piano, guitar, bass, ukulele, and I sing.</p>
                <p>I love movies and like to pretend I am a screenwriter from time to time. I want to direct a short film one day, but maybe not. </p>
                </div>
          </Section>



          <Section>
              <h2>Socials</h2>
              <Menu>
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

          </Section>

          <Section>
              <h2>Contact Me</h2>
              <div>
                <p> For business inquiries: codemasacode@gmail.com </p>
              </div>

          </Section>


        </Main>
      </Page>
    );
  }
}

export default Landing;
