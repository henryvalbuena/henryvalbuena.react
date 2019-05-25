import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProjectCard = () => (
  <Card>
    <Image alt='Robot' src='https://robohash.org/as' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Project Name</Card.Header>
      <Card.Meta>
        <span>Java, C++, DSA, React</span>
      </Card.Meta>
      <Card.Description>
        Show images of robots fetched from an API
      </Card.Description>
    </Card.Content>
  </Card>
)

export default ProjectCard;
