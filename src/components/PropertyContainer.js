import React from "react";
import { connect } from "react-redux";
import PropertyCard from "./PropertyCard";
import { getProperties } from "../thunk/propertyThunk";
import PropertyTile from "./PropertyTile";
import { postMatch } from "../thunk/matchThunk";

class PropertyContainer extends React.Component {
  componentDidMount() {
    this.props.getProperties();

    //put function in here that filters, could pass the info into getProperties?
  }

  render() {
    console.log(this.props.renter);
    if (this.props.renter) {
      if (this.props.properties.length === 0) {
        return (
          <div>
            <h2>Edit your wishlist to start matching!</h2>
            <img
              className="home-image"
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
        );
      } else {
        return (
          <div>
            <h2>Make a Match</h2>
            {/* <button>Back to My Profile</button> */}
            {/* <div>
            {this.props.properties.length
              ? this.props.properties.map((property, i) => (
                  <PropertyCard
                    parent="PropertyContainer"
                    key={i}
                    property={property}
                  />
                ))
              : null}
          </div> */}
            <div className="property-container">
              {this.props.properties.length ? (
                <PropertyTile
                  properties={this.props.properties}
                  parent="PropertyContainer"
                  postMatch={this.props.postMatch}
                  renter={this.props.renter}
                />
              ) : null}
            </div>
          </div>
        );
      }
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
    getProperties: () => dispatch(getProperties()),
    postMatch: (renter, property) => dispatch(postMatch(renter, property))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyContainer);
