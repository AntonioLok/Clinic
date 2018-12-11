import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Hours extends Component {

  render(props) {
    const { classes } = this.props
    return (
      <Fragment>
        <div className = "hoursContainer"> 
            <p className = "hoursTitle"> Hours of Operation</p>
            <hr/>
            <p className = "hoursBody"> Monday: 7:00 - 22:00</p>
            <hr/>
            <p className = "hoursBody"> Tuesday: 7:00 - 22:00</p>
            <hr/>
            <p className = "hoursBody"> Wednesday: 7:00 - 22:00</p>
            <hr/>
            <p className = "hoursBody"> Thursday: 7:00 - 22:00</p>
            <hr/>
            <p className = "hoursBody"> Friday: 7:00 - 22:00</p>
            <hr/>
            <p className = "hoursBody"> Saturday: 7:00 - 22:00</p>
            <hr/>
            <p className = "hoursBody"> Sunday: 7:00 - 22:00</p>
        </div>
      </Fragment>
    );
  }
}

export default Hours;
