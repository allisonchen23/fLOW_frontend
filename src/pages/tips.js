import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './tips.css';
import './globalstyle.css';
import logo from '../assets/svg/flow_logo.svg';
import dbman from '../assets/svg/dashboardimg.svg';
import drop from '../assets/svg/drop.svg';
import waterimage from '../assets/jpeg/waterimage.jpg';

// Imports icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle, faFileAlt, faTint, faWater} from '@fortawesome/free-solid-svg-icons'

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle, faFileAlt, faTint, faWater);

// Random welcome message

class Welcome extends Component {

  getMsg() {
    var msg = ['Each person uses about 80-100 gallons of water per day.', "Plastic bottles take ~3 times as much water to produce than they can actually hold.", "What can you do to save our planet?"];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }

  render() {
    return <h3 className="box_text blue_box_text">{this.getMsg()}</h3>;
    
  }
}

class FactsMessage extends Component {

  getMsg() {
    var msg = ['Showering, bathing and using the toilet account for about two-thirds of the average family’s water usage.', "A dripping faucet can lead to over 300 liters of water waste a month. That’s around 10 liters a day!", "In Los Angeles, around 54% of a single family’s water usage comes from landscaping and outdoor use."];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }

  render() {
    return <h3 className="box_text blue_box_text">{this.getMsg()}</h3>;
  }
}

class TipsMessage extends Component {

  getMsg() {
    var msg = ['Cutting 4 minutes from your shower can save 30 gallons of water.', "Cutting 4 minutes from your shower can save 30 gallons of water.", "Cutting 4 minutes from your shower can save 30 gallons of water."];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }

  render() {
    return <h2 className="box_text white_box_text">{this.getMsg()}</h2>;
  }
}

console.log(logo);

class Tips extends Component { 
  render() {
    return (
        <React.Fragment>
          <div className="body">
            <div className="body_wrap">
              <div className="body_container">
                <div className="body_box_t long2_t triple_height_t">
                  <div className="box_content_t" id="first_image">
                    {/* <img className="dropimg" src={drop}/>              */}
                  </div>  
                </div> 
                <div className="body_box_t long2_t triple_height_t" id="message_box_t">
                  <div className="box_content_t">
                    <Welcome />
                    <FontAwesomeIcon icon="water" className="water_icon"/>
                  </div>  
                </div> 
                <div className="body_box_t full_width_t double_height_t" id="message_box3_t">
                  <div className="box_content_t">
                  {/* <h2 className="box_text white_box_text"> Cutting 4 minutes from your shower can save 30 gallons of water. </h2> */}
                  <FontAwesomeIcon icon="lightbulb" className="lightbulb_icon"/>
                  <TipsMessage />
                  </div>  
                </div> 
                <div className="body_box_t long3_t triple_height_t" id="message_box5_t">
                  <div className="box_content_t icon_box">
                    <FontAwesomeIcon icon="tint" className="fact_icon"/>
                    {/* <img className="dropimg" src={drop}/>             */}
                    <FactsMessage />
                    {/* <h3 className="box_text blue_box_text">Showering, bathing and using the toilet account for about two-thirds of the average family’s water usage.</h3>  */}
                  </div>  
                </div> 
                <div className="body_box_t triple_height_t" id="second_image">
                  <div className="box_content_t">
                  <h2 className="box_text white_box_text"></h2>
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