//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './home.css';
import logo from '../assets/svg/flow_logo.svg';

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'


// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

console.log(logo);

class Home extends Component { 
  render() {
    return (
        <React.Fragment>

          <header className="App-header">
            <title>
              Creative Lab: fLOW
            </title>

              <a className="github-link" href="https://github.com/allisonchen23/fLOW" target="_blank" rel="noopener noreferrer">
                Our GitHub
              </a>
          </header>
        </React.Fragment>
    );
  }
}

export default Home;