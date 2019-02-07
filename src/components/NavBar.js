import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "net";

class NavBar extends Component {
  render() {
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
        <button>Log Out</button>
      </ul>
    );
  }
}

export default withRouter(NavBar);
