import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logOut } from "../actions/renterActions";
import { Nav, Navbar } from "react-bootstrap";

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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">OpenHouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to={"/profile"}>
              <Nav.Link href="#link">
                My Profile
                {/* {localStorage.length !== 0 ? "My Profile" : null} */}
              </Nav.Link>
            </Link>
            <div onClick={localStorage.length !== 0 ? this.handleLogOut : null}>
              <Link to={localStorage.length !== 0 ? "/logout" : "/login"}>
                <Nav.Link href="#link">
                  {localStorage.length !== 0 ? "Log Out" : "Log In"}
                </Nav.Link>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
