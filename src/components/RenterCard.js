import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import EditRenterInfoForm from "./EditRenterInfoForm";
import PropertyInfo from "./PropertyInfo";
import { Redirect } from "react-router-dom";
import MatchContainer from "./MatchContainer";
import { findRenter } from "../actions/renterActions";

class RenterCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editInfoClicked: false,
      matchPropertiesClicked: false,
      pictureClicked: false
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.findRenter(token);
    }
  }

  handlePictureClick = e => {
    e.preventDefault();
    this.setState({
      pictureClicked: !this.state.pictureClicked
    });
    console.log(this.state.pictureClicked);
  };

  handleEditInfoClick = e => {
    e.preventDefault();
    this.setState({
      editInfoClicked: !this.state.editInfoClicked
    });
    console.log(this.state);
  };

  handleMatchPropertiesClick = e => {
    e.preventDefault();
    this.setState({
      matchPropertiesClicked: !this.state.matchPropertiesClicked
    });
    console.log(this.state);
  };

  render() {
    console.log(this.props);

    // return <h3>hi</h3>;

    if (this.props.renter) {
      if (this.state.editInfoClicked === true) {
        return <Redirect to="/editprofile" />;
      } else if (this.state.matchPropertiesClicked === true) {
        return <Redirect to="/match" />;
      } else if (this.state.pictureClicked === true) {
        return <Redirect to="/addpicture" />;
      } else {
        return (
          <div>
            <h3>{this.props.renter.username}</h3>
            <img
              onClick={this.handlePictureClick}
              height="200px"
              alt="click to add profile picture"
              src={this.props.renter.img_url}
            />
            <br />
            <button class="small-button" onClick={this.handleEditInfoClick}>
              Edit Info
            </button>
            <br />
            <br />
            <button class="button" onClick={this.handleMatchPropertiesClick}>
              Match
            </button>
            <br />
            <MatchContainer />
          </div>
        );
      }
    } else {
      return <h4>Please Sign In</h4>;
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
    findRenter: token => dispatch(findRenter(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenterCard);
