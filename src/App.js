import React, { Component } from 'react';
import './App.css';
import logo from './assets/svg/flow_logo.svg';
// Connect pages
import Home from "./pages/home.js"
import Data from "./pages/data.js"
import About from "./pages/about.js"
import Side_Nav from "./nav/SideNav.jsx"
import Top_Bar from "./nav/TopBar.jsx"

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
        <BrowserRouter>

         <Side_Nav/>
         <Top_Bar/>
       
          <Switch>
            <Route path = "/pages/home.js" exact component={Home} />
            <Route path = "/pages/data.js" exact component={Data} />
            <Route path = "/pages/about.js" exact component={About} />
          </Switch>
          </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;