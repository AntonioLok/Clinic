import React, { Component, Fragment } from 'react';

class Colorsquare extends Component {

  render(props) {
    const { classes } = this.props
    return (
      <Fragment>
        <div className = "colorSquare" style = {{backgroundColor: this.props.color}}> 
            <p className = "colorSquareTitle"> {this.props.title} </p>
            <p className = "colorSquareDivider">_______________________</p>
            <p className = "colorSquareBody"> {this.props.body}</p>
            <button className ="colorSquareBtn"> Learn More </button>
        </div>
      </Fragment>
    );
  }
}

export default Colorsquare;
