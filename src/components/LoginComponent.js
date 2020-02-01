import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "kapilgupta",
      password: "********",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  render() {
    return (
      <>
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </>
    );
  }

  loginClicked() {
    if (
      this.state.username === "kapilgupta" &&
      this.state.password === "password"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`);
      //this.setState({ showSuccessMessage: true, hasLoginFailed: false });
      //   console.log("Successful");
    } else {
      this.setState({ showSuccessMessage: false, hasLoginFailed: true });
      //   console.log("Failed");
    }
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}
export default LoginComponent;
