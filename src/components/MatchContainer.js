import React from "react";
import { connect } from "react-redux";
import MatchCard from "./MatchCard";
// import { Grid } from "@material-ui/core/Grid";
import MatchTile from "./MatchTile";
import { deleteMatchFromBackEnd } from "../thunk/matchThunk";
import ScrollMatches from "./ScrollMatches";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getMatches } from "../thunk/matchThunk";

class MatchContainer extends React.Component {
  render() {
    if (this.props.renter !== null) {
      this.props.getMatches();
    }
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

        <div class="component-div">
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
    deleteMatchFromBackEnd: match => dispatch(deleteMatchFromBackEnd(match)),
    getMatches: () => dispatch(getMatches())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchContainer);
