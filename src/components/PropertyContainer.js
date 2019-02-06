import React from "react";
import { connect } from "react-redux";
import PropertyCard from "./PropertyCard";

class PropertyContainer extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Make a Match</h2>
        {/* <button>Back to My Profile</button> */}
        <div>
          {this.props.properties
            ? this.props.properties.map((property, i) => (
                <PropertyCard
                  parent="PropertyContainer"
                  key={i}
                  property={property}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.properties === []) {
    return null;
  } else
    return {
      properties: state.properties
    };
};

export default connect(mapStateToProps)(PropertyContainer);
