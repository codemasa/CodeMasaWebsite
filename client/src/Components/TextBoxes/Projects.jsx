import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {List, Image, Divider} from 'semantic-ui-react';

class Projects extends Component {

  render() {
    return (
      <div className="projects">
        <div className="title">{this.props.title}</div>
        <div className="project">
          <div className="project-title">
            <a href={this.props.project.Link} target="_blank">{this.props.project.Name}</a>
          </div>
          <List bulleted>
            {this.props.project.Description.map((bullet,i) =>
                                                    <List.Item key={i}>
                                                        {bullet}
                                                    </List.Item>)}
          </List>
        </div>
      </div>
    )
  }
}
export default Projects;
