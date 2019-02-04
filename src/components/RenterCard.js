import React from "react";
import { connect } from "react-redux";

class RenterCard extends React.Component {
  render() {
    return <h3>Renter!</h3>;
  }
}

export default connect()(RenterCard);
