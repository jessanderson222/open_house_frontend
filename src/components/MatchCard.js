import React from "react";
import { connect } from "react-redux";

class MatchCard extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.renter.id === this.props.match.renter_id) {
      return (
        <div>
          <p>
            {this.props.match.property.bedrooms === 0
              ? "Studio"
              : this.props.match.property.bedrooms + " Bedroom"}{" "}
            Apartment in {this.props.match.property.borough}
          </p>
          <img
            height="80px"
            alt="match"
            src={this.props.match.property.img_1}
          />
          <br />
          <button>Realtor Info</button>
          <button>Delete</button>
        </div>
      );
    } else {
      return null;
    }
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

export default connect(mapStateToProps)(MatchCard);
