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
import PropertyContainer from "./PropertyContainer";
import RealtorCard from "./RealtorCard";
import { findRenter } from "../actions/renterActions";
import { getProperties } from "../thunk/propertyThunk";
import { getMatches } from "../thunk/matchThunk";
// import MenuAppBar from "./MenuAppBar";
import RealtorHome from "./RealtorHome";
import AddRenterPictureForm from "./AddRenterPictureForm";
import RealtorCreateAccount from "./RealtorCreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          {/* <MenuAppBar /> */}
        </header>
        <Switch>
          <Route path="/signup" render={renter => <CreateAccount />} />
          <Route path="/login" render={renter => <RenterSignInForm />} />
          <Route path="/profile" render={renter => <RenterCard />} />
          <Route
            path="/editprofile"
            render={renter => <EditRenterInfoForm />}
          />
          <Route path="/realtorhome" render={agent => <RealtorHome />} />
          <Route
            path="/createrealtor"
            render={agent => <RealtorCreateAccount />}
          />
          <Route path="/aptinfo" render={renter => <PropertyInfo />} />
          <Route path="/match" render={renter => <PropertyContainer />} />
          <Route
            path="/addpicture"
            render={renter => <AddRenterPictureForm />}
          />
          <Route path="/agent" render={renter => <RealtorCard />} />
          <Route path="/" render={renter => <Home />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findRenter: token => dispatch(findRenter(token)),
    getProperties: () => dispatch(getProperties()),
    getMatches: () => dispatch(getMatches())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
