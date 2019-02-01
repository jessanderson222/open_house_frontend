import React, { Component } from "react";
import { connect } from "react-redux";

class CreateAccount extends Component {
  state = {
    createAccountUsername: "",
    createAccountEmail: "",
    createAccountPassword: ""
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h3>Create Your Account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>User Name: </label>
          <input
            type="text"
            name="createAccountUsername"
            onChange={this.handleChange}
            value={this.state.createAccountUsername}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="createAccountEmail"
            onChange={this.handleChange}
            value={this.state.createAccountEmail}
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="createAccountPassword"
            onChange={this.handleChange}
            value={this.state.createAccountPassword}
          />
          <br />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => {
      dispatch({ type: "ADD_USER", payload: user });
    }
  };
};

export default connect()(CreateAccount);
