import React, { Component } from 'react'
import { Button, Form, Grid, Segment, GridColumn, Header } from 'semantic-ui-react'
import "./Event.css"
import APIManager from "../../modules/APIManager"

// Coded by Krystal

export default class EventFormEdit extends Component {
    state = {
        userId: "",
        event_name: "",
        event_date: "",
        event_location: ""
      }

      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      updateExistingEvent = evt => {
        evt.preventDefault()

        if (this.state.event_name && this.state.event_date && this.state.location === ""){
            window.alert("Please fill in all fields!")
        } else {
          const editedEvent = {
            id: this.props.match.params.eventId,
            userId: this.state.userId,
            event_name: this.state.event_name,
            event_date: this.state.event_date,
            event_location: this.state.event_location
          };

      this.props.updateAPIEvent(editedEvent, "events")
      .then(() => this.props.history.push("/"))
      }
    }

      componentDidMount() {
        APIManager.get("events", this.props.match.params.eventId)
        .then(event => {
          this.setState({
            userId: event.userId,
            event_name: event.event_name,
            event_date: event.event_date,
            event_location: event.event_location
          });
        });
      }
    render() {
        return (
            <Segment>
            <Grid columns={1} relaxed='very' stackable >
                <GridColumn position="center">
                <Header>Add Event</Header>
                <Form onSubmit={this.updateExistingEvent}>
                <Form.Input onChange={this.handleFieldChange} id="event_name" label='Event Name' value={this.state.event_name} />
                <Form.Input onChange={this.handleFieldChange} id="event_date" label='Date' type='date' value={this.state.event_date}/>
                <Form.Input onChange={this.handleFieldChange} id="event_location" label='Location' type='event_location' value={this.state.event_location}/>
                <Button content='Update' primary />
                </Form>
                </GridColumn>
            </Grid>
        </Segment>
        )
    }
}
