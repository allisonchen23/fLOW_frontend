//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './nav.css';
import logo from '../assets/svg/flow_logo.svg';

// Imports icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons'


// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle, faBell);

console.log(logo);

class Top_Bar extends Component { 
  render() {
    return (
        <React.Fragment>
          <nav className = "top_bar">
          
          <ul className="top_list">
            <li className="top_item">
                  <a> AC </a>
            </li>

                
                <li className="top_item">
                  <Link to="/"><FontAwesomeIcon icon="user-circle" className="top_icons"/></Link>
                </li>
                <li className="top_item">
                  <Link to="/"><FontAwesomeIcon icon="bell" className="top_iconsa"/></Link>
                </li>
              
          </ul>
        </nav>
        </React.Fragment>
    );
  }
}

export default Top_Bar;