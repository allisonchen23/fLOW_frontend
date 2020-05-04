import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import style from '../css/home.module.css';
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
          <div className={style.body}>
            <div className={style.hero}>
              <img className={style.logo} src={logo}/>
              <img className={style.circles} src={bg}/> 
            </div>
            <div className={style.nav}>
                <a href="login.js" id={style.leftItem}>
                  Login
                </a>
                <a href="login.js#signup" id={style.rightItem}>
                  Get Started
                </a>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Home;