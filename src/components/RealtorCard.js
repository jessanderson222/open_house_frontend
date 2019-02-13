import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { findAgent } from "../actions/agentActions";
import RealtorInfo from "./RealtorInfo";
import { Redirect } from "react-router-dom";

class RealtorCard extends Component {
  state = {
    clicked: false
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.findAgent(token);
    }
  }

  handleClick = e => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    console.log(this.state);
    if (this.props.agent) {
      if (this.state.clicked === true) {
        return <Redirect to="/addproperty" />;
      } else {
        return (
          <div>
            <h3>{this.props.agent.name}</h3>
            <img className="realtor-image" src={this.props.agent.img_url} />
            <h3>{this.props.agent.company}</h3>
            <h5>{this.props.agent.email}</h5>
            <br />
            <button onClick={this.handleClick} className="button">
              Create a Listing
            </button>
            <br />
            <br />
            <h4>My Properties</h4>
            <RealtorInfo />
          </div>
        );
      }
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
