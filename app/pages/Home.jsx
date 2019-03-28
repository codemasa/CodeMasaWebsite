import React from 'react';
import Helmet from 'react-helmet-async';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import Resume from '../components/Resume.jsx';

const Home = () => (
  <Page>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <Contents>
      <Resume/>
    </Contents>

  </Page>
)
export default Home
