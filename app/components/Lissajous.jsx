import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import liss from '../resources/liss.png';

const LissajousProjectDiv= styled.div
`

`

const LissajousProjectHeader = styled.h1
`
  text-align: left;
  font-size: 40px;
  padding-left: 20px;
`

const LissajousProjectBody = styled.div
`
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
`
const LissajousDiv = styled.div
`
  padding-bottom: 20px;

`

class LissajousProject extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
    <LissajousProjectDiv>
      <LissajousProjectHeader>
        Lissajous Curves Visualizer
      </LissajousProjectHeader>
      <LissajousProjectBody>
        <p>This project was to visualize Lissajous Curves using the p5.js Javascript library. Created in a couple of days, this was a fun project to work on and practice visualizing graphics in a 2D space.</p>
        <br/>
        <p>Find out more on <a target="_blank" href="https://github.com/codemasa/LissajousCurves">GitHub</a></p>
      </LissajousProjectBody>
      <LissajousDiv>
        <img width={500} src={liss}/>
      </LissajousDiv>
    </LissajousProjectDiv>
    )
  }
}

export default LissajousProject;
