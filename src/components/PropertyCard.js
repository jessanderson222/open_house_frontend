import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class PropertyCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            (this.props.property.bedrooms !== 0
              ? this.props.property.bedrooms + " Bedroom Apartment"
              : "Studio Apartment") +
            " in " +
            this.props.property.borough +
            " (" +
            this.props.property.neighborhood +
            ")"
          }
          subheader={"$" + this.props.property.rent}
        />
        <CardMedia
          className={classes.media}
          image={this.props.property.img_1}
          title="img_1"
        />
        <CardContent>
          <Typography component="p">
            Move-in Date: {this.props.property.move_in_date}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <h5>Matched Renters:</h5>
            </Typography>
            {this.props.property.renters.length > 0
              ? this.props.property.renters.map(renter => (
                  <Typography>
                    Renter: {renter.username}
                    <br />
                    Email: {renter.email}
                  </Typography>
                ))
              : "No current matches."}
            <br />
            <Typography>
              <h5>Property Details:</h5>
            </Typography>
            <Typography>
              Bathrooms: {this.props.property.bathrooms}
              <br />
              Distance to Subway: {this.props.property.distance_to_subway} miles
              <br />
              Doorman: {this.props.property.doorman ? "Yes" : "No"} <br />
              Elevator: {this.props.property.elevator ? "Yes" : "No"} <br />
              Laundry: {this.props.property.laundry ? "Yes" : "No"} <br />
              Pet Friendly: {this.props.property.pet_friendly ? "Yes" : "No"}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

PropertyCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PropertyCard);
