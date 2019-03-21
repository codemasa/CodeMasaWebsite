import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TakeANoteProjectDiv = styled.div
`

`

const TakeANoteProjectHeader = styled.h1
`
  text-align: left;
  font-size: 40px;
  padding-left: 20px;
`

const TakeANoteProjectBody = styled.div
`
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
`
const TakeANoteDiv = styled.div
`
  padding-bottom: 20px;

`

class TakeANoteProject extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
    <TakeANoteProjectDiv>
      <TakeANoteProjectHeader>
        Take A Note Android Application
      </TakeANoteProjectHeader>
      <TakeANoteProjectBody>
        <p>This project was to test my chops at mobile development for Android. I decided that a note-taking app for movies with a similar UI to texting was the way to do it. I love movies, and I love talking about movies, but when it comes to remembering every single detail, it is hard to do that without taking notes. In an era of live tweeting, I felt like this method of taking notes would be similar enough so that the train of thought can keep flowing.</p>
        <br/>
        <p>Find out more on <a target="_blank" href="https://github.com/codemasa/TakeANote">GitHub</a></p>
      </TakeANoteProjectBody>
      <TakeANoteDiv>
      </TakeANoteDiv>
    </TakeANoteProjectDiv>
    )
  }
}

export default TakeANoteProject;
