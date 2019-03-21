import React from 'react';
import Helmet from 'react-helmet-async';
import Page from '../components/Page.jsx';
import Contents from '../components/Contents.jsx';
import SSCProject from '../components/SSCProject.jsx';
import LissajousProject from '../components/Lissajous.jsx';
import TakeANoteProject from '../components/TakeANote.jsx';



const Projects = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      <TakeANoteProject/>
      <SSCProject/>
      <LissajousProject/>
    </Contents>

  </Page>
)
export default Projects
