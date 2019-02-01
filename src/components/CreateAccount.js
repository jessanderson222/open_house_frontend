import React, { Component } from "react";
import { connect } from "react-redux";

class CreateAccount extends Component {
  state = {
    username: "",
    email: "",
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
    this.props.addRenter(renterObj);
  };

  render() {
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
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRenter: renterObj => {
      dispatch({ type: "SIGN_IN", payload: renterObj });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateAccount);
