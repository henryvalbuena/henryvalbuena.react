import React, { Component } from 'react';
import TextContainer from '../components/TextContainer';
import MenuBar from '../components/MenuBar';
import ProjectCardList from '../components/ProjectCardList';
import { Grid } from 'semantic-ui-react';
import projects from '../projectList';
import SideMenu from '../components/SideMenu';
import aboutMe from '../about';
import ListContainer from '../components/ListContainer';

class App extends Component {
    state = { visible: false }
    
    showSideMenu = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }
    
    render() {
        return (
            <div>
                <MenuBar showSideMenu={this.showSideMenu}/>
                <SideMenu visible={this.state.visible}>
                    <Grid centered columns='equal'>
                        <Grid.Row>
                            <h1 className='header'>Welcome</h1>
                        </Grid.Row>
                        <Grid.Row>
                            <h3>A little about me</h3>
                        </Grid.Row>
                        <Grid.Row>
                            <TextContainer text={aboutMe.intro}/>
                        </Grid.Row>
                        <Grid.Row>
                            <h3>Interests</h3>
                        </Grid.Row>
                        <Grid.Row>
                            <ListContainer list={aboutMe.interest}/>
                        </Grid.Row>
                        <Grid.Row>
                            <h3>Most recent projects</h3>
                        </Grid.Row>
                        <Grid.Row>
                            <ProjectCardList projects={projects}/>
                        </Grid.Row>
                    </Grid>
                </SideMenu>
            </div>
        );
    }
}

export default App;