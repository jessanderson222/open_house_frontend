import React from "react";
import { connect } from "react-redux";

class MatchContainer extends React.Component {
  render() {
    return <h3>Make a Match</h3>;
  }
}

export default connect()(MatchContainer);
