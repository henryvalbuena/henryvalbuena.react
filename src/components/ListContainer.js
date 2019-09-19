import React, { Component } from 'react'
import { Container, List } from 'semantic-ui-react'

export default class ListContainer extends Component {
    pStyle = {
      "font-size": "16px"
    }
    render() {
      const  {list} = this.props;
      return (
        <Container>
          <List>
            {list.map((ele) =>
              <List.Item style={this.pStyle}>{ele}</List.Item> 
            )}
          </List>
        </Container>
      )
    }
  }