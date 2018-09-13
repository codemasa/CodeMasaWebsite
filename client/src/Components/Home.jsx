import React, { Component } from 'react';
import ContentBox from './TextBoxes/ContentBox'
import NameBox from './TextBoxes/NameBox';

class Home extends Component {
  render() {
    var contents = {
      section: "Content"
    }
    return (
      <div>
        <ContentBox pageTitle={contents.pageTitle} section={contents.section}>
          <NameBox/>
        </ContentBox>
      </div>
    )
  }
}
export default Home;
