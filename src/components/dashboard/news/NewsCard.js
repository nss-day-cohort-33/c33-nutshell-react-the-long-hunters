import React, { Component } from 'react'
import { Button, List } from 'semantic-ui-react'

//coded by Krystal

export default class NewsCard extends Component {
    state = {
        saveDisabled: false
      };

    render() {
        return (
            <List.Content>
            <List.Header as='a'>{this.props.article.news_title}</List.Header>
            <List.Description as='a'>
              <p>Synopsis: {this.props.article.news_synopsis}</p>
                  <a href={this.props.article.news_url}>Link to Article</a>
                  </List.Description>
                  <Button content="Delete" onClick={() => {
                      this.setState({ saveDisabled: true }, () =>
                this.props.deleteFromAPI(this.props.article.id, "news" )
              );
            }} />
                  <Button content="Edit" onClick={() => {
              this.props.history.push(
                `/news/${this.props.article.id}/edit`
              );
            }} />
          </List.Content>
        )
    }
}
