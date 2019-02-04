import React, { Component } from "react";
import { connect } from "react-redux";
import { signInRenter } from "../thunk/renterThunk";

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
          <button>Sign In</button>
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

export default connect(
  null,
  mapDispatchToProps
)(RenterSignInForm);
