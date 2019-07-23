import React, { Component } from "react"
import { Button, Divider, Form, Grid, Segment, Modal } from 'semantic-ui-react'

export default class Login extends Component {

    // Set initial state
    state = {
       username: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (event) => {
        event.preventDefault()

        /*
            For now, just store theusername and password that
            the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
               username: this.state.username,
                password: this.state.password
            })
        )
    }

    render() {
        return (

            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form onSubmit={this.handleLogin}>
                    <Form.Input onChange={this.handleFieldChange} id="username" icon='user' iconPosition='left' label='Username' placeholder='Username' />
                    <Form.Input onChange={this.handleFieldChange} id="password" icon='lock' iconPosition='left' label='Password' type='password' />

                    <Button content='Login' primary />
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                <Modal trigger={<Button content='Sign up' icon='signup' size='big' />} >
                    <Modal.Header>Register</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleLogin}>
                            <Form.Input onChange={this.handleFieldChange} id="username" icon='user' iconPosition='left' label='Username' placeholder='Username' />
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

            // <form onSubmit={this.handleLogin}>
            //     <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            //     <label htmlFor="inputEmail">
            //        username address
            //     </label>
            //     <input onChange={this.handleFieldChange} type="email"
            //            id="email"
            //            placeholder="Email address"
            //            required="" autoFocus="" />
            //     <label htmlFor="inputPassword">
            //         Password
            //     </label>
            //     <input onChange={this.handleFieldChange} type="password"
            //            id="password"
            //            placeholder="Password"
            //            required="" />
            //     <button type="submit">
            //         Sign in
            //     </button>
            // </form>
        )
    }
}