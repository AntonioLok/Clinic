import React, { Component, Fragment } from 'react';
import Slideshow from './Slideshow';
import Hours from './Hours';
import Colorsquare from './Colorsquare';
import Testimonial from './Testimonial';
import Card from './Card'; 
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {

    return (
      <Fragment>
        <Slideshow/>

        <Grid container spacing={0} align = "center" className = "colorSquareGrid">
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Physiology" color = "teal" body = "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Cardiology" color = "purple" body = "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Dental" color = "steelblue" body = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta."/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Colorsquare title = "Rehab" color = "darkred" body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."/>
        </Grid>
        </Grid>

        <Grid container spacing={0} align = "center" className = "colorSquareGrid">
        <Grid item xs={12} sm = {6} md = {8}>
            <Testimonial text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." name="- John Doe (Patient)" img="../img/profile1.jpg" />
            <hr/>
            <Testimonial text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." name="- John Doe (Patient)" img="../img/profile.jpg"/>
            <hr/>
            <Testimonial text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." name="- John Doe (Patient)" img="../img/profile1.jpg"/>
        </Grid>
        <Grid item xs={12} sm = {6} md = {4}>
            <Hours/>
        </Grid>
        </Grid>



        <Grid container spacing={0} align = "center" className = "doctorGrid">
        <Grid item xs={1} sm = {1} md = {1}>
            <p className = "prevDoctor">&#10094;</p> 
        </Grid>
        <Grid item xs={10} sm = {10} md = {10}>
          <Grid container spacing={0} align = "center">
            <Grid item xs={12} sm = {6} md = {4}>
                <Card src = "../img/doctor1.jpg"/>
            </Grid>
            <Grid item xs={12} sm = {6} md = {4}>
                <Card src = "../img/doctor2.jpg"/>
            </Grid>
            <Grid item xs={12} sm = {6} md = {4}>
               <Card src = "../img/doctor3.jpg"/>
            </Grid>
          </Grid>
             
        </Grid>
        <Grid item xs={1} sm = {1} md = {1}>
            <p className="nextDoctor">&#10095;</p> 
        </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Home;
