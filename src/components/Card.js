import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
  card: {
    width:"80%",
    maxWidth: 270,
    marginTop:50,
    height:305,
  },
  media: {
    height: 200,
    width:"100%"
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
  
        <CardMedia
          className={classes.media}
          image={this.props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <p> <b> Physician </b> </p>
          <p> Dr John Doe </p>
        </CardContent>
    
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);