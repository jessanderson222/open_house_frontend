import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import CreateAccount from "./CreateAccount";
import RenterSignInForm from "./RenterSignInForm";
import RenterCard from "./RenterCard";
import PropertyInfo from "./PropertyInfo";
import EditRenterInfoForm from "./EditRenterInfoForm";
import MatchContainer from "./MatchContainer";
import { findRenter } from "../actions/renterActions";

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.findRenter(token);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Open House</h1>
          <NavBar />
        </header>
        <Switch>
          <Route path="/signup" render={renter => <CreateAccount />} />
          <Route path="/login" render={renter => <RenterSignInForm />} />
          <Route path="/profile" render={renter => <RenterCard />} />
          <Route
            path="/editprofile"
            render={renter => <EditRenterInfoForm />}
          />
          <Route path="/aptinfo" render={renter => <PropertyInfo />} />
          <Route path="/match" render={renter => <MatchContainer />} />
          <Route path="/" render={renter => <Home />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findRenter: token => dispatch(findRenter(token))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
