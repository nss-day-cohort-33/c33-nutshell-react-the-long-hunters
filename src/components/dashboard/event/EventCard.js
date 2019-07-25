import React, { Component } from 'react'
import { Button, List } from 'semantic-ui-react'

//Coded by Krystal

export default class EventCard extends Component {
    state = {
        saveDisabled: false
      };

    render() {
        return (
            <List.Content>
              <List.Header as='a'>{this.props.event.event_name}</List.Header>
              <List.Description as='a'>
                <p>Location: {this.props.event.event_location}</p>
                    <p>Date: {this.props.event.event_date}</p>
                    </List.Description>
                    <Button content="Delete" onClick={() => {
                        this.setState({ saveDisabled: true }, () =>
                  this.props.deleteFromAPI(this.props.event.id, "events" )
                );
              }} />
                    <Button content="Edit" onClick={() => {
                this.props.history.push(
                  `/events/${this.props.event.id}/edit`
                );
              }} />
            </List.Content>
        )
    }
}
