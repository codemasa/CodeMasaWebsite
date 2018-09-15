import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {List, Image, Divider} from 'semantic-ui-react';

class Languages extends Component {

  render() {
    return (
      <div className="content-col">
        <div className="title">{this.props.title}</div>
        <div className="text-col">
          <List>
            {this.props.languages.map((langs,i) =>
                                                    <List.Item key={i}>
                                                      <List.Content>
                                                        <List.Header as='a'>{langs}</List.Header>
                                                        <List.Description>
                                                          {this.props.year[i]} + Years of experience
                                                        </List.Description>
                                                      </List.Content>
                                                    </List.Item>)}
          </List>
        </div>
      </div>
    )
  }
}
export default Languages;
