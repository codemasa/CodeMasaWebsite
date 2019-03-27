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
      <h1>
        <Resume/>
      </h1>
    </Contents>

  </Page>
)
export default Home
