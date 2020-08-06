import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import menuItems from '../constants'

export default class SideMenu extends Component {
  state = { visible: false }
  handleSidebarHide = () => this.setState({ visible: false })
  componentWillReceiveProps(props) {
    const { visible } = props
    this.setState({visible: visible})
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
            direction='top'>
            <Menu.Item href={menuItems.redirectEmail} target='_blank'
              name={menuItems.contact}>
              <Icon name='home' />
              {menuItems.contact}
            </Menu.Item>
            <Menu.Item href={menuItems.redirectGitHub} target='_blank'
              name={menuItems.git}>
              <Icon name='gamepad' />
              {menuItems.git}
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
