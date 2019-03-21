import React from 'react'
import Helmet from 'react-helmet-async'
import Page from '../components/Page.jsx'
import Contents from '../components/Contents.jsx'

const About = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <Contents>
      Who is Cody Abe?
    </Contents>

  </Page>
)
export default About
