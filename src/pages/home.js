//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './home.css';
import logo from '../assets/svg/flow_logo.svg';
import dbman from '../assets/svg/dashboardimg.svg';

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

// Random welcome message

class Welcome extends Component {

  getMsg() {
    var msg = ['Howdy, fLOW!', "Welcome to your dashboard, fLOW!", "Today is a great day to conserve!"];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }

  render() {
    return <h2>{this.getMsg()}</h2>;
  }
}

console.log(logo);

class Home extends Component { 
  render() {
    return (
        <React.Fragment>
          <div className="body">
            <div className="body_wrap">
              <div className="body_container">
                <div className="body_box long" id="message_box">
                  <div className="box_content">
                    <Welcome />
                    <img className="dbimg" src={dbman}/>
                  </div>  
                </div> 
                <div className="body_box">
                  <div className="box_content">
                  </div>  
                </div> 
                <div className="body_box">
                  <div className="box_content">
                  </div>  
                </div> 
                <div className="body_box full_width double_height">
                  <div className="box_content">
                  </div>  
                </div> 
              </div>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Home;