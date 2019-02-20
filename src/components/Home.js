import React from "react";
import { connect } from "react-redux";
import CreateAccount from "./CreateAccount";
import RenterSignInForm from "./RenterSignInForm";
import { Redirect } from "react-router-dom";
import HomeInfoGrid from "./HomeInfoGrid";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signInClicked: false,
      createAccountClicked: false,
      realtorFlow: false
    };
  }

  //change state allowing sign in form to render
  handleSignInClick = e => {
    e.preventDefault();
    this.setState({
      signInClicked: !this.state.signInClicked
    });
    console.log("Clicked", this.state);
  };

  handleRealtorFlowClick = e => {
    e.preventDefault();
    this.setState({
      realtorFlow: !this.state.realtorFlow
    });
  };

  //change state allowing create account form to render
  handleCreateAccountClick = e => {
    e.preventDefault();
    this.setState({
      createAccountClicked: !this.state.createAccountClicked
    });
  };

  //render sign in or create account form conditionally on state
  render() {
    console.log(this.state);
    if (this.state.createAccountClicked === true) {
      return <Redirect to="/signup" />;
    } else if (this.state.signInClicked === true) {
      return <Redirect to="/login" />;
    } else if (this.state.realtorFlow === true) {
      return <Redirect to="/realtorhome" />;
    } else {
      return (
        <div>
          <h1>Welcome to OpenHouse!</h1>

          <br />
          <img
            className="home-image"
            alt="houses"
            src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <br />

          <button class="button" onClick={this.handleSignInClick}>
            Sign In
          </button>
          <br />
          <p onClick={this.handleCreateAccountClick}>
            Not a member? Create an account.
          </p>
          <p onClick={this.handleRealtorFlowClick}>
            Realtors sign in and create an account here.
          </p>
          <HomeInfoGrid />
          {/* RENDER THIS WHEN I INCORPORATE THE AGENT FLOW<p>Listing a property? Sign in here.</p> */}
        </div>
      );
    }
  }
}

export default connect()(Home);
