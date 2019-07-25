import React, { Component } from 'react'
import { Button, Form, Grid, Segment, GridColumn, Header } from 'semantic-ui-react'
import APIManager from "../../modules/APIManager"

// Coded by Krystal

export default class NewsFormEdit extends Component {
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

      updateExistingArticle = evt => {
        evt.preventDefault()

        if (this.state.news_title && this.state.news_url && this.state.news_synopsis === ""){
            window.alert("Please fill in all fields!")
        } else {
          const editedArticle = {
            id: this.props.match.params.articleId,
            userId: parseInt(sessionStorage.getItem("id")),
            news_url: this.state.news_url,
            news_title: this.state.news_title,
            news_synopsis: this.state.news_synopsis,
            news_time: Date.now()
          };

      this.props.updateAPI(editedArticle, "news")
      .then(() => this.props.history.push("/"))
      }
    }

      componentDidMount() {
        APIManager.get("news", this.props.match.params.articleId)
        .then(article => {
          this.setState({
            userId: article.userId,
            news_url: article.news_url,
            news_title: article.news_title,
            news_synopsis: article.news_synopsis,
            news_time: article.news_time
          });
        });
      }
    render() {
        return (
            <Segment>
            <Grid columns={1} relaxed='very' stackable >
                <GridColumn position="center">
                <Header>Add Article</Header>
                <Form onSubmit={this.updateExistingArticle}>
                <Form.Input onChange={this.handleFieldChange} id="news_title" label='Article Name' value={this.state.news_title} />
                <Form.Input onChange={this.handleFieldChange} id="news_url" label='URL' type='text' value={this.state.news_url} />
                <Form.Input onChange={this.handleFieldChange} id="news_synopsis" label='Synopsis' type='text area' value={this.state.news_synopsis} />
                <Button content='Add' primary />
                </Form>
                </GridColumn>
            </Grid>
        </Segment>
        )
    }
}
