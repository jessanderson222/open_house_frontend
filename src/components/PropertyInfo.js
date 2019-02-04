import React from "react";
import { connect } from "react-redux";

class PropertyInfo extends React.Component {
  render() {
    return <h3>property</h3>;
  }
}

export default connect()(PropertyInfo);
