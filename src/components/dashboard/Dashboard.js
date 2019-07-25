import React, { Component } from "react";
import { Button, Grid, Segment, Header, Container, Form } from 'semantic-ui-react'
import MessageComponent from "../message/MessageComponent"
import "./Dashboard.css"
import EventCard from "./event/EventCard.js"
import NewsCard from "./news/NewsCard.js"

export default class Dashboard extends Component{
  render(){
        return(
            <Segment placeholder className="dashboard">
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
            <Grid.Column className="eventsColumn">
              <Header textAlign='center'>Events</Header>
                <Button content='Add Event' icon='plus square outline' position= 'center' size='mini' onClick={()=> this.props.history.push("/events/new")} />
                <List divided relaxed>
              {
            this.props.events
            .map(event => (
              <List.Item key={event.id} className="event">
              <List.Icon name='calendar times outline' size='large' verticalAlign='middle' />
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
              <Header textAlign="center">News</Header> <Button content='Add Article' icon='plus square outline' size='mini' onClick={()=> this.props.history.push("/news/new")} />
              <List divided relaxed>
              {
            this.props.news
            .map(article => (
              <List.Item key={article.id} className="news">
              <List.Icon name='newspaper outline' size='large' verticalAlign='middle' />
                <NewsCard
                    article={article}
                    {...this.props}
                />
                </List.Item>
            ))
              }
              </List>
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