import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { Form, Col } from "react-bootstrap";
import { addProperty } from "../thunk/propertyThunk";
import { Redirect } from "react-router-dom";
import { Route, Switch, withRouter } from "react-router-dom";

class AddPropertyForm extends Component {
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
      img_1: "",
      img_2: "",
      img_3: "",
      neighborhood: ""
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
    this.props.addProperty(this.state, this.props.agent.id);
    this.props.history.push("/agent");
  };

  render() {
    console.log(this.state, this.props);
    if (this.props.agent === null) {
      return <h3>Please sign in to your agent account.</h3>;
    } else {
      return (
        <div>
          <h3>Property Information</h3>

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
              <Form.Group>
                <Form.Label>Neighborhood</Form.Label>
                <Form.Control
                  name="neighborhood"
                  // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                  onChange={this.handleChange}
                  value={this.state.neighborhood}
                  type="neighborhood"
                  placeholder="Neighborhood"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRent">
                <Form.Label>Rent</Form.Label>
                <Form.Control
                  name="rent"
                  // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                  onChange={this.handleChange}
                  value={this.state.rent}
                  type="rent"
                  placeholder="Enter a Number"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridRent">
                <Form.Label>Distance To Subway (Miles)</Form.Label>
                <Form.Control
                  name="distance_to_subway"
                  // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                  onChange={this.handleChange}
                  value={this.state.distance_to_subway}
                  type="distance_to_subway"
                  placeholder="Be Specific (ex: 0.3)"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridImage1">
                <Form.Label>Image 1</Form.Label>
                <Form.Control
                  type="img_1"
                  placeholder="Enter picture URL"
                  name="img_1"
                  // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                  onChange={this.handleChange}
                  value={this.state.img_1}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridImage2">
                <Form.Label>Image 2</Form.Label>
                <Form.Control
                  type="img_2"
                  placeholder="Enter picture URL"
                  name="img_2"
                  // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                  onChange={this.handleChange}
                  value={this.state.img_2}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridImage3">
                <Form.Label>Image 3</Form.Label>
                <Form.Control
                  type="img_3"
                  placeholder="Enter picture URL"
                  name="img_3"
                  // placeholder={this.props.renter ? this.props.renter.rent_max : null}
                  onChange={this.handleChange}
                  value={this.state.img_3}
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
}

const mapStateToProps = state => {
  if (state.agent === null) {
    return null;
  } else
    return {
      agent: state.loggedInAgent
    };
};

const mapDispatchToProps = dispatch => {
  return {
    addProperty: (form, id) => dispatch(addProperty(form, id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddPropertyForm)
);
