import React, { Component } from "react"
import { Link } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import {
    Container,
    Dropdown,
    Image,
    Menu
  } from 'semantic-ui-react'


class NavBar extends Component {
    render() {
        return (

        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as={Link} to="/" header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />Dashboard
                </Menu.Item>
                <Dropdown item simple text=''>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/friends">Friends</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
        )
    }
}

export default NavBar
