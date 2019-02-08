import React, { Component } from "react";
import { connect } from "react-redux";
import { signInRenter } from "../thunk/renterThunk";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

class RenterSignInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    // console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signInRenter(this.state);
    this.props.history.push("/profile");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
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
          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
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
    signInRenter: renterObj => dispatch(signInRenter(renterObj))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RenterSignInForm)
);
