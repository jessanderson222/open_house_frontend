import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Redirect } from "react-router-dom";
import { editRenter } from "../thunk/renterThunk";
import { Form, Col, Button } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

class EditRenterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: "",
      bathrooms: "",
      distance_to_subway: "",
      borough: "",
      pet_friendly: false,
      elevator: false,
      laundry: false,
      doorman: false,
      move_in_date: new Date(),
      rent_min: "",
      rent_max: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state, this.props);
    this.props.editRenter(this.state, this.props);
    this.props.history.push("/profile");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Looking for...</h3>

        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Location</Form.Label>
              <Form.Control
                as="select"
                name="borough"
                onChange={this.handleChange}
                value={this.state.borough}
              >
                <option value="">Choose...</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="The Bronx">The Bronx</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Queens">Queens</option>
                <option value="Staten Island">Staten Island</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Bedrooms</Form.Label>
              <Form.Control
                as="select"
                name="bedrooms"
                onChange={this.handleChange}
                value={this.state.bedrooms}
                placeholder={this.state.bedrooms}
              >
                <option value="">Choose...</option>
                <option value={0}>Studio</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Bathrooms</Form.Label>
              <Form.Control
                as="select"
                name="bathrooms"
                onChange={this.handleChange}
                value={this.state.bathrooms}
              >
                <option value="">Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Rent Min</Form.Label>
              <Form.Control
                name="rent_min"
                // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                onChange={this.handleChange}
                value={this.state.rent_min}
                type="rent_min"
                placeholder="Enter a Number"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Rent Max</Form.Label>
              <Form.Control
                type="rent_max"
                placeholder="Enter a Number"
                name="rent_max"
                // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                onChange={this.handleChange}
                value={this.state.rent_max}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Elevator</Form.Label>
              <Form.Control
                as="select"
                name="elevator"
                onChange={this.handleChange}
                value={this.state.elevator}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Laundry</Form.Label>
              <Form.Control
                as="select"
                name="laundry"
                onChange={this.handleChange}
                value={this.state.laundry}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Pet Friendly</Form.Label>
              <Form.Control
                as="select"
                name="pet_friendly"
                onChange={this.handleChange}
                value={this.state.petFriendly}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Doorman</Form.Label>
              <Form.Control
                as="select"
                name="doorman"
                onChange={this.handleChange}
                value={this.state.doorman}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Label>Move in Date</Form.Label>
            <DatePicker
              name="move_in_date"
              selected={this.state.moveInDate}
              onChange={this.handleDateChange}
            />
          </Form.Group>

          <button className="small-button">Submit</button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.renter === null) {
    return null;
  } else
    return {
      renter: state.loggedInRenter
    };
};

const mapDispatchToProps = dispatch => {
  return {
    editRenter: (form, id) => dispatch(editRenter(form, id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditRenterForm)
);
