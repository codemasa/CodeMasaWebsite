import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ResumeDiv = styled.div
`
  text-decoration: none;

`

const ResumeHeaderLeft = styled.div
`
  float: left;
  text-align: left;
  font-size: 2vw;
  padding-left: 20px;
`

const ResumeHeaderRight = styled.div
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

class Resume extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
    <ResumeDiv>
      <ResumeHeaderLeft>
        <h1>Cody-Joe Abe</h1>
      </ResumeHeaderLeft>
      <ResumeHeaderRight>
        <p>Location: Bay Area, CA</p>
      </ResumeHeaderRight>
      <Clear/>
      <ResumeHeaderLeft>
        <h1>Work Experience</h1>
      </ResumeHeaderLeft>
      <ClearDiv/>
      <ResumeHeaderLeft>
        <h2>Freelance Web Developer</h2>
        <p>• Fullstack development using NodeJS and ReactJS</p>
        <p>• Built responsive webapps including this website</p>
        <p>• Utilized both MySql and MongoDB</p>

      </ResumeHeaderLeft>
      <ResumeHeaderRight>
        <p>February 2019 - Present</p>
      </ResumeHeaderRight>
      <ClearDiv/>
      <ResumeHeaderLeft>
        <h2>University of Oregon NSF Research Grant</h2>
        <h2>Coding and Scripting Specialist</h2>
        <p>• Assisted in a study by creating scripts to</p><p>facilitate the rate of information gathering</p>
        <p>• Improved rate of data collection by 100%</p>
        <p>• Improved existing scripts from O(n2) to O(n) time</p>
        <p>• Collaborated cohesively with other employees of grant</p>
        <p>• Contributed in solving various efficiency-based problems</p>
      </ResumeHeaderLeft>
      <ResumeHeaderRight>
        <p>Eugene, OR</p>
        <p>November 2017 - April 2018</p>
      </ResumeHeaderRight>
      <Clear/>
      <ResumeHeaderLeft>
        <h1>Education</h1>
      </ResumeHeaderLeft>
      <ClearDiv/>
      <ResumeHeaderLeft>
        <h2>University of Oregon</h2>
      </ResumeHeaderLeft>
      <ResumeHeaderRight>
        <p>Eugene, OR</p>
      </ResumeHeaderRight>
      <ClearDiv/>
      <ResumeHeaderLeft>
        <h2>College of Arts and Sciences</h2>
        <p>B.S., Computer and Information Science; Business Administration Minor</p>
      </ResumeHeaderLeft>
      <ResumeHeaderRight>
        <p>September 2014 - July 2018</p>
      </ResumeHeaderRight>
      <Clear/>
      <ResumeHeaderLeft>
        <h1>Programming languages and tech:</h1>
      </ResumeHeaderLeft>
      <ClearDiv/>
      <ResumeHeaderLeft>
        <h2>Strong</h2>
        <p>Java, Javascript, Swift, Kotlin, Python, SQL, HTML, (S)CSS</p>
      </ResumeHeaderLeft>
      <ClearDiv/>
      <ResumeHeaderLeft>
        <h2>Familiar</h2>
        <p>C, C++, PHP, Ruby</p>
      </ResumeHeaderLeft>
      <ClearDiv/>
      <ResumeHeaderLeft>
        <h2>Other</h2>
        <p>SQLite, MySQL, MongoDB, Android Studio, Xcode, Shell, Git, ReactJS, AngularJS, NodeJS, Rails, Heroku, AWS</p>
      </ResumeHeaderLeft>
      <Clear/>

    </ResumeDiv>
    )
  }
}

export default Resume;
