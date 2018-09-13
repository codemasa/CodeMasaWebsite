import React, { Component } from 'react';
import ContentBox from './TextBoxes/ContentBox'
class Home extends Component {
  render() {
    var contents = {
      pageTitle: "Title",
      section: "Content"
    }
    return (
      <div>
        <ContentBox pageTitle={contents.pageTitle} section={contents.section}>
          <h1>{5 == 3 ? "Yes" : "No"}</h1>
        </ContentBox>
      </div>
    )
  }
}
export default Home;
