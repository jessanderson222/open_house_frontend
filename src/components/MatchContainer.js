import React from "react";
import { connect } from "react-redux";
import PropertyCard from "./PropertyCard";

class MatchContainer extends React.Component {
  render() {
    console.log(this.props.properties);
    return (
      <div>
        <h3>Make a Match</h3>
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
