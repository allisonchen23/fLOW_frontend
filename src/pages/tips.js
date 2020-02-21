//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './tips.css';
import logo from '../assets/svg/flow_logo.svg';
import dbman from '../assets/svg/dashboardimg.svg';
import drop from '../assets/svg/drop.svg';

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

// Random welcome message

class Welcome extends Component {

  getMsg() {
    var msg = ['Time to save water!', "Every drop has an impact.", "What can you do to save our planet?"];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }

  render() {
    return <h2>{this.getMsg()}</h2>;
  }
}

console.log(logo);

class Tips extends Component { 
  render() {
    return (
        <React.Fragment>
          <div className="body_t">
            <div className="body_wrap_t">
              <div className="body_container_t">
                <div className="body_box" id="message_box_t">
                  <div className="box_content_t">
                    <Welcome />
                  </div>  
                </div> 
                <div className="body_box_t long_t">
                  <div className="box_content_t">
                    <img className="dropimg" src={drop}/>                 
                  </div>  
                </div> 
                <div className="body_box_t full_width_t" id="message_box3_t">
                  <div className="box_content_t">
                  </div>  
                </div> 
                <div className="body_box long_t" id="message_box5_t">
                  <div className="box_content_t">
                  </div>  
                </div> 
                <div className="body_box_t">
                  <div className="box_content_t">
                  </div>  
                </div> 
              </div>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Tips;