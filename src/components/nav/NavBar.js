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
                <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                Project Name
                </Menu.Item>
                <Menu.Item as='a'>Home</Menu.Item>

                <Dropdown item simple text='Dropdown'>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>Submenu</span>
                    <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>



            // <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
            //     <ul className="nav nav-pills nav-fill">
            //         <li className="nav-item">
            //             <Link className="nav-link" to="/">News</Link>
            //         </li>
            //         <li className="nav-item">
            //             <Link className="nav-link" to="/friends">Friends</Link>
            //         </li>
            //         <li className="nav-item">
            //             <Link className="nav-link" to="/messages">Messages</Link>
            //         </li>
            //         <li className="nav-item">
            //             <Link className="nav-link" to="/tasks">Tasks</Link>
            //         </li>
            //     </ul>
            // </nav>
        )
    }
}

export default NavBar
