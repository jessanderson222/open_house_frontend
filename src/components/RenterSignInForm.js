import React, { Component } from "react";
import { connect } from "react-redux";
import { signInRenter } from "../thunk/renterThunk";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class RenterSignInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const renterObj = this.state;
    this.props.signInRenter(renterObj);
    this.props.history.push("/profile");
  };

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <button class="form-button">Sign In</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInRenter: renterObj => dispatch(signInRenter(renterObj))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RenterSignInForm)
);
