import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

class EditRenterForm extends React.Component {
  state = {
    bedrooms: "",
    bathrooms: "",
    distanceToSubway: "",
    borough: "",
    petFriendly: false,
    elevator: false,
    laundry: false,
    doorman: false,
    moveInDate: "",
    rentMin: "",
    rentMax: ""
  };

  render() {
    console.log(this.state);
    return <h3>Form</h3>;
  }
}

export default connect()(EditRenterForm);
