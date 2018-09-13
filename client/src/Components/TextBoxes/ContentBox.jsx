import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentBox extends Component {

  render() {
    return (
      <div className="content-box">
        <h1>{this.props.pageTitle}</h1>
        <p>{this.props.section}</p>
        {this.props.children}
      </div>
    )
  }
}
export default ContentBox;

ContentBox.propTypes = {
  pageTitle: PropTypes.string,
  section: PropTypes.string
}
