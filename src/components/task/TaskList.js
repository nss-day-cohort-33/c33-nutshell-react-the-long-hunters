import React, { Component } from 'react'
import { List, Checkbox, Icon, Modal, Form, Button } from 'semantic-ui-react'


export default class TaskList extends Component {


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
      };
    
      handleAddTask = evt => {
        evt.preventDefault();
          const newTask = {
            userId: sessionStorage.getItem("id"),
            task: this.state.task,
            date_due: this.state.date_due,
            completed: false
          };
          this.props
            .updateAPI(newTask, "tasks")
            .then(() => this.setState({ open: false }))
      };
    

    render() {
        return (
            <React.Fragment>
            <List divided relaxed>
            {
                this.props.tasks.map(task =>
                        <List.Item key={task.id} className="card">
                            <Checkbox size='large' verticalalign='middle'/>
                            <List.Content>
                            <List.Header>Task Name: {task.task}</List.Header>
                            <List.Description>Due: {task.date_due}</List.Description>
                            <Modal trigger={<Icon name='edit' size='tiny' onClick={this.handleOpen} />} open={this.state.open}>
                                <Modal.Header>Edit Task</Modal.Header>
                                <Modal.Content>
                                <Form>
                                    <Form.Input onChange={this.handleFieldChange} id="task" label='Task' value={task.task} />
                                    <Form.Input onChange={this.handleFieldChange} type="date" id="date_due" label='Date Due' value={task.date_due} />
                                    <Button content='Add' primary onClick={this.handleAddTask} />
                                </Form>
                                </Modal.Content>
                            </Modal>
                            <Icon name='trash' size='tiny' onClick={() => this.props.deleteFromAPI(task.id,"tasks")} />
                            </List.Content>
                        </List.Item>
                )
            }
            </List>
            </React.Fragment>
            )
            }
}