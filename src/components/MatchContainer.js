import React from "react";
import { connect } from "react-redux";
import PropertyCard from "./PropertyCard";

class MatchContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Make a Match</h2>
        {/* <button>Back to My Profile</button> */}
        <div>
          {this.props.properties
            ? this.props.properties.map((property, i) => (
                <PropertyCard
                  parent="MatchContainer"
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

export default connect(mapStateToProps)(MatchContainer);
