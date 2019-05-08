import React from 'react';
import Helmet from 'react-helmet-async';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import Project from '../components/Project.jsx';
import liss from '../resources/liss.png';
import SevenSegmentCounter from 'seven-segment-counter';
const buttonTags = {increment: "+", decrement:"-"};


const Projects = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      <Project>
        <h1>
          Food Order
        </h1>
        <div>
          <p> Send your friends an order to make you food. Include special instructions for them. You can email them out of the blue as a prank, or make special arrangements, either way this is a great tool for sending random emails to your friends to think they are being spammed! </p>
          <br/>
          <p>Find out more on <a target="_blank" href="https://github.com/codemasa/FoodSelectionWebApp">GitHub</a> or <a target="_blank" href="https://food-order-web-app.herokuapp.com">Demo</a></p>

        </div>

        <h1>
          Take A Note Android Application
        </h1>
        <div>
          <p>This project was to test my chops at mobile development for Android. I decided that a note-taking app for movies with a similar UI to texting was the way to do it. I love movies, and I love talking about movies, but when it comes to remembering every single detail, it is hard to do that without taking notes. In an era of live tweeting, I felt like this method of taking notes would be similar enough so that the train of thought can keep flowing.</p>
          <br/>
          <p>Find out more on <a target="_blank" href="https://github.com/codemasa/TakeANote">GitHub</a> or <a target="_blank" href="https://play.google.com/store/apps/details?id=com.codemasa.codyabe.takeanote">Beta Test on Android!</a></p>
        </div>
        <div>
        </div>

        <h1>
          Seven Segment Counter Node Module
        </h1>
        <div>
          <p>This project was inspired by the Seven Segment Display on this <a target="_blank" href="https://youtu.be/MlRlgbrAVOs">YouTube video</a> by the "The Coding Train" and I extended it to be a counter. I also added the feature of being able to set it to a certain value programmatically as well as the ablilty to change its color scheme.</p>
          <br/>
          <p>Find out more on <a target="_blank" href="https://github.com/codemasa/sevensegmentcounter">GitHub</a> or <a target="_blank" href="https://www.npmjs.com/package/seven-segment-counter">NPM</a></p>

        </div>
        <div>
          <SevenSegmentCounter buttonClass="buttonClass" buttonTag={buttonTags} width={200} onColor={"#feda6a"} offColor={"#654202"} backgroundColor={"#393f4d"}/>
        </div>

        <h1>
          Lissajous Curves Visualizer
        </h1>
        <div>
          <p>This project was to visualize Lissajous Curves using the p5.js Javascript library. Created in a couple of days, this was a fun project to work on and practice visualizing graphics in a 2D space.</p>
          <br/>
          <p>Find out more on <a target="_blank" href="https://github.com/codemasa/LissajousCurves">GitHub</a></p>
        </div>
        <div>
          <img width={"50%"} src={liss}/>
        </div>
      </Project>
    </Contents>

  </Page>
)
export default Projects
