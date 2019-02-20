import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { connect } from "net";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    alignItems: "center"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  }
});

class PropertyTile extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
    this.props.postMatch(this.props.renter, this.props.properties[activeStep]);
    console.log(this.props.renter, this.props.properties[activeStep]);
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
    console.log("Nope");
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = this.props.properties.length;
    console.log(this.props);
    if (this.props.properties !== null) {
      return (
        <div className="property-tile">
          <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
              <Typography>
                {(this.props.properties[activeStep].bedrooms !== 0
                  ? this.props.properties[activeStep].bedrooms
                  : "") +
                  (this.props.properties[activeStep].bedrooms !== 0
                    ? " Bedroom Apartment in "
                    : "Studio Apartment in ") +
                  this.props.properties[activeStep].borough +
                  ", $"}
              </Typography>

              <Typography> {this.props.properties[activeStep].rent}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onClick={this.handleStepChange}
              enableMouseEvents
            >
              {this.props.properties.map((property, index) => (
                <div key={property.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={property.img_1}
                      alt={property.neighborhood}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              // steps={maxSteps}
              position="static"
              // activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size="medium"
                  onClick={this.handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <i class="material-icons">check_circle_outline</i>
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="medium"
                  onClick={this.handleBack}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <i class="material-icons">highlight_off</i>
                  )}
                </Button>
              }
            />
          </div>
        </div>
      );
    } else {
      return <h3>Please sign in</h3>;
    }
  }
}

PropertyTile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PropertyTile);
