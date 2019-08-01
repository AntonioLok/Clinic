import React, { Component, Fragment } from 'react';
import Imgwithtext from './Imgwithtext'
import Grid from '@material-ui/core/Grid'; 

var images = ["../img/physiologydepartment.jpg" , "../img/cardiologydepartment.jpg", "../img/dentaldepartment.jpg" , "../img/rehabdepartment.jpg",]
var departmentNames = ["Physiology" , "Cardiology", "Dental", "Rehab"]

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  setCurr(newcurr) {
    this.setState({
      curr:newcurr
    })
  }

  render(props) {
    var tabclasses = ["tab", "tab", "tab" , "tab"];
    tabclasses[this.state.curr] += " selectedTab"

    return (
      <Fragment>
        <div className = "departmentContainer">
            <Imgwithtext src = "../img/department.jpg" text = ""/>
            <h1> Departments</h1>
            <div className="border"> </div>
            <h4> Learn more about our state of the art teams. </h4>
            <div className = "tabContainer">
              <p onClick = {this.setCurr.bind(this,0)} className = {tabclasses[0]}> Physiology </p>
              <p onClick = {this.setCurr.bind(this,1)}  className = {tabclasses[1]}> Cardiology </p>
              <p onClick = {this.setCurr.bind(this,2)}  className = {tabclasses[2]}> Dental </p>
              <p onClick = {this.setCurr.bind(this,3)}  className = {tabclasses[3]}> Rehab </p>
              <div className = "tabContent">
                <div className = "tabImageContainer">
                    <img alt = "departmentimage" className = "tabImage" src = {images[this.state.curr]}/>
                  <div className = "tabImageOverlay">
                    <h1> {departmentNames[this.state.curr]} </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. </p>   
                  </div> 
                </div>
                <Grid container spacing={0} align = "center">
              <Grid item xs={12} sm = {4} md = {4}>
                <div className = "tabSecondaryContent">
                <div className = "tabCircleContainer">
                  
                  <img alt = "icon1" src = "../img/departmenticon1.png"/>
                </div> 
                <p> SOME SAMPLE TEXT </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
              </Grid> 
              <Grid item xs={12} sm = {4} md = {4}>
                <div className = "tabSecondaryContent">
                <div className = "tabCircleContainer">
                  <img alt = "icon2"  src = "../img/departmenticon2.png"/>
                </div> 
                <p> SOME SAMPLE TEXT </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
              </Grid> 
              <Grid item xs={12} sm = {4} md = {4}>
                <div className = "tabSecondaryContent">
                <div className = "tabCircleContainer">
                <img alt = "icon3"  src = "../img/departmenticon3.png"/>
                </div> 
                <p> SOME SAMPLE TEXT </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
              </Grid> 
              </Grid>
  
              </div>
            </div>
         
        </div>
      </Fragment>
    );
  }
}

export default Department;
