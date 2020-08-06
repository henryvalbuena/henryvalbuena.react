import React, { Component } from 'react'
import { Container, List } from 'semantic-ui-react'

export default class ListContainer extends Component {
    pStyle = {
      "fontSize": "16px"
    }
    render() {
      const  {list} = this.props;
      return (
        <Container>
          <List>
            {list.map((ele, i) =>
              <List.Item key={i} style={this.pStyle}>{ele}</List.Item> 
            )}
          </List>
        </Container>
      )
    }
  }