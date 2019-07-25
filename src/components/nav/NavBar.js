import React, { Component } from "react"
import { Link } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import {
    Container,
    Dropdown,
    Image,
    Menu
  } from 'semantic-ui-react'
import acorn from "./acorn.svg"


class NavBar extends Component {

handleLogout = (event)=>{
    sessionStorage.clear()
}
    render() {
        return (

        <Menu inverted>
            <Container>
                <Menu.Item as={Link} to="/" header>
                <Image size='mini' src={acorn} style={{ marginRight: '1.5em' }} />Dashboard
                </Menu.Item>
                <Menu.Item header position='right' />
                <Dropdown item simple text='' >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/friends">Friends</Dropdown.Item>
                    <Dropdown.Item as={Link} onClick={this.handleLogout} to="/login">Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
        )
    }
}

export default NavBar
