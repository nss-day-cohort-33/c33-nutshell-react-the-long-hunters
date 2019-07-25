import React, { Component } from 'react'
import { List, Checkbox, Icon, Modal} from 'semantic-ui-react'
import TaskForm from "../task/TaskForm";
import APIManager from "../../components/modules/APIManager"

export default class TaskList extends Component {


    state = {
        open: false,
        // id: this.props.task.id,
        // userId: parseInt(sessionStorage.getItem("id")),
        // task: this.state.task,
        // date_due: this.state.date_due,
        // completed: false,
      };
  
  
    handleOpen = () => {
      this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
      };
    
    toggleCompleted = () => {
        const editedComplete = {
            completed: false
          };
  
          this.props
          .updateAPI(editedComplete, "tasks")   
          .then(() => this.props.history.push("/"));  
      }

    componentDidMount() {
        APIManager.get("tasks", this.props.task.id)
        .then(task => {
          this.setState({
            id: this.props.task.id,
            userId: parseInt(sessionStorage.getItem("id")),
            task: this.state.task,
            date_due: this.state.date_due,
            completed: false,
          })
        })
      }
    
  
  
    render() {
        return (
            <React.Fragment>
                <List divided relaxed>
                    <List.Item key={this.props.task.id} className="card">
                        <Checkbox size='large' verticalalign='middle' onClick={this.toggleCompleted}/>
                        <List.Content>
                        <List.Header>Task Name: {this.props.task.task}</List.Header>
                        <List.Description>Due: {this.props.task.date_due}</List.Description>
                        <Modal trigger={<Icon name='edit' size='tiny' onClick={this.handleOpen} />} open={this.state.open} >
                            <TaskForm key={this.props.task.id} task={this.props.task} updateAPI={this.props.updateAPI} handleClose={this.handleClose} {...this.props}/>
                        </Modal>
                        <Icon name='trash' size='tiny' onClick={() => this.props.deleteFromAPI(this.props.task.id,"tasks")} />
                        </List.Content>
                    </List.Item>
                </List>
            </React.Fragment>
        )
    }
}
