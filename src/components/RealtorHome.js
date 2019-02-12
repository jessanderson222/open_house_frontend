import React from "react";
import { connect } from "react-redux";
import RealtorSignInForm from "./RealtorSignInForm";
import { Redirect } from "react-router-dom";

class RealtorHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createAccount: false
    };
  }

  handleCreateAccount = e => {
    this.setState({
      createAccount: !this.state.createAccount
    });
  };

  render() {
    console.log(this.state);
    if (this.state.createAccount === true) {
      return <Redirect to="/createrealtor" />;
    } else {
      return (
        <div>
          <RealtorSignInForm />
          <br />
          <p onClick={this.handleCreateAccount}>
            Don't have an account? Create one here.
          </p>
        </div>
      );
    }
  }
}

export default connect()(RealtorHome);
