import React, { Component } from "react";
import { connect } from "react-redux";

class RenterSignInForm extends Component {
  state = {
    username: "",
    email: ""
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // debugger;
    const renterObj = this.state;
    console.log(renterObj);
  };

  render() {
    return (
      <div>
        <h3>Sign In</h3>
      </div>
    );
  }
}
