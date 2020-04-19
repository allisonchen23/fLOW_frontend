import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import '../css/login.css';
import logo from '../assets/svg/flow_logo.svg';
import bg from '../assets/svg/circles.svg'


// Imports icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle, faFileAlt, faTint, faWater} from '@fortawesome/free-solid-svg-icons'

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle, faFileAlt, faTint, faWater);

console.log(logo);

class Home extends Component { 
  render() {
    return (
        <React.Fragment>
          <div className="body">
            <div className="nav">
                <a href="#" id="left-item">
                  Login
                </a>
                <a href="#" id="right-item">
                  Get Started
                </a>
            </div>
            <div className="hero">
              <img className="logo" src={logo}/>
              <img className="circles" src={bg}/> 
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Home;