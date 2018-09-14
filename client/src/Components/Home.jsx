import React, { Component } from 'react';
import ContentBox from './TextBoxes/ContentBox'
import NameBox from './TextBoxes/NameBox';
import ContentSection from './TextBoxes/ContentSection';
import Languages from './textboxes/Languages';
import aboutMe from '../../dist/texts/aboutme.txt';
import languages from '../../dist/texts/languages.json'
import { Segment, Button, Divider } from 'semantic-ui-react'

class Home extends Component {

  render() {
    var contents = {
      aboutMeText: aboutMe,
      languages: languages
    }
    return (
      <div>
        <ContentBox>
          <NameBox/>
          <ContentSection title='About Me' text={contents.aboutMeText}/>
          <Divider section/>
          <ContentSection title='Projects'/>
          <Divider section/>


          <Languages title='Programming Languages' languages={contents.languages.ProgrammingLanguages.Languages} year={contents.languages.ProgrammingLanguages.Years}/>
          <Divider fitted/>

          <Languages title='Frameworks & Databases' languages={contents.languages.Frameworks.Framework} year={contents.languages.Frameworks.Years}/>
          <Divider fitted/>

          <Languages title='Technologies & Methodologies' languages={contents.languages.Technologies.Tech} year={contents.languages.Technologies.Years}/>




        </ContentBox>
      </div>
    )
  }
}
export default Home;
