import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import styles from '../css/home.module.css';
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
          <div className={styles.body}>
            <div className={styles.nav}>
                <a href="login.js" id={styles.leftItem}>
                  Login
                </a>
                <a href="login.js#signup" id={styles.rightItem}>
                  Get Started
                </a>
            </div>
            <div className={styles.hero}>
              <img className={styles.logo} src={logo}/>
              <img className={styles.circles} src={bg}/> 
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Home;