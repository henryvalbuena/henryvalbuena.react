import React, { Component } from 'react'
import { Card, Image, Label, Modal, TransitionablePortal, Button } from 'semantic-ui-react'

class ProjectCard extends Component {
  state = { visible: false }
  toggleModal = () => {
    this.setState(prevState => ({ visible: !prevState.visible}))
  }
  handleClick = src => {
    window.open(src.currentTarget.value, '_blank');
  }

  render() {
    const { visible } = this.state
    const { name, title, desc, detail, meta, img, src } = this.props
    return (
      <Card link onClick={this.toggleModal}>
        <Image alt='Project Image' src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta textAlign='center'>
            {meta.map((ele, idx) => 
              <span key={idx}>{ele}</span>
            )}
          </Card.Meta>
          <Card.Description>
            {desc}
          </Card.Description>
        </Card.Content>
        <TransitionablePortal open={visible}  transition={{ animation:'fade up', duration: 400 }}> 
          <Modal closeOnDimmerClick={false} closeOnDocumentClick={false} defaultOpen={true} size='large'>
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content image>
              <Image alt='Project Image' size='huge' src={img} />
              <Modal.Description>
                <h3>{title}</h3>
                <p>{detail}</p>
                {meta.map((ele, idx) => 
                  <Label key={idx}>{ele}</Label>
                )}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary value={src} onClick={this.handleClick}>More</Button>
            </Modal.Actions>
          </Modal>
        </TransitionablePortal>
      </Card>
      
    )
  }
}

export default ProjectCard;
