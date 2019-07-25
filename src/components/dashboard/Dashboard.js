import React, { Component } from "react";
import { Button, Grid, Segment, Header, Container, List} from 'semantic-ui-react'
import "./Dashboard.css"
import EventCard from "./event/EventCard.js"

export default class Dashboard extends Component{
  render(){
    console.log(this.props.events)
        return(
            <Segment placeholder className="dashboard">
            <Grid columns={4} relaxed='very' stackable>
            <Grid.Column>
              <Header>Chat</Header>
              <Container>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign='center'>Events</Header>
                <Button content='Add Event' icon='plus square outline' position= 'center' size='mini' onClick={()=> this.props.history.push("/events/new")} />
                <List divided relaxed>
              {
            this.props.events
            .map(event => (
              <List.Item key={event.id} className="event">
              <List.Icon name='github' size='large' verticalAlign='middle' />
                <EventCard
                    event={event}
                    {...this.props}
                />
                </List.Item>
            ))
              }
              </List>
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