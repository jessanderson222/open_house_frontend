import React from "react";
import { connect } from "react-redux";
import PropertyCard from "./PropertyCard";
import { getProperties } from "../thunk/propertyThunk";
import PropertyTile from "./PropertyTile";

class PropertyContainer extends React.Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    console.log(this.props);
    if (this.props.renter) {
      return (
        <div>
          <h2>Make a Match</h2>
          {/* <button>Back to My Profile</button> */}
          <div>
            {this.props.properties.length
              ? this.props.properties.map((property, i) => (
                  <PropertyCard
                    parent="PropertyContainer"
                    key={i}
                    property={property}
                  />
                ))
              : null}
          </div>
          <div>
            {this.props.properties.length ? (
              <PropertyTile
                properties={this.props.properties}
                mparent="PropertyContainer"
              />
            ) : null}
          </div>
        </div>
      );
    } else {
      return <h4>Please Sign In</h4>;
    }
  }
}

const mapStateToProps = state => {
  if (state.properties === []) {
    return null;
  } else
    return {
      properties: state.properties,
      renter: state.loggedInRenter
    };
};

const mapDispatchToProps = dispatch => {
  return {
    getProperties: () => dispatch(getProperties())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyContainer);
