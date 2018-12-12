import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import doctors from '../doctors-data';

class Doctors extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
      console.log("J")
    }
  }

  render() {
    const renderDoctor = (doctor) => {
      const { name, picture, biography, profession } = doctor;
      return (
        <div className="doctor">
          <Grid
            container
            justify="space-even"
          >
            <Grid item xs={12} sm={5} lg={3} container justify="center">
              <img src={picture} alt={name}/>
            </Grid>
            <Grid item xs={12} sm={7} lg={8}>
              <div className="biography" >
                <h2>{name}</h2>
                <div className="profession">{profession}</div>
                {biography}
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }
  
    return (
      <div className="doctors">
        <h1> Meet our doctors</h1>
        <div className="border"> </div>
        <h4> Our ophthalmologists, optometrists and staff are committed to delivering a professional and enjoyable patient experience. </h4>
        {doctors.map((doctor) => renderDoctor(doctor))}
      </div>
    );
  }
}

export default Doctors;
