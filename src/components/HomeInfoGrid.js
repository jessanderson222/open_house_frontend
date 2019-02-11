import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  heading: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.heading}>
            <h2>Find an apartment that's the perfect match.</h2>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="paper">
            <img
              className="grid-picture"
              src="https://images.unsplash.com/photo-1492138645880-160f6a5136fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h4>Quit wasting your time on endless listings.</h4>

            <p>
              We show you only the apartments that have what you're looking for.
              Swipe through our listings until you find a place that you love.
            </p>
            <br />
            <h4>
              Let us match you with the apartments that you're looking for.
            </h4>
            <p>
              Enter your desired New York City borough and budget. We'll only
              show you apartments that meet your criteria.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h4>
              Once you match with an apartment, our realtors will help take care
              of the rest.
            </h4>
            <p>
              After making a match, you can view the full apartment details as
              well as the agent's contact information. Send them an email to ask
              any additional questions, set up a viewing, or sign a lease.
            </p>
            <br />
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">
            <img
              className="grid-picture"
              src="https://images.unsplash.com/photo-1472508249545-917598a8c985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.heading}>
            <h2>
              Ready to move into your next place? Sign in, and let's get
              swiping.
            </h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
