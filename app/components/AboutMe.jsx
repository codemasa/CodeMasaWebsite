import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AboutMeDiv = styled.div
`
  text-decoration: none;

`

const AboutMeLeft = styled.div
`
  float: left;
  text-align: left;
  font-size: 2vw;
  padding-left: 20px;
`

const AboutMeRight = styled.div
`
  float: right;
  text-align: right;
  font-size: 2vw;
  padding-right: 20px;
`
const Clear = styled.div
`
  margin-top: 1em;
  clear: both;
  margin-bottom: 1em;

`
const ClearDiv = styled.div
`
  margin-top: .5em;
  clear: both;
  margin-bottom: .5em;

`

class AboutMe extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
    <AboutMeDiv>
      <AboutMeLeft>
        <p>I like music and I play multiple instruments. I am not bragging or anything. Its just the piano, guitar, bass, ukulele, and I sing.</p><br/>
        <p>I love movies and like to pretend I am a screenwriter from time to time. I want to direct a short film one day, but maybe not. </p><br/>
        <p>My love for comedy leads me to daydream of being a stand-up comic, and that of my interests is sadly the one that is the most attainable. </p>
        <br/>
        <br/>
        <p>Do NOT contact me with unsolicited services or offers.</p>
      </AboutMeLeft>

    </AboutMeDiv>
    )
  }
}

export default AboutMe;
