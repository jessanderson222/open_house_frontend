import React from "react";
import { connect } from "react-redux";

class RenterCard extends React.Component {
  render() {
    console.log(this.props.renter);
    debugger;
    // return <h3>hi</h3>;
    return <h3>{this.props.renter.username}</h3>;
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

export default connect(mapStateToProps)(RenterCard);
