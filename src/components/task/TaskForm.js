import React, { Component } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import APIManager from "../../components/modules/APIManager"


export default class TaskList extends Component {

    state = {
        userId: "",
        task: "",
        date_due: "",
        completed: "",
        open: false,
      };
      
      handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
      };
  
        handleOpen = () => {
          this.setState({ open: true })
      };
  
      handleEditTask = (evt) => {
        evt.preventDefault();
        console.log(this.props.task.id)
          const editedTask = {
            id: this.props.task.id,
            userId: parseInt(sessionStorage.getItem("id")),
            task: this.state.task,
            date_due: this.state.date_due,
            completed: false
          };
  
          this.props
          .updateAPI(editedTask, "tasks")
          .then(() => this.setState({ open: false }))     
      }
    
  
      componentDidMount() {
        APIManager.get("tasks", this.props.task.id)
        .then(task => {
          this.setState({
            task: task.task,
            date_due: task.date_due,
            userId: task.userId
          });
        });
      }
    

    render() {
        return (
            <React.Fragment>
            <Modal.Header>Edit Task</Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Input onChange={this.handleFieldChange} id="task" label='Task' value={this.state.task} />
                <Form.Input onChange={this.handleFieldChange} type="date" id="date_due" label='Date Due' value={this.state.date_due} />
                <Button content='Edit' primary onClick={this.handleEditTask} />
            </Form>
            </Modal.Content>
            </React.Fragment>
        )
    }
}