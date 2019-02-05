import React from "react";
import { connect } from "react-redux";
import PropertyInfo from "./PropertyInfo";

class PropertyCard extends React.Component {
  render() {
    return (
      <div>
        <PropertyInfo property={this.props.property} />
        <button>NO</button>
        <button>YES</button>
      </div>
    );
  }
}

export default connect()(PropertyCard);
