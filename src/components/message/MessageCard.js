import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Card, Icon, Image, Button, Comment, Input } from 'semantic-ui-react'
import APIManager from "../modules/APIManager";

import "./Message.css"
export default class MessageCard extends Component {

    state = {

        hidden: true
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

handleEditButton = event => {
    console.log("edit clicked")
    this.setState( {hidden: !this.state.hidden} )
}

editMessage = event => {
    event.preventDefault()
    const editedMessage = {
        id: this.props.match.params.messageId,
        userId: parseInt(this.state.userId),
        message: this.state.message,
    }
    this.props.updateAPI(editedMessage, "messages")
    .then(() => this.props.history.push("/messages"))
}

// componentDidMount() {
//     APIManager.get(this.props.match.params.messageId)
//     .then(message => {
//         this.setState({
//             userId: message.userId,
//             message: message.message
//         })
//     })
// }
    render() {
        return (
            <Card key={this.props.message.id}>
            <Comment>
                {
                    this.props.users
                        .filter(user => user.id === this.props.message.userId)
                        .map(user =>
                            <strong key={user.id}>
                                {user.user_name}
                            </strong>
                        )
                }
                <div className="form-group" hidden = {(this.state.hidden)? "disabled" : ""}>
                    <Input fluid type="text" required className="form-control" onChange={this.handleFieldChange} id="message" value = {this.props.message.message} />
                    <Button type="submit" onClick={this.editMessage} className="btn btn-primary" size="tiny">Save</Button>
                </div>
                <Comment.Text hidden = {(this.state.hidden)? "" : "disabled"}>{this.props.message.message}</Comment.Text>
                <Button onClick={() => this.props.deleteFromAPI(this.props.message.id, "messages")}
                            icon="delete" size="mini"></Button>
                <Button onClick={this.handleEditButton} icon="edit" size="mini"></Button>
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