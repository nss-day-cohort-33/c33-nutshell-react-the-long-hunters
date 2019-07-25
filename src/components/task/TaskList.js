import React, { Component } from 'react'
import { List, Checkbox, Icon, Modal, Form, Button } from 'semantic-ui-react'


export default class TaskList extends Component {

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
                            <Modal trigger={<Icon name='edit' size='tiny' />}>
                                <Modal.Header>Edit Task</Modal.Header>
                                <Modal.Content>
                                <Form>
                                    <Form.Input onChange={this.handleFieldChange} id="task" label='Task' value={task.task} />
                                    <Form.Input onChange={this.handleFieldChange} type="date" id="date_due" label='Date Due' value={task.date_due} />
                                    <Button content='Add' primary />
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