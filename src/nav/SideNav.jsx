//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './nav.css';
import logo from '../assets/svg/flow_logo.svg';

// Imports icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

console.log(logo);

class Side_Nav extends Component { 
  render() {
    return (
        <React.Fragment>
          <div className="nav_wrap">
            <div className="logo_wrap">
              <a href="#top"><img src={logo}/></a>
            </div>
            <nav>
              <ul className="nav_list">
                <li className="nav_item">
                  <Link class="nav_square" to="/pages/home.js">
                    <div className="">
                      <FontAwesomeIcon icon="home" className="nav_icon"/>
                    </div>
                  </Link> 
                </li>
                <li className="nav_item"> 
                  <Link class="nav_square" to="/pages/tips.js">
                    <div className="">
                      <FontAwesomeIcon icon="lightbulb" className="nav_icon"/>
                    </div>
                  </Link>
                </li>
                <li className="nav_item"> 
                  <Link class="nav_square" to="/pages/about.js">
                      <div className="">
                        <FontAwesomeIcon icon="question-circle" className="nav_icon"/>
                      </div>
                    </Link>
                </li>
              </ul>
            </nav>
            </div>  

        </React.Fragment>
    );
  }
}

export default Side_Nav;