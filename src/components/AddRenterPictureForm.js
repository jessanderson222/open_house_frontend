import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { editRenter } from "../thunk/renterThunk";

class AddRenterPictureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: ""
    };
  }

  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state, this.props);
    this.props.editRenter(this.state, this.props);
    this.props.history.push("/profile");
  };

  render() {
    console.log(this.props, this.state);
    return (
      <div>
        <h4>Current Photo:</h4>
        <div>
          {this.props.renter ? (
            <img
              src={this.props.renter.img_url}
              alt="No picture currently selected"
              height="200px"
            />
          ) : (
            <h3>No</h3>
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Image URL</label>
          <input
            type="text"
            name="img_url"
            onChange={this.handleChange}
            value={this.state.img_url}
          />
          {this.props.renter ? (
            <input type="hidden" name="renterId" value={this.props.renter.id} />
          ) : null}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.renter === null) {
    return null;
  } else
    return {
      renter: state.loggedInRenter
    };
};

const mapDispatchToProps = dispatch => {
  return {
    editRenter: (form, id) => dispatch(editRenter(form, id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddRenterPictureForm)
);
