import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'

export default class TextContainer extends Component {
  pStyle = {
    "font-size": "20px"
  }
  render() {
    const  {text} = this.props;
    return (
      <Container className='intro' textAlign='left'>
        {text.map((ele, idx) =>
            <p style={this.pStyle} key={idx}>{ele}</p>
        )}
      </Container>
    )
  }
}
