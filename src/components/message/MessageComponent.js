import  React, { Component } from "react"
import { Button, Input, Message } from 'semantic-ui-react'
import APIManager from "../modules/APIManager";
import MessageCard from "./MessageCard"
import "./Message.css"

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
    }

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
        return (
            <React.Fragment>
                <Message floating attached className="messages">
                {
                    this.props.messages.map(message =>
                        <MessageCard key={message.id} {...this.props}
                            message={message} />
                    )
                }
                </Message>
                <Message className="send-message" attached="bottom" color="blue">
                    <Input name="message" id='message' onChange={this.handleFieldChange} />
                    <Button onClick={this.postNewMessage}  icon='send' size="small" color="blue"></Button>
                </Message>
            </React.Fragment>
        )
    }
}

// style={{overflow: 'auto', maxHeight: 500 }}
