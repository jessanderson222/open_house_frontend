import React from "react";
import { connect } from "react-redux";
import RealtorSignInForm from "./RealtorSignInForm";

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

export default connect()(RealtorHome);
