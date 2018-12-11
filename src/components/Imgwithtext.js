import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
 
  };



class Imgwithtext extends React.Component {
    state = {

    };


  render(props) {  

    const { classes } = this.props;
   
      return (
         <Fragment>
            <div class="textImgContainer">
              <img src="../img/contact.jpg" alt="Snow" style={{width:"100%"}}/>
              <div className="textImgCentered">
                <p>Contact Us </p>
                <p className = "subtext">Have a question about our clinic? Feel free to give us a call or ask a question using the form below. </p>
              </div>
            </div>
         </Fragment>
     );
}

}
Imgwithtext.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Imgwithtext);
