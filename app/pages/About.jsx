import React from 'react';
import Helmet from 'react-helmet-async';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import AboutMe from '../components/AboutMe.jsx';

const About = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      <AboutMe/>
    </Contents>

  </Page>
)
export default About
