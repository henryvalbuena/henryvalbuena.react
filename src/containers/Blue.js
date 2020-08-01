import React, { Component } from "react";
import TextContainer from "../components/TextContainer";
import MenuBar from "../components/MenuBar";
import ProjectCardList from "../components/ProjectCardList";
import { Grid, Image } from "semantic-ui-react";
import projects from "../projectList";
import SideMenu from "../components/SideMenu";
import aboutMe from "../about";
import ListContainer from "../components/ListContainer";

import "./Blue.css";

class Blue extends Component {
  state = { visible: false };

  showSideMenu = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        <MenuBar showSideMenu={this.showSideMenu} />
        <SideMenu visible={this.state.visible}>
          <Grid centered columns="equal">
            <Grid.Row>
              <h1 className="header">A little about me</h1>
            </Grid.Row>
            <Grid.Row stretched={false} verticalAlign="middle" centered>
              <Grid.Column verticalAlign="middle">
                <Image
                  src="https://res.cloudinary.com/devhenry/image/upload/c_scale,h_682/v1569000107/Jenova/img/me02.jpg"
                  size="medium"
                  rounded
                  fluid={false}
                  verticalAlign="middle"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <TextContainer text={aboutMe.intro} />
            </Grid.Row>
            <Grid.Row>
              <h2>Interests</h2>
            </Grid.Row>
            <Grid.Row>
              <ListContainer list={aboutMe.interest} />
            </Grid.Row>
            <Grid.Row>
              <h2>Most recent projects</h2>
            </Grid.Row>
            <Grid.Row>
              <ProjectCardList projects={projects} />
            </Grid.Row>
            <Grid.Row>
              <p>
                Developed by <b>Henry Valbuena</b> 2020
              </p>
            </Grid.Row>
            <Grid.Row></Grid.Row>
          </Grid>
        </SideMenu>
      </div>
    );
  }
}

export default Blue;
