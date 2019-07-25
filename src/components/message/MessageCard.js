import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Card, Icon, Image, Button, Comment, Input } from 'semantic-ui-react'
import APIManager from "../modules/APIManager";
// import MessageButtons from "./MessageButtons"

import "./Message.css"
export default class MessageCard extends Component {

    state = {
        userId: this.props.message.userId,
        message: this.props.message.message,
        hidden: true,
        hiddenBtn: true
    }

    showButtons = event => {
        let currentUserId = parseInt(sessionStorage.getItem("id"))
        if (currentUserId === this.props.message.userId) {
            this.setState( {hiddenBtn: !this.state.hiddenBtn} )

        }
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

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
        .then(() => this.props.history.push("/messages"))
    }

// componentDidMount() {
//     APIManager.get("messages", this.props.messages)
//     .then(message => {
//         this.setState({
//             userId: message.userId,
//             message: message.message
//         })
//     })
// }
    render() {
        const style = this.state.hidden ? {display: 'none'} : {}
        return (
            <Card key={this.props.message.id} onMouseEnter={this.showButtons}>
            <Comment >
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
                <Comment.Text hidden = {(this.state.hidden)? "" : "hidden"}>{this.props.message.message}</Comment.Text>

                <div className="button-div" hidden={this.state.hiddenBtn} >
                    <Button  onClick={() => this.props.deleteFromAPI(this.props.message.id, "messages")}
                                icon="delete" size="mini"></Button>
                    <Button onClick={this.handleEditButton} icon="edit" size="mini"></Button>
                </div>

            </Comment>
            <section>
                    <form className="messageForm">



                    </form>
                </section>
          </Card>

            // <Card key={this.props.message.id} size='small'>
            //     {/* <Card.Content> */}
            //         {/* <h5 className="card-title"> */}
            //             {/* {this.props.message.name} */}
            //             <div>
            //                     {
            //                         this.props.users
            //                             .filter(user => user.id === this.props.message.userId)
            //                             .map(user =>
            //                                 <strong key={user.id}>
            //                                     {user.user_name}
            //                                 </strong>
            //                             )
            //                     }
            //                 </div>
            //             {/* <Link className="nav-link" to={`/messages/${this.props.message.id}`}>Details</Link> */}
            //              <Card.Description>{this.props.message.message}</Card.Description>
            //            <Button onClick={() => this.props.deleteFromAPI(this.props.message.id, "messages")}
            //               icon="delete" size="mini"></Button>
            //           <Button onClick={this.handleEdit} icon="edit" size="mini"></Button>

            //  </Card>
        )
    }
}