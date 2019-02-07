import React from "react";
import { connect } from "react-redux";
import PropertyInfo from "./PropertyInfo";
import { postMatch } from "../thunk/matchThunk";

class PropertyCard extends React.Component {
  state = {
    noButtonClicked: false,
    yesButtonClicked: false
  };

  handleNoButtonClick = e => {
    e.preventDefault();
    this.setState({
      noButtonClicked: !this.state.noButtonClicked
    });
  };

  handleYesButtonClick = e => {
    e.preventDefault();
    console.log(this.props, this.state);
    this.setState({
      yesButtonClicked: !this.state.yesButtonClicked
    });
    this.props.postMatch(this.props.renter, this.props.property);
  };

  render() {
    console.log(this.props);
    if (
      this.props.property.rent <= this.props.renter.rent_max &&
      this.props.property.borough === this.props.renter.borough
    ) {
      if (this.state.noButtonClicked === true) {
        return <h4>ew I hate it</h4>;
      } else if (this.state.yesButtonClicked === true) {
        return <h4>oh I love it</h4>;
      } else {
        return (
          <div>
            <PropertyInfo property={this.props.property} />
            <button className="small-button" onClick={this.handleNoButtonClick}>
              NO
            </button>
            <button
              className="small-button"
              onClick={this.handleYesButtonClick}
            >
              YES
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
    postMatch: (renter, property) => dispatch(postMatch(renter, property))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyCard);
