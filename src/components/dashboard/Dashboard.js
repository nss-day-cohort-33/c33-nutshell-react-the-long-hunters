import React, { Component } from "react";
import { Button, Grid, Segment, Header, Container, Modal, Form } from 'semantic-ui-react'
import "./Dashboard.css"
import TaskList from "../task/TaskList";

export default class Dashboard extends Component{

  state = {
    userId: "",
    task: "",
    date_due: "",
    completed: "",
    open: false
  };
  
  handleFieldChange = (event) => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  };

    handleOpen = () => {
      this.setState({ open: true })
  }

  handleAddTask = evt => {
    evt.preventDefault();
    if (this.state.task === "") {
      window.alert("Please name your task.")
      console.log("what", this.state);
    } else {
      const newTask = {
        userId: sessionStorage.getItem("id"),
        task: this.state.task,
        date_due: this.state.date_due,
        completed: false
      };
      this.props
        .addToAPI(newTask, "tasks")
        .then(() => this.setState({ open: false }))
  }
}

  render() {
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
              <Header>Tasks</Header> <Modal trigger={<Button content='Add' icon='plus square outline' size='mini' onClick={this.handleOpen} />} open={this.state.open}>
              <Modal.Header>Add A Task</Modal.Header>
              <Modal.Content>
              <Form>
                  <Form.Input onChange={this.handleFieldChange} id="task" label='Task' placeholder='ex: Take Out Trash' />
                  <Form.Input onChange={this.handleFieldChange} type="date" id="date_due" label='Date Due' />
                  <Button content='Add' primary onClick={this.handleAddTask} />
              </Form>
              </Modal.Content>
            </Modal>
              <Container>
                <TaskList
                  key={this.props.tasks.id}
                  tasks={this.props.tasks}
                  deleteFromAPI={this.deleteFromAPI}
                  updateAPI={this.updateAPI}
                  {...this.props}
                />
              </Container>
            </Grid.Column>
            </Grid>
        </Segment>
        )
  }
}
