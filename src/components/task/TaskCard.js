import React, { Component } from 'react'
import { List, Checkbox, Icon, Modal} from 'semantic-ui-react'
import TaskForm from "../task/TaskForm";
import "./TaskCard.css"
import APIManager from "../../components/modules/APIManager"

export default class TaskList extends Component {


    state = {
        open: false,
        id: "",
        userId: "",
        task: "",
        date_due: "",
        completed: " ",
      };
  
  
    handleOpen = () => {
      this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
      };
    
    toggleCompleted = () => {
    
        const editedComplete = {
            id: this.state.id,
            userId: parseInt(sessionStorage.getItem("id")),
            task: this.state.task,
            date_due: this.state.date_due,
            completed: this.state.completed
          };
  
          this.props
          .updateAPI(editedComplete, "tasks")   
          .then(() => this.props.history.push("/"));  
      }

    componentDidMount() {
        APIManager.get("tasks", this.props.task.id)
        .then(task => {
          this.setState({
            id: task.id,
            userId: parseInt(sessionStorage.getItem("id")),
            task: task.task,
            date_due: task.date_due,
            completed: task.completed
          })
        })
      }
    
  
  
    render() {
        return (
            <React.Fragment>
                <List divided relaxed className={this.state.completed === true? 'done' : 'nope'}>
                    <List.Item key={this.props.task.id} className="card">
                        <Checkbox size='large' verticalalign='middle' onClick=
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
