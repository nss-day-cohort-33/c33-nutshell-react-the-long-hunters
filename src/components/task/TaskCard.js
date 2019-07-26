import React, { Component } from 'react'
import { List, Checkbox, Icon, Modal} from 'semantic-ui-react'
import TaskForm from "../task/TaskForm";
import "./TaskCard.css"
import APIManager from "../../components/modules/APIManager"

export default class TaskList extends Component {


    state = {
        open: false,
        show: "",
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

    toggleCompleted = (task) => {
        task.completed = !task.completed
          this.props.updateAPI(task, "tasks") 
          .then(() => {
            let className = (this.state.show ? "" : "done")
            this.setState({show: className})
            this.props.history.push("/")
          })
      }
  
    render() {
        return (
            <React.Fragment>
                <List divided relaxed className={this.state.show}>
                    <List.Item key={this.props.task.id} className="card">
                        <Checkbox size='large' verticalalign='middle'onClick={()=>this.toggleCompleted(this.props.task)} />
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
