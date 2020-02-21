//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './home.css';
import logo from '../assets/svg/flow_logo.svg';
import firebase from "../firebase"
import dbman from '../assets/svg/dashboardimg.svg';
import drop from '../assets/svg/drop.svg';

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Dashboard from "../graphdata/Dashboard.js"


// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

// Random welcome message

class Welcome extends Component {

  getMsg() {
    var msg = ['Howdy!', "Welcome to your dashboard!", "Today is a great day to conserve!"];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }

  render() {
    return <h2>{this.getMsg()}</h2>;
  }
}

console.log(logo);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      daily_sums: {},
      volume: 0
    }
  }
  getDaysData = (db) => {

    let sumsRef = db.ref('daily_sums');
    sumsRef.once('value').then(snapshot => {
      let db_days = snapshot.val();
      this.setState({ daily_sums: db_days });
    })
    // this.setState({ daily_sums: sumsRef.once('value').snapshot.val()});
  }
  updateDays = (day_index, new_vol) => {
  }
  componentDidMount = () => {
    let db = firebase.database();
    this.getDaysData(db);
    let dataRef = db.ref('graph_dummy');
    let volume = 0;
    dataRef.on('value', snapshot => {
      const data = snapshot;
      //each child snapshot is an entry from arduino
      data.forEach(childSnapshot => {
        if (childSnapshot.key > 100 && childSnapshot.key < 150) {
          volume = volume + childSnapshot.child('volume').val();
          console.log(volume);
        }
      })
      this.setState({ volume: volume });
    })
  }
  render() {
    console.log(this.state.volume);
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
                  <div className="box_content stat_box">
                    <img className="dropimg" src={drop}/> 
                    <div className="data_text">
                      "Data"
                      <div className="static_data_text">
                        <b>gal.</b>
                        __html: {'<br>'}
                        Water Used this Week
                      </div>    
                    </div>         
                  </div>  
                </div> 
                <div className="body_box">
                  <div className="box_content">
                  </div>  
                </div> 
                <div className="body_box full_width double_height">
                  <div className="box_content">
                  <Dashboard/>
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