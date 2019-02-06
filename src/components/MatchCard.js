import React from "react";
import { connect } from "react-redux";

class MatchCard extends React.Component {
  state = {
    realtorInfo: false
  };

  handleRealtorInfoClick = e => {
    e.preventDefault();
    this.setState({
      realtorInfo: !this.state.realtorInfo
    });
  };

  render() {
    console.log(this.props, this.state);
    if (this.props.renter.id === this.props.match.renter_id) {
      if (this.state.realtorInfo === true) {
        return (
          <h5 onClick={this.handleRealtorInfoClick}>feature coming soon :)</h5>
        );
      } else {
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
            <button onClick={this.handleRealtorInfoClick}>Realtor Info</button>
            <button>Delete</button>
          </div>
        );
      }
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
