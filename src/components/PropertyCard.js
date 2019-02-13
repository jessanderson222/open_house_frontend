import React from "react";
import { connect } from "react-redux";
import PropertyInfo from "./PropertyInfo";
import { postMatch } from "../thunk/matchThunk";

class PropertyCard extends React.Component {
  render() {
    console.log(this.props);
    return <h4>Property Card</h4>;
  }
}

export default connect()(PropertyCard);
