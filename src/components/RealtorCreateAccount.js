import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { postAgent } from "../thunk/agentThunk";

class RealtorCreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: "",
      img_url: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.postAgent(this.state);
    this.props.history.push("/agent");
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Create Realtor Account</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={this.handleChange}
                value={this.state.name}
                type="name"
                name="name"
                placeholder="Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCompany">
            <Form.Label column sm={2}>
              Company
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={this.handleChange}
                value={this.state.company}
                type="company"
                name="company"
                placeholder="Company"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalImage">
            <Form.Label column sm={2}>
              Image URL
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={this.handleChange}
                value={this.state.img_url}
                type="img_url"
                name="img_url"
                placeholder="Image URL"
              />
            </Col>
          </Form.Group>

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
    postAgent: agentObj => dispatch(postAgent(agentObj))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RealtorCreateAccount)
);
