import React, {Fragment, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { BrowserRouter as Router } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import PropTypes from 'prop-types';

const styles = {
  root: {
      width: '100%',
      maxWidth: 360,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


class NavMenu extends Component {
 
  state = {
    right: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      right: open,
    });
  };

  render(props) {


    //Mobile menu
    const sideList = (
      <div style={styles.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Doctors" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Careers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
        
      </List>
    </div>
  );

    return (
      <Fragment>
      <div className="nav-menu">
        <Grid container spacing={0} align = "center">
        <Grid item xs={12} sm = {4} md = {4}>
          <table>
            <tr>
            <td><img className = "navIcon" src = "../img/telephone.png"/> </td>
            <td><p className = "navText"> 647-608-3962 </p> </td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={12} sm = {4} md = {4}>
          <table>
            <tr>
            <td><img className = "navIcon" src = "../img/mail.png"/> </td>
            <td><p className = "navText"> Deantowheed5@gmail.com </p> </td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={12} sm = {4} md = {4}>
          <table>
            <tr>
            <td><img className = "navIcon" src = "../img/location.png"/> </td>
            <td><p className = "navText"> 40 Dring Street, Ajax </p> </td>
            </tr>
          </table>
        </Grid>
        </Grid>
      </div>
       <div className="nav-menu-1">
       <Grid container spacing={0} align = "center">
          <Grid item xs={6} sm = {4} md = {4} lg = {6}>
              <img className = "navLogo" src = "../img/logo.png"/>
          </Grid>
          <Grid item xs={6} sm = {8} md = {8} lg = {6}>
              <Hidden smDown>
              <list className = "navList">
                <li> HOME </li> 
                <li> ABOUT US </li>
                <li> DOCTORS  </li>
                <li> DEPARTMENTS </li>
                <li> CAREERS </li>
                <li> CONTACT US </li>
              </list>
              </Hidden>
              <Hidden mdUp>
                <img className= "navMenu" onClick={this.toggleDrawer(true)} src = "../img/menu.png"/>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer(false)}>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                    >
                    {sideList}
                  </div>
                </Drawer>
              </Hidden>
          </Grid>
       </Grid>
     </div>
     </Fragment>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default NavMenu;
