import React, { Component } from "react";
import { Button, Grid, Segment, Header, Container, Form } from 'semantic-ui-react'
import MessageComponent from "../message/MessageComponent"
import "./Dashboard.css"

export default class Dashboard extends Component{
    render(){
        return(
            <Segment placeholder className="login">
            <Grid columns={4} relaxed='very' stackable>
            <Grid.Column>
              <Header>Chat</Header>
               <Container className="messages-dashboard">
                 {/* <MessageComponent
                      messages={this.props.messages}
                      messageId={this.messageId}
                      users={this.props.users}
                      addToAPI={this.addToAPI}
                      deleteFromAPI={this.deleteFromAPI}
                      updateAPI={this.updateAPI} /> */}
                  {/* {
                    this.props.messages.map(message =>
                        <MessageComponent key={message.id} message={message} {...this.props} />
                    )
                  }
                  <Form reply>
                    <Form.TextArea />
                    <Button onClick={this.postNewMessage} content='Send' labelPosition='left' icon='edit' primary />
                  </Form> */}
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Header>Events</Header>
                <Button content='Add' icon='plus square outline' size='mini' />
              <Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Header>News</Header> <Button content='Add' icon='plus square outline' size='mini' />
              <Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Header>Tasks</Header> <Button content='Add' icon='plus square outline' size='mini' />
              <Container>
              </Container>
            </Grid.Column>
            </Grid>
        </Segment>
        )
    }
}