import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentSection extends Component {

  render() {
    return (
      <div className="content">
        <div className="title">{this.props.title}</div>
        <div className="text">{this.props.text}</div>

      </div>
    )
  }
}
export default ContentSection;
