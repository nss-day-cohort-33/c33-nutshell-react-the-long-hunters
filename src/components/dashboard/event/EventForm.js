import React, { Component } from 'react'
import { Button, Form, Grid, Segment, GridColumn,Header } from 'semantic-ui-react'
import "./Event.css"

//Coded by Krystal

export default class EventForm extends Component {

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

    constructNewEvent =evt => {
        evt.preventDefault()
        if(this.state.event_name && this.state.event_date && this.state.location === ""){
            window.alert("Please fill in all fields!")
        } else{
            const event ={
                userId: parseInt(sessionStorage.getItem("id")),
                event_name: this.state.event_name,
                event_date: this.state.event_date,
                event_location: this.state.event_location
            }
            this.props
                .addEvent(event, "events")
                .then(() => this.props.history.push("/"))
        }
    }

    render() {
        return (
            <Segment>
                <Grid columns={1} relaxed='very' stackable >
                    <GridColumn position="center">
                    <Header>Add Event</Header>
                    <Form onSubmit={this.constructNewEvent}>
                    <Form.Input onChange={this.handleFieldChange} id="event_name" label='Event Name' />
                    <Form.Input onChange={this.handleFieldChange} id="event_date" label='Date' type='date' />
                    <Form.Input onChange={this.handleFieldChange} id="event_location" label='Location' type='event_location' />
                    <Button content='Add' primary />
                    </Form>
                    </GridColumn>
                </Grid>
            </Segment>
        )
    }
}
