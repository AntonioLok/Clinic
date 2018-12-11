import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    const applitcationForm = (
      <form onSubmit={(event) => this.handleSubmit(event)} className="application-form">
        <TextField
          label="First Name"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <TextField
          label="Last Name"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <TextField
          label="Email"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <TextField
          label="Phone"
          onChange={(event) => this.handleChange(event)}
          className="input"
          required
        /> <br/>
        <div className="file-upload">
          <div className="file-label">Resume:</div> 
          <input type="file" required/>
        </div>
        <div className="file-upload">
          <div className="file-label">Cover Letter:</div> 
          <input type="file" required/>
        </div>
        <TextField
          label="Additional comments (optional)"
          multiline={true}
          rows={8}
          className="input"
        /> <br/>
        <Button type="submit" color="primary" variant="contained">Submit</Button>
    </form>
  );

    return (
      <div className="job-application">
        <h1> Job Application Form </h1>
        {applitcationForm}
      </div>
    );
  }
}

export default Careers;
