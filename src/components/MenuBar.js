import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import menuItems from '../constants'

class MenuBar extends Component {
    render() {
        return (
            <Menu inverted size='huge'>
                <Menu.Item href={menuItems.redirectLinkedInd} target='_blank'
                    name={menuItems.main}>
                    My LinkedIn
                </Menu.Item>
                <Menu.Item href={menuItems.redirectEmail} target='_blank'
                    className='itemMenu'
                    position='right'
                    name={menuItems.contact}>
                    Email Me
                </Menu.Item>
                <Menu.Item href={menuItems.redirectGitHub} target='_blank'
                    className='itemMenu'
                    name={menuItems.git}>
                    Github
                </Menu.Item>
                <Button 
                    className='mobileMenu' 
                    basic color='black'
                    onClick={this.props.showSideMenu}>
                    <Icon inverted name='grid layout' />
                </Button>
            </Menu>
        )
    }
}

export default MenuBar;