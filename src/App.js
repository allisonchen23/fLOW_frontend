import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './App.css';
import logo from './assets/svg/flow_logo.svg';
// Connect pages
import Dashboard from "./pages/dashboard.js"
import Home from "./pages/home.js"
import Tips from "./pages/tips.js"
import SideNav from "./nav/SideNav.jsx"
import TopBar from "./nav/TopBar.jsx"

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

console.log(logo);

class App extends Component { 
  render() {
    return (
      <React.Fragment>
        <HashRouter name="app" path="/" handler={App} basename={process.env.PUBLIC_URL}>
       
          <Switch>
            <Route path = "/pages/home.js" exact component={Home}>

            </Route>
            <Route path = "/pages/dashboard.js">
              <Dashboard/>
              <SideNav/>
              <TopBar/>
            </Route>
            <Route path = "/pages/tips.js">
              <Tips/>
              <SideNav/>
              <TopBar/>
            </Route>
          </Switch>
          <Redirect from="/" exact to="/pages/home.js" />

        </HashRouter>

      </React.Fragment>
    );
  }
}

export default App;