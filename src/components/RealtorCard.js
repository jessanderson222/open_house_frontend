import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { findAgent } from "../actions/agentActions";

class RealtorCard extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.findAgent(token);
    }
  }

  render() {
    console.log(this.props);
    if (this.props.agent) {
      // debugger;
      return (
        <div>
          <h3>{this.props.agent.name}</h3>
          <img className="realtor-image" src={this.props.agent.img_url} />
          <h3>{this.props.agent.company}</h3>
          <h5>{this.props.agent.email}</h5>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Please Sign In</h4>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  if (state.renter === null) {
    return null;
  } else
    return {
      agent: state.loggedInAgent
    };
};

const mapDispatchToProps = dispatch => {
  return {
    findAgent: token => dispatch(findAgent(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtorCard);
