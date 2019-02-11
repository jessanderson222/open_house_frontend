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
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import { Redirect } from "react-router-dom";

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

class RecipeReviewCard extends React.Component {
  state = { expanded: false, AgentInfoClick: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleDeleteMatch = e => {
    e.preventDefault();
    if (this.props) {
      this.props.deleteMatchFromDom(this.props.match);

      this.props.deleteMatchFromBackEnd(this.props.match);
    } else {
      return null;
    }
  };

  handleAgentInfo = e => {
    e.preventDefault();
    this.setState({
      agentInfoClick: !this.state.agentInfoClick
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props, this.state);
    if (this.state.agentInfoClick === true) {
      return (
        <div className="match-div">
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Agent" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={this.props.match.property.agent.name}
              subheader={this.props.match.property.agent.company}
            />
            <CardMedia
              className={classes.media}
              image={this.props.match.property.agent.img_url}
              title="img_1"
            />
            <CardContent>
              <Typography component="p">
                Email: {this.props.match.property.agent.email}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                onClick={this.handleDeleteMatch}
                aria-label="Delete Match"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={this.handleAgentInfo}
                aria-label="Agent Contact Info"
              >
                <i class="material-icons">home</i>
              </IconButton>
            </CardActions>
          </Card>
        </div>
      );
    } else {
      return (
        <div class="component-div">
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Agent" className={classes.avatar}>
                  <img
                    height="50px"
                    src={this.props.match.property.agent.img_url}
                  />
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                this.props.match.property.bedrooms !== 0
                  ? this.props.match.property.bedrooms +
                    ` Bedroom
          Apartment in ` +
                    this.props.match.property.borough
                  : `Studio
          Apartment in ` + this.props.match.property.borough
              }
              subheader={`$` + this.props.match.property.rent}
            />
            <CardMedia
              className={classes.media}
              image={this.props.match.property.img_1}
              title="img_1"
            />
            <CardContent>
              <Typography component="p">
                Neighborhood: {this.props.match.property.neighborhood}
                <br />
                Move in Date: {this.props.match.property.move_in_date}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <DeleteIcon onClick={this.handleDeleteMatch} />
              </IconButton>
              <IconButton aria-label="Agent Contact Info">
                <i onClick={this.handleAgentInfo} class="material-icons">
                  contact_mail
                </i>
              </IconButton>
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
                <Typography paragraph>
                  Distance to Subway:{" "}
                  {this.props.match.property.distance_to_subway} miles <br />
                  Bathrooms: {this.props.match.property.bathrooms}
                  <br />
                  Doorman: {this.props.match.property.doorman ? "Yes" : "No"}
                  <br />
                  Elevator: {this.props.match.property.elevator ? "Yes" : "No"}
                  <br />
                  Laundry: {this.props.match.property.laundry
                    ? "Yes"
                    : "No"}{" "}
                  <br />
                  Pet Friendly:{" "}
                  {this.props.match.property.pet_friendly ? "Yes" : "No"}
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={this.props.match.property.img_2}
                  title="img_2"
                />
                <CardMedia
                  className={classes.media}
                  image={this.props.match.property.img_3}
                  title="img_3"
                />
              </CardContent>
            </Collapse>
          </Card>
        </div>
      );
    }
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
