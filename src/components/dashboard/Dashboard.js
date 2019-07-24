import React, { Component } from "react";
import { Button, Grid, Segment, Header, Container } from 'semantic-ui-react'
import "./Dashboard.css"

export default class Dashboard extends Component{
    render(){
        return(
            <Segment placeholder className="login">
            <Grid columns={4} relaxed='very' stackable>
            <Grid.Column>
              <Header>Chat</Header>
              <Container>
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