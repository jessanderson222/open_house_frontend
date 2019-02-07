import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logOut } from "../actions/renterActions";

class NavBar extends Component {
  handleLogOut = e => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (token) {
      localStorage.clear();
      console.log(localStorage);
      this.props.logOut();
    }
  };

  render() {
    console.log(this.props);
    return (
      <ul className="navbar">
        {/* <Link to="/">
          <li className="navitem">Home</li>
        </Link>{" "} */}
        <Link to="/profile">
          <li className="navitem">My Profile</li>
        </Link>
        {/* <Link to="/login">
          <li className="navitem">Login</li>
        </Link>
        <Link to="/signup">
          <li className="navitem">Sign Up</li>
        </Link> */}
        <button onClick={this.handleLogOut}>Log Out</button>
      </ul>
    );
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
    logOut: () => dispatch(logOut())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
