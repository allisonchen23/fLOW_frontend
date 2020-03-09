//Home Page
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './nav.css';
import logo from '../assets/svg/flow_logo.svg';
import prof from '../assets/svg/Ac.svg';

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
              <li id="name">
                Allison Chen
              </li>
              <li className="top_item">
                <img src={prof} alt=""/>
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