import React from "react";
import { connect } from "react-redux";
import CreateAccount from "./CreateAccount";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signInClicked: false,
      createAccountClicked: false
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

  //change state allowing create account form to render
  handleCreateAccountClick = e => {
    e.preventDefault();
    this.setState({
      createAccountClicked: !this.state.createAccountClicked
    });
    console.log("clicked", this.state);
  };

  //render sign in or create account form conditionally on state
  render() {
    if (this.state.createAccountClicked === true) {
      return <CreateAccount />;
    } else {
      return (
        <div>
          <h1>Welcome to OpenHouse!</h1>
          <h2>Find an apartment that's the perfect match.</h2>
          <button onClick={this.handleSignInClick}>Sign In</button>
          <p onClick={this.handleCreateAccountClick}>
            Not a member? Create an account.
          </p>

          {/* RENDER THIS WHEN I INCORPORATE THE AGENT FLOW<p>Listing a property? Sign in here.</p> */}
        </div>
      );
    }
  }
}

export default connect()(Home);
