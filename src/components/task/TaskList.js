import React, { Component } from 'react'
import { List, Checkbox } from 'semantic-ui-react'


export default class TaskList extends Component {
    render() {
        console.log("in taskslist", this.props.tasks)
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
                            </List.Content>
                        </List.Item>
                )
            }
            </List>
            </React.Fragment>
            )
            }
}