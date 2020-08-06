import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'

export default class TextContainer extends Component {
  pStyle = {
    "fontSize": "20px"
  }
  render() {
    const  {text} = this.props;
    return (
      <Container className='intro' textAlign='left'>
        {text.map((ele, i) =>
            <p style={this.pStyle} key={i}>{ele}</p>
        )}
      </Container>
    )
  }
}
