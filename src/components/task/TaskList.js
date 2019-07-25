import React, { Component } from 'react'
import TaskCard from "../task/TaskCard";



export default class TaskList extends Component {

  render() {
      return (
          <React.Fragment>
          {
            this.props.tasks.map(task =>
              <TaskCard key={task.id} task={task} updateAPI={this.props.updateAPI} deleteFromAPI={this.deleteFromAPI} {...this.props} />
            )
        }
          </React.Fragment>
          )
          }
}