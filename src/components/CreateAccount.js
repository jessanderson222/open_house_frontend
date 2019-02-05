import React, { Component } from "react";
import { connect } from "react-redux";
import { postRenter } from "../thunk/renterThunk";
import { withRouter } from "react-router-dom";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //just use thunk instead of altering state. call addRenter inside of the thunk. that way it is put on state after clearing through backend.

  handleSubmit(e) {
    e.preventDefault();
    const renterObj = this.state;
    this.props.postRenter(renterObj);
    this.props.history.push("/profile");
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Create Your Account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
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
          <button class="form-button">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postRenter: renterObj => dispatch(postRenter(renterObj)),
    addRenter: renterObj => {
      dispatch({ type: "SIGN_IN", payload: renterObj });
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CreateAccount)
);
