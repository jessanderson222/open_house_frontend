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
        {/* fixed="top" */}
        <Navbar.Brand href="/home">OpenHouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link> */}
            {this.props.renter ? (
              <Link to={this.props.renter ? "/profile" : "/home"}>
                <Nav.Link href="#link">My Profile</Nav.Link>
              </Link>
            ) : null}
            {this.props.agent ? (
              <Link to={this.props.agent ? "/agent" : "/home"}>
                <Nav.Link href="#link">Agent Profile</Nav.Link>
              </Link>
            ) : null}
            <div onClick={localStorage.length !== 0 ? this.handleLogOut : null}>
              <Link to={localStorage.length !== 0 ? "/logout" : "/home"}>
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
  return {
    renter: state.loggedInRenter,
    agent: state.loggedInAgent
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
