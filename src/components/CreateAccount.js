import React, { Component } from "react";
import { connect } from "react-redux";
import { postRenter } from "../thunk/renterThunk";
import { withRouter } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";

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

        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalUserName">
            <Form.Label column sm={2}>
              User Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={this.handleChange}
                value={this.state.username}
                type="username"
                name="username"
                placeholder="User Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              User Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                name="email"
                placeholder="email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Col sm={10} />
            </Form.Group>
          </fieldset>
          {/* HOLD ONTO THIS FOR AGENT SIGNING IN
          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group> */}

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 1 }}>
              <button class="form-button">Sign In</button>
            </Col>
          </Form.Group>
        </Form>
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
