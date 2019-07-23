import React, { Component } from "react"
import { Button, Divider, Form, Grid, Segment, Modal, ModalContent } from 'semantic-ui-react'

export default class Login extends Component {

    state = {
       user_name: "",
       email: "",
       password: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleLogin = (event) => {
        event.preventDefault()
        this.props.users.filter(user => {
            if(this.state.username === "" || this.state.password === ""){
                alert("Please fill in username and password")
            }
            else if (user.user_name === this.state.username && user.password === this.state.password){
              sessionStorage.setItem("id", user.id)
              this.props.history.push("/")
            }
            else{
                  alert("Password or username does not match. Try again or register!")
            }
        })
    }

    handleRegister = (event) => {
        event.preventDefault()
        this.props.users.filter(user => {
            if(this.state.username === "" || this.state.password === "" || this.state.email === ""){
                alert("Please fill in username, email, and password")
            }
            else if(user.user_name === this.state.username || user.email === this.state.email){
                alert("Username or email is already in use.")
            }
        })
        this.props.addUser(this.state, "users")
        .then(this.props.users.filter(user => {
            if(this.state.user_name === user.user_name) {
            sessionStorage.setItem("id", user.id)
            }
        }))
        this.props.history.push("/")
    }


    render() {
        return (

            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form onSubmit={this.handleLogin}>
                    <Form.Input onChange={this.handleFieldChange} id="user_name" icon='user' iconPosition='left' label='Username' placeholder='Username' />
                    <Form.Input onChange={this.handleFieldChange} id="password" icon='lock' iconPosition='left' label='Password' type='password' />

                    <Button content='Login' primary />
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                <Modal trigger={<Button content='Sign up' icon='signup' size='big' />} >
                    <Modal.Header>Register</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleRegister}>
                            <Form.Input onChange={this.handleFieldChange} id="user_name" icon='user' iconPosition='left' label='Username' placeholder='Username' />
                            <Form.Input onChange={this.handleFieldChange} id="email" icon='user' iconPosition='left' label='Email' placeholder='Email' />
                            <Form.Input onChange={this.handleFieldChange} id="password" icon='lock' iconPosition='left' label='Password' type='password' />
                            <Button content='Register' primary />
                        </Form>
                    </Modal.Content>
                </Modal>
                </Grid.Column>
                </Grid>

                <Divider vertical>Or</Divider>
            </Segment>

        )
    }
}