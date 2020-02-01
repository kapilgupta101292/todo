import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./Layout/HeaderComponent";
import FooterComponent from "./Layout/FooterComponent";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route path="/todos" component={ListTodosComponent} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
        <FooterComponent />
      </div>
    );
  }
}

export default TodoApp;
