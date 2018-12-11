import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <Grid
          container
          justify="space-even"
        >
          <Grid item xs={12} className="page-banner"
            container
            alignItems="center"
            justify="center">
              ABOUT US
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutUs;
