import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


//Notes
//- Adding a slide, we jus need to add a dot, and adjust the prev and next and dotClick methods to account for new slide
//- We can easily add and overlaying button or something of that nature by using the same css used for dots or next/prev


class TextFields extends React.Component {
    state = {
        curr:1,
        play: true
    };

    //Remove this,auto,play,pause if we dont need auto slides. remove playpause in the render. remove play:true from state.
    componentDidMount = () => {
       this.auto()
    }

    auto = () => {
        this.setState({
            interval:  setInterval( () =>  { this.next() }, 10000)
        })
   
    }

    play = () => {
        this.auto()
        this.setState({
            play: true
        })
    }

    pause = () => {
        clearInterval(this.state.interval)
        this.setState({
            play: false
        })
    }
   
    //moves to previous slide in rotation
    prev = () => {
        let newcurr;
        if (this.state.curr == 1) {
            newcurr = 3;
            this.refs.dot1.className = this.refs.dot1.className.replace(" active", "")
            this.refs.dot3.className += " active"
        }
        else if (this.state.curr == 2) {
            newcurr = 1;
            this.refs.dot2.className = this.refs.dot2.className.replace(" active", "")
            this.refs.dot1.className += " active"
            
        }
        else {
            newcurr = 2 ;
            this.refs.dot3.className = this.refs.dot3.className.replace(" active", "")
            this.refs.dot2.className += " active"
        }
        this.setState({
            curr:newcurr
        })
    }

    //moves to next slide in rotation
    next = () => {
        let newcurr;
        if (this.state.curr == 1) {
            newcurr = 2;
            this.refs.dot1.className = this.refs.dot1.className.replace(" active", "")
            this.refs.dot2.className += " active"
        }
        else if (this.state.curr == 2) {
            newcurr = 3;
            this.refs.dot2.className = this.refs.dot2.className.replace(" active", "")
            this.refs.dot3.className += " active"
            
        }
        else {
            newcurr = 1 ;
            this.refs.dot3.className = this.refs.dot3.className.replace(" active", "")
            this.refs.dot1.className += " active"
        }
        this.setState({
            curr:newcurr
        })
    }

    //moves to specific slide and changes the dots appearance
    dotClick = (newcurr) => {
        if (newcurr == 1) {
            this.refs.dot1.className += " active"
            this.refs.dot2.className = this.refs.dot2.className.replace(" active", "")
            this.refs.dot3.className = this.refs.dot3.className.replace(" active", "")
        }
        else if (newcurr == 2) {
            this.refs.dot2.className += " active"
            this.refs.dot3.className = this.refs.dot3.className.replace(" active", "")
            this.refs.dot1.className = this.refs.dot1.className.replace(" active", "")
        }
        else {
            this.refs.dot3.className += " active"
            this.refs.dot1.className = this.refs.dot1.className.replace(" active", "")
            this.refs.dot2.className = this.refs.dot2.className.replace(" active", "")
        }
        this.setState({
            curr: newcurr
        })
    }

  render(props) {  

    const { classes } = this.props;
      
    return (
    <Fragment>
        <div className="slideshowContainer">
            <div className="mySlides fade" hidden = {this.state.curr != 1}>
                <img src="../img/product.jpg" style={{width: "100%"}}/>
            </div>
            <div className="mySlides fade" hidden = {this.state.curr != 2}>
                <img src="../img/product1.jpg"  style={{width: "100%"}}/>
            </div>
            <div className="mySlides fade" hidden = {this.state.curr != 3}>
                <img src="../img/product2.jpg"  style={{width: "100%"}}/>
            </div>
            <p className="prev" onClick = {this.prev}>&#10094;</p>
            <p className="next" onClick = {this.next}>&#10095;</p>
            <span ref = "dot1" className="dot dot1 active" onClick = {this.dotClick.bind(this,1)} ></span>
            <span ref = "dot2" className="dot dot2" onClick = {this.dotClick.bind(this,2)} ></span>
            <span ref = "dot3" className="dot dot3" onClick = {this.dotClick.bind(this,3)} ></span>
        </div>
    </Fragment>
     );
}

}
TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default (TextFields);