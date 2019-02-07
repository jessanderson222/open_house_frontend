import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Redirect } from "react-router-dom";
import { editRenter } from "../thunk/renterThunk";

import "react-datepicker/dist/react-datepicker.css";

class EditRenterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: "",
      bathrooms: "",
      distanceToSubway: "",
      borough: "",
      petFriendly: false,
      elevator: false,
      laundry: false,
      doorman: false,
      moveInDate: new Date(),
      rentMin: "",
      rentMax: ""
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
    return (
      <div>
        <h3>Looking for...</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Bedrooms</label>
          <select
            name="bedrooms"
            onChange={this.handleChange}
            value={this.state.bedrooms}
            placeholder={this.state.bedrooms}
          >
            <option> </option>
            <option value={0}>Studio</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <br />
          <label>Bathrooms</label>
          <select
            name="bathrooms"
            onChange={this.handleChange}
            value={this.state.bathrooms}
          >
            <option> </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <br />
          <label>Location</label>
          <select
            name="borough"
            onChange={this.handleChange}
            value={this.state.borough}
            // placeholder={this.props.renter ? this.props.renter.borough : null}
          >
            <option value="Brooklyn">Brooklyn</option>
            <option value="The Bronx">The Bronx</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Queens">Queens</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          <br />
          <label>Rent Min</label>
          <input
            type="text"
            name="rentMin"
            placeholder={this.props.renter ? this.props.renter.rent_min : null}
            onChange={this.handleChange}
            value={this.state.rentMin}
          />
          <label>Rent Max</label>
          <input
            type="text"
            name="rentMax"
            placeholder={this.props.renter ? this.props.renter.rent_max : null}
            onChange={this.handleChange}
            value={this.state.rentMax}
          />
          <br />
          <label>Elevator</label>
          <select
            name="elevator"
            onChange={this.handleChange}
            value={this.state.elevator}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Laundry</label>
          <select
            name="laundry"
            onChange={this.handleChange}
            value={this.state.laundry}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <br />
          <label>Pet Friendly</label>
          <select
            name="petFriendly"
            onChange={this.handleChange}
            value={this.state.petFriendly}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Doorman</label>
          <select
            name="doorman"
            onChange={this.handleChange}
            value={this.state.doorman}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <br />
          <label>Distance To Subway</label>
          <select
            name="distanceToSubway"
            onChange={this.handleChange}
            value={this.state.distanceToSubway}
          >
            <option> </option>
            <option value={0.1}>less than 500 feet</option>
            <option value={0.2}>less than 1000 feet</option>
            <option value={0.5}>less than half a mile</option>
            <option value={2.0}>more than half a mile</option>
          </select>
          <br />
          <label> Move In Date</label>
          <DatePicker
            name="moveInDate"
            selected={this.state.moveInDate}
            onChange={this.handleDateChange}
          />
          <br />
          {this.props.renter ? (
            <input type="hidden" name="renterId" value={this.props.renter.id} />
          ) : null}
          <br />
          <button className="small-button">Submit</button>
        </form>
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
