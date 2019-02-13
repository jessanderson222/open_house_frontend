import React, { Component } from "react";
import { connect } from "react-redux";
import { signInAgent } from "../thunk/agentThunk";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

class RealtorSignInForm extends Component {
  state = {
    email: "",
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
    this.props.signInAgent(this.state);
    this.props.history.push("/agent");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h4>Realtor Sign In</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
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
    signInAgent: agentObj => dispatch(signInAgent(agentObj))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RealtorSignInForm)
);
