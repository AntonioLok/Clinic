import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavMenu from './nav-menu';  
import Home from './home';
import Doctors from './doctors'
import Careers from './careers';
import Footer from './footer';
import AboutUs from './about-us';
import '../scss/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/careers" component={Careers} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
