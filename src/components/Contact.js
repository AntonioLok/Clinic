import React, { Component, Fragment } from 'react';
import Imgwithtext from './Imgwithtext'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Form from './Form'

class Colorsquare extends Component {

  render(props) {
    const { classes } = this.props
    return (
      <Fragment>
        <div className = "contactContainer">
            <Imgwithtext/>
            <Grid container spacing={0} align = "center" className = "colorSquareGrid">
              <Grid item xs={12} sm = {6} md = {6}>
              <table>
                <tr>
                <td><img className = "navIcon" src = "../img/telephone.png"/> </td>
                <td><p className = "navText"> 647-608-3962 </p> </td>
                </tr>
                <tr>
                <td><img className = "navIcon" src = "../img/telephone.png"/> </td>
                <td><p className = "navText"> 647-608-3962 </p> </td>
                </tr>
                <tr>
                <td><img className = "navIcon" src = "../img/telephone.png"/> </td>
                <td><p className = "navText"> 647-608-3962 </p> </td>
                </tr>
              </table>
              </Grid>
              <Grid item xs={12} sm = {6} md = {6}>
                  <Form/>
              </Grid>
        </Grid>
        </div>
      </Fragment>
    );
  }
}

export default Colorsquare;
