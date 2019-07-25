import  React, { Component } from "react"
import { Container, Button, Comment, Form, Header, Icon, Input } from 'semantic-ui-react'
import MessageCard from "./MessageCard"
import "./Message.css"
import APIManager from "../modules/APIManager";

export default class MessageComponent extends Component {

    // state = {
    //     userId: null,
    //     message: "",
    //     hidden: true
    // }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    postNewMessage = event => {
        event.preventDefault()
        const message = {
            userId: parseInt(sessionStorage.getItem("id")),
            message: this.state.message
        }
        this.props.addToAPI(message, "messages")
    }

    componentDidMount() {
        APIManager.get("messages", this.props.messages )
        .then(message => {
            this.setState({
                userId: message.userId,
                message: message.message
            })
        })
    }

    render () {
        // console.log(this.props.messages)
        // console.log(this.state.userId)
        return (
            <React.Fragment>
                <section className="messages">
                {
                    this.props.messages.map(message =>
                        <MessageCard key={message.id} {...this.props}
                            message={message}
                            // handleEditButton={this.handleEditButton}
                            // handleFieldChange={this.handleFieldChange}
                            // editMessage={this.editMessage}
                            // hidden={this.state.hidden}
                            />
                    )
                    // this.props.messages.map(message =>
                    //     // if (this.state)
                    //     <div key={message.id}>
                    //     {/* <Icon color='grey' name='user circle' /> */}
                    //         <div>
                    //             {
                    //                 this.props.users
                    //                     .filter(user => user.id === message.userId)
                    //                     .map(user =>
                    //                         <strong key={user.id}>
                    //                             {user.user_name}
                    //                         </strong>
                    //                     )
                    //             }
                    //         </div>
                    //         <div hidden ={this.state.n}>
                    //         {message.message}
                    //         <Button onClick={() => this.props.deleteFromAPI(message.id, "messages")}
                    //         icon="delete" size="mini"></Button>
                    //         <Button onClick={this.handleEdit}
                    //         icon="edit" size="mini"></Button>
                    //         </div>
                    //      </div>
                // )
                }
                </section>

                    <Input name="message" id='message' onChange={this.handleFieldChange} />
                    {/* <Icon edit onClick={this.postNewMessage} content='Send' labelPosition='left' size="small" /> */}
                    <Button onClick={this.postNewMessage} content='Send' labelPosition='left' size="small"></Button>

            </React.Fragment>
        )
    }
}

{/* () => this.props.updateAPI(message.id) */}

{/* <Comment>
<Comment.Content>
    <Comment.Author>
    {
        this.props.users
            .filter(user => user.id === message.userId)
            .map(user =>
                <strong key={user.id}>
                    {user.user_name}
                </strong>
            )
    }
    </Comment.Author>
    <Comment.Metadata>
    <span>5 days ago</span>
    </Comment.Metadata>
    <Comment.Text>{message.message}</Comment.Text>
    <Comment.Actions>
    <a>Reply</a>
    </Comment.Actions>
</Comment.Content>
</Comment> */}
