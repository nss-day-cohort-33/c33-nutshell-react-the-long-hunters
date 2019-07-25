import React, { Component } from 'react'
import { Button, Form, Grid, Segment, GridColumn,Header } from 'semantic-ui-react'

//Coded by Krystal

export default class NewsForm extends Component {

    state = {
       userId: null,
       news_url: "",
       news_title: "",
       news_synopsis: "",
       news_time: null,

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

    constructNews =evt => {
        evt.preventDefault()
        if(this.state.news_title && this.state.news_synopsis && this.state.news_url === ""){
            window.alert("Please fill in all fields!")
        } else{
            const news ={
                userId: parseInt(sessionStorage.getItem("id")),
                news_url: this.state.news_url,
                news_title: this.state.news_title,
                news_synopsis: this.state.news_synopsis,
                news_time: Date.now()
            }
            this.props
                .addEvent(news, "news")
                .then(() => this.props.history.push("/"))
        }
    }

    render() {
        return (
            <Segment>
                <Grid columns={1} relaxed='very' stackable >
                    <GridColumn position="center">
                    <Header>Add Article</Header>
                    <Form onSubmit={this.constructNews}>
                    <Form.Input onChange={this.handleFieldChange} id="news_title" label='Article Name' />
                    <Form.Input onChange={this.handleFieldChange} id="news_url" label='URL' type='text' />
                    <Form.Input onChange={this.handleFieldChange} id="news_synopsis" label='Synopsis' type='text area' />
                    <Button content='Add' primary />
                    </Form>
                    </GridColumn>
                </Grid>
            </Segment>
        )
    }
}
