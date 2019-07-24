import React, { Component } from "react";
import { Button, Grid, Segment, Header, Container, Modal, Form } from 'semantic-ui-react'
import "./Dashboard.css"
import TaskList from "../task/TaskList";

export default class Dashboard extends Component{
  render(){ 

    state = {
      userId: "",
      task: "",
      date_due: "",
      completed: ""
    };
    
    handleFieldChange = (event) => {
      const stateToChange = {}
      stateToChange[event.target.id] = event.target.value
      this.setState(stateToChange)
    }

    constructNewAnimal = evt => {
      evt.preventDefault();
      if (this.state.employee === "") {
        window.alert("Please select a caretaker");
      } else {
        const animal = {
          userId: parseInt(this.state.employeeId),
          task: this.state.animalName,
          date_due: this.state.breed,
          // Make sure the employeeId is saved to the database as a number since it is a foreign key.
          completed: false
        };
        this.props
          .addAnimal(animal, "animals")
          .then(() => this.props.history.push("/"));
      }
    };


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
              <Header>Tasks</Header> <Modal trigger={<Button content='Add' icon='plus square outline' size='mini' />}>
              <Modal.Header>Add A Task</Modal.Header>
              <Modal.Content>
              <Form onSubmit={this.handleAddTask}>
                  <Form.Input onChange={this.handleFieldChange} id="user_name" label='Task' placeholder='ex: Take Out Trash' />
                  <Form.Input onChange={this.handleFieldChange} type="date" id="date" label='Date Due' />
                  <Button content='Add' primary />
              </Form>
              </Modal.Content>
            </Modal>
              <Container>
                <TaskList
                    key={this.props.tasks.id}
                    tasks={this.props.tasks}
                    {...this.props}
                />
              </Container>
            </Grid.Column>
            </Grid>
        </Segment>
        )
    }
}