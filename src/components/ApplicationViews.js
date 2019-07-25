import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Dashboard from "./dashboard/Dashboard";
import APIManager from "./modules/APIManager";
import Login from "./authentication/Login"
import EventFormEdit from "./dashboard/event/EventFormEdit";
import EventForm from "./dashboard/event/EventForm"
import NewsForm from "./dashboard/news/NewsForm"
import NewsFormEdit from "./dashboard/news/NewsFormEdit"

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("id") !== null

  state = {
    users: [],
    friends: [],
    messages: [],
    tasks: [],
    events: [],
    news: []
  };


  componentDidMount() {
    const newState = {};

    APIManager.all("users").then(users => (newState.users = users));
    APIManager.all("friends").then(
      friends => (newState.friends = friends)
      );
    APIManager.all("messages").then(
        messages => (newState.messages = messages)
        );
    APIManager.all("tasks")
        .then(tasks => (newState.tasks = tasks))
    APIManager.getDatesFromApi("events")
        .then(events => (newState.events = events))
    APIManager.all("news")
        .then(news => (newState.news = news))
        .then(() => this.setState(newState));
      }

   currentUser = () => {
     return sessionStorage.getItem("id")
   }

  addToAPI = (item, resource) =>
  APIManager.post(item, resource)
 .then(() => APIManager.all(resource))
 .then(item =>{
     this.setState({
     [resource]: item
   })
 }
 );

 deleteFromAPI = (item, resource) =>
 APIManager.delete(item, resource)
   .then(APIManager.all(resource))
   .then(item => {
    //  this.props.history.push("/");
     this.setState({ [resource]: item });
   });

   updateAPI = (item, resource) => {
    return APIManager.put(item, resource)
      .then(() => APIManager.all(resource))
      .then(item => {
        this.setState({
          [resource]: item
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Route path="/login" render={props => { return <Login {...props} users={this.state.users} addUser={this.addToAPI} /> }} />
        <Route
          exact path="/" render={props =>{
            if(this.isAuthenticated()){
              let events = this.state.events.filter((event => event.userId === parseInt(sessionStorage.getItem("id"))))
              let news = this.state.news.filter((news=> news.userId === parseInt(sessionStorage.getItem("id")))).sort((a,b) => a.news_time - b.news_time)
              return <Dashboard {...props} messages={this.state.messages}
              events={events} news={news} deleteFromAPI={this.deleteFromAPI} />
          }else {
            return <Redirect to="./login" />;
          }}}
        />
        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/events/new" render={props => {
            return (
              <EventForm {...props} addEvent={this.addToAPI} />
            )
          }}
        />
           <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return (
              <EventFormEdit
                {...props}
                  updateAPI={this.updateAPI}
              />
            );
          }}
        />

          <Route
          path="/news/new" render={props => {
            return (
              <NewsForm {...props} addEvent={this.addToAPI} />
            )
          }}
        />
         <Route
          path="/news/:articleId(\d+)/edit"
          render={props => {
            return (
              <NewsFormEdit
                {...props}
                  updateAPI={this.updateAPI}
              />
            );
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
