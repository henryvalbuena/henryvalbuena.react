import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

export default class ListContainer extends Component {
    render() {
      const  {list} = this.props;
      const line = list.map((ele, idx) =>
              '* ' + ele + ' '
      );
      return (
        <Container>
            {line}
        </Container>
      )
    }
  }