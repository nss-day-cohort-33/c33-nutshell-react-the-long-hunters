import React, { Component } from "react";
import { Button, Grid, Segment, Header, Container, Modal, Form, List } from 'semantic-ui-react' /*SN*/
import "./Dashboard.css"
import TaskList from "../task/TaskList";
import EventCard from "./event/EventCard.js"
import NewsCard from "./news/NewsCard.js"

export default class Dashboard extends Component{

  state = {  /*SN*/
    userId: "",
    task: "",
    date_due: "",
    completed: "",
    open: false
  };
  
  handleFieldChange = (event) => {  /*SN*/
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  };

    handleOpen = () => {  /*SN*/
      this.setState({ open: true })
  }

  /*SN*/
  handleAddTask = evt => { /*SN*/
    evt.preventDefault();
    if (this.state.task === "") {
      window.alert("Please name your task.")
      console.log("what", this.state);
    } else {
      const newTask = {
        userId: parseInt(sessionStorage.getItem("id")),
        task: this.state.task,
        date_due: this.state.date_due,
        completed: false
      };
      this.props
        .addToAPI(newTask, "tasks")
        .then(() => this.setState({ open: false }))
  }
} /*SN*/

  render(){
        return(
            <Segment placeholder className="dashboard">
            <Grid columns={4} relaxed='very' stackable>
            <Grid.Column>
              <Header>Chat</Header>
              <Container>
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
            <Grid.Column>{/*SN*/}
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
                /> {/*SN*/}
              </Container>
            </Grid.Column>
            </Grid>
        </Segment>
        )
  }
}
