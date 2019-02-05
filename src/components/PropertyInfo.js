import React from "react";
import { connect } from "react-redux";

class PropertyInfo extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>
          {this.props.property.bedrooms === 0
            ? "Studio"
            : this.props.property.bedrooms + " Bedroom"}{" "}
          Apartment in {this.props.property.borough}
        </h3>
        <img height="300px" src={this.props.property.img_1} />
        <br />
        <p>
          {this.props.property.neighborhood}
          <br />${this.props.property.rent}
        </p>
      </div>
    );
  }
}

export default connect()(PropertyInfo);
