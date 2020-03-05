import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './App.css';
import logo from './assets/svg/flow_logo.svg';
// Connect pages
import Home from "./pages/home.js"
import Tips from "./pages/tips.js"
import About from "./pages/about.js"
import SideNav from "./nav/SideNav.jsx"
import TopBar from "./nav/TopBar.jsx"

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

console.log(logo);

class App extends Component { 
  render() {
    return (
      <React.Fragment>
        <BrowserRouter name="app" path="/" handler={App}>

         <SideNav/>
         <TopBar/>
       
          <Switch>
            <Route path = "/pages/home.js" exact component={Home} />
            <Route path = "/pages/tips.js" exact component={Tips} />
            <Route path = "/pages/about.js" exact component={About} />
          </Switch>
          <Redirect from="/" exact to="/pages/home.js" />

        </BrowserRouter>

      </React.Fragment>
    );
  }
}

export default App;