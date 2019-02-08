import React from "react";
import { connect } from "react-redux";
import MatchCard from "./MatchCard";
import { Carousel } from "react-bootstrap";
import MatchTile from "./MatchTile";
import { deleteMatchFromBackEnd } from "../thunk/matchThunk";

class MatchContainer extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h4>My Matches</h4>
        {/* <div>
          {this.props.matches
            ? this.props.matches.map((match, i) => (
                <MatchCard
                  parent="MatchContainer"
                  delete={this.props.deleteMatchFromDom}
                  key={i}
                  match={match}
                />
              ))
            : null}
        </div> */}
        <div>
          {this.props.matches
            ? this.props.matches.map((match, i) => (
                <MatchTile
                  parent="MatchContainer"
                  deleteMatchFromDom={this.props.deleteMatchFromDom}
                  deleteMatchFromBackEnd={this.props.deleteMatchFromBackEnd}
                  key={i}
                  match={match}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.renter === null) {
    return null;
  } else
    return {
      renter: state.loggedInRenter,
      matches: state.matches
    };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMatchFromDom: match =>
      dispatch({ type: "REMOVE_MATCH", payload: match }),
    deleteMatchFromBackEnd: match => dispatch(deleteMatchFromBackEnd(match))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchContainer);
