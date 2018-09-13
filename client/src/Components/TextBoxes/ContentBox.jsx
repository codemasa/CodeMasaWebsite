import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ContentBox extends Component {

  render() {
    return (
      <div className="content-box">
        {this.props.children}
      </div>
    )
  }
}
export default ContentBox;
