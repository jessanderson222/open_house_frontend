import React from "react";
import { connect } from "react-redux";

class PropertyInfo extends React.Component {
  state = {
    imageClick: false
  };

  handleImageClick = e => {
    e.preventDefault();
    this.setState({
      imageClick: !this.state.imageClick
    });
  };

  render() {
    console.log(this.props);
    if (this.state.imageClick === true) {
      return (
        <div onClick={this.handleImageClick}>
          <img alt="" height="300px" src={this.props.property.img_2} />
          <br />
          <p>
            {this.props.property.move_in_date
              ? "Move in " + this.props.property.move_in_date
              : null}
          </p>
          <p>{this.props.property.distance_to_subway} miles to subway</p>
          <p>{this.props.property.doorman ? "Doorman Building" : null}</p>
          <p>{this.props.property.pet_friendly ? "Pets Allowed" : null}</p>
          <p>{this.props.property.laundry ? "Laundry in building" : null}</p>
          <p>{this.props.property.elevator ? "Elevator Building" : null}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            {this.props.property.bedrooms === 0
              ? "Studio"
              : this.props.property.bedrooms + " Bedroom"}{" "}
            Apartment in {this.props.property.borough}
          </h3>
          <img
            onClick={this.handleImageClick}
            height="300px"
            src={this.props.property.img_1}
          />
          <br />
          <p>
            {this.props.property.neighborhood}
            <br />${this.props.property.rent}
          </p>
        </div>
      );
    }
  }
}

export default connect()(PropertyInfo);
