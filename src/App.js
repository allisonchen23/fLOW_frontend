import React, { Component } from 'react';
import './App.css';
import logo from './assets/svg/flow_logo.svg';
// Connect pages
import Home from "./pages/home.js"
import Tips from "./pages/tips.js"
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
  // componentDidMount = () => {
  //   let db = firebase.database();
  //   let dataRef = db.ref('graph_dummy');
  //   let volume = [];
  //   dataRef.on('value', snapshot =>{
  //     const data = snapshot;
  //     data.forEach(childSnapshot => {
  //       volume.push(childSnapshot.child('volume').val());
        
  //     })
  //   })
  //   console.log(volume);
  //   console.log('saved');
    
  //}
 
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>

         <Side_Nav/>
         <Top_Bar/>
       
          <Switch>
            <Route path = "/pages/home.js" exact component={Home} />
            <Route path = "/pages/tips.js" exact component={Tips} />
            <Route path = "/pages/about.js" exact component={About} />
          </Switch>
          </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;