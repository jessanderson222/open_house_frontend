import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logOut } from "../actions/renterActions";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

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
            <Link to="/profile">
              <Nav.Link href="#link">My Profile</Nav.Link>
            </Link>
            <div onClick={localStorage.length !== 0 ? this.handleLogOut : null}>
              <Link to={localStorage.length !== 0 ? "/logout" : "/login"}>
                <Nav.Link href="#link">
                  {localStorage.length !== 0 ? "Log Out" : "Log In"}
                </Nav.Link>
              </Link>
            </div>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      // <ul className="navbar">
      //   <Link to="/">
      //     <li className="navitem">Home</li>
      //   </Link>{" "}
      //   <Link to="/profile">
      //     <li className="navitem">My Profile</li>
      //   </Link>
      //   {/* <Link to="/login">
      //     <li className="navitem">Login</li>
      //   </Link>
      //   <Link to="/signup">
      //     <li className="navitem">Sign Up</li>
      //   </Link> */}
      //   <button onClick={this.handleLogOut}>Log Out</button>
      // </ul>
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
