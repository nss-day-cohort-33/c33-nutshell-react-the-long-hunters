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
import { link } from "fs";


class NavBar extends Component {

    handleLogout = history => () => {
        sessionStorage.clear()
        history.push('/login')
    };


    render() {
        return (

        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as={Link} to="/" header>
                <Image size='mini' src={acorn} style={{ marginRight: '1.5em' }} />Dashboard
                </Menu.Item>
                <Dropdown item simple text=''>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/friends">Friends</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/login">Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
        )
    }
}

export default NavBar
