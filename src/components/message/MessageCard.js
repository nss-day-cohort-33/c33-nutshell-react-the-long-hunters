import React, { Component } from "react"
import { Button, Comment, Input, Dropdown } from 'semantic-ui-react'
import "./Message.css"

let currentUserId = parseInt(sessionStorage.getItem("id"))

export default class MessageCard extends Component {

    state = {
        userId: this.props.message.userId,
        message: this.props.message.message,
        hidden: true
    }

    // showButtons = event => {
    //     let currentUserId = parseInt(sessionStorage.getItem("id"))
    //     if (currentUserId === this.props.message.userId) {
    //         this.setState( {hiddenBtn: !this.state.hiddenBtn} )
    //     }
    // }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    handleEditButton = event => {
        console.log("edit clicked")
        this.setState( {hidden: !this.state.hidden} )
        this.setState( {hiddenBtn: !this.state.hiddenBtn} )
    }

    editMessage = event => {
        event.preventDefault()
        const editedMessage = {
            id: this.props.message.id,
            userId: parseInt(this.state.userId),
            message: this.state.message,
        }
        console.log(editedMessage)
        this.handleEditButton()
        this.props.updateAPI(editedMessage, "messages")
        .then(() => this.props.history.push("/"))
    }

    render() {
        return (
            <Comment key={this.props.message.id}>
                {
                    this.props.users
                        .filter(user => user.id === this.props.message.userId)
                        .map(user =>
                            <strong key={user.id}>
                                {user.user_name}
                            </strong>
                        )
                }
                <div className="form-group" hidden = {(this.state.hidden)? "hidden" : ""}>
                    <Input fluid type="text" onChange={this.handleFieldChange} id="message" value = {this.state.message} />
                    <Button type="submit" onClick={this.editMessage} className="btn btn-primary" size="tiny">Save</Button>
                </div>
                <div className="comment-div">
                    <Comment.Text hidden = {(this.state.hidden)? "" : "hidden"}>{this.props.message.message}</Comment.Text>
                    {this.props.message.userId === currentUserId ?
                        <Dropdown>
                            <Dropdown.Menu>
                                <Button onClick={this.handleEditButton} icon="edit" size="mini"></Button>
                                <Button onClick={() => this.props.deleteFromAPI(this.props.message.id, "messages")}
                                    icon="trash" size="mini"></Button>
                            </Dropdown.Menu>
                        </Dropdown> : ""}
                </div>
            </Comment>
        )
    }
}