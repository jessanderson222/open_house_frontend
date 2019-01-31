import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to OpenHouse!</h1>
        <h2>Find an apartment that's the perfect match.</h2>
        <button>Sign In</button>
        <p>Not a member? Create an account.</p>

        <p>Listing a property? Sign in here.</p>
      </div>
    );
  }
}

export default connect()(Home);
