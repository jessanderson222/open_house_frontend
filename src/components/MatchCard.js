import React from "react";
import { connect } from "react-redux";
import { deleteMatch } from "../thunk/matchThunk";

class MatchCard extends React.Component {
  state = {
    realtorInfo: false,
    deleteMatch: false
  };

  handleRealtorInfoClick = e => {
    e.preventDefault();
    this.setState({
      realtorInfo: !this.state.realtorInfo
    });
  };

  handleDeleteMatch = e => {
    e.preventDefault();
    if (this.props) {
      this.props.delete(this.props.match);

      this.props.deleteMatch(this.props.match);
    } else {
      return null;
    }
  };

  render() {
    console.log(this.props);
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
              <br />${this.props.match.property.rent}
            </p>
            <img
              height="80px"
              alt="match"
              src={this.props.match.property.img_1}
            />
            <br />
            <button
              className="small-button"
              onClick={this.handleRealtorInfoClick}
            >
              Realtor Info
            </button>
            <button onClick={this.handleDeleteMatch} className="small-button">
              Delete
            </button>
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

const mapDispatchToProps = dispatch => {
  return {
    deleteMatch: match => dispatch(deleteMatch(match))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchCard);
