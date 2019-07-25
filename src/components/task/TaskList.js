import React, { Component } from 'react'
import { List, Checkbox, Icon, Modal} from 'semantic-ui-react'
import TaskForm from "../task/TaskForm";


export default class TaskList extends Component {


  state = {
      open: false
    };


  handleOpen = () => {
    this.setState({ open: true })
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
                  <Modal trigger={<Icon name='edit' size='tiny' onClick={this.handleOpen} />} open={this.state.open} >
                      <TaskForm key={task.id} task={task} updateAPI={this.props.updateAPI} {...this.props}/>
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