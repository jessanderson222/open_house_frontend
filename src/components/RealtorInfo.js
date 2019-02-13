import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAgentProperties } from "../thunk/propertyThunk";
import PropertyCard from "./PropertyCard";

class RealtorInfo extends Component {
  componentDidMount() {
    this.props.getAgentProperties();

    //put function in here that filters, could pass the info into getProperties?
  }

  render() {
    return this.props.properties.map((property, i) => (
      <PropertyCard property={property} key={i} />
    ));
  }
}

const mapStateToProps = state => {
  if (state.agent === null) {
    return null;
  } else
    return {
      properties: state.properties
    };
};

const mapDispatchToProps = dispatch => {
  return {
    getAgentProperties: () => dispatch(getAgentProperties())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtorInfo);
