import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { browserHistory } from 'react-router';

class AboutUs extends Component {

  reroute = (path) => {
    browserHistory.push(path);
  }

  render() {
    return (
      <div className="about-us">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          spacing={12}
        >
          <Grid item xs={12} className="page-banner"
            container
            alignItems="center"
            justify="center">
              ABOUT US
          </Grid>
          <div className="container">
            <Grid
              container
              direction="row"
              justify="space-evenly"
              spacing={12}
              className="why-best-section" 
            >
              <Grid item xs={12} md={6}
                container
                justify="center"
                className="intro"
              >
                <div className="intro-left">
                  <img alt="about-us" src="http://theembazaar.com/demo/themesfolios/medical-care/assets/images/image5.jpg" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}
                container
                justify="center"
                className="intro"
              >
                <div className="intro-right">
                  <h2>BEST MEDICAL & HEALTH CARE NEEDS TO OUR PATIENTS</h2>
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros amet sollicitudin interdum. Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare mi, et mollis tellus neque vitae elit. Mauris adipiscing mauris fringilla turpis interdum sed pulvinar nisi malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    +
                    "\n\nDonec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
                    +
                    "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros amet sollicitudin interdum. Suspendisse pulvinar, velit nec pharetra interdum, ante tellus ornare mi, et mollis tellus neque vitae elit. Mauris adipiscing mauris fringilla turpis interdum sed pulvinar nisi malesuada."
                  }
                </div>
              </Grid>
            </Grid>
          </div>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            spacing={12}
            className="why-best-section" 
          >
            <Grid item xs={12} md={6} className="description">
              <div className="container">
                <div className="title">Why we are the best</div>
              </div>
              <div className="icon">
                <i className="material-icons md-60 md-light">thumb_up</i>
                <div className="description-icon-text">
                  <div className="title">WELL EXPERIENCED DOCTORS</div>
                  Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean.
                </div>
              </div>
              <div className="icon">
                <i className="material-icons md-60 md-light">assignment</i>
                <div className="description-icon-text">
                  <div className="title">FREE MEDICAL COUNSELING</div>
                  Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean.
                </div>
              </div>
              <div className="icon">
                <i className="material-icons md-60 md-light">wifi_tethering</i>
                <div className="description-icon-text">
                  <div className="title">ONLINE BILL PAYMENT</div>
                  Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean.
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="img">
              </div>
            </Grid>
            <Grid item xs={12}
              className="meet-our-specialist"
              container
              justify="center"
            >
            <div
              className="label"
              onClick = {this.reroute.bind(this, "/doctors")}>
              Meet our specialists
            </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutUs;
