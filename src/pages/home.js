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
  constructor(props) {
    super(props);

    this.state = {
      daily_sums: {}, //timestamp:sum
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
    let daily_sums = this.state.daily_sums;

    dataRef.on('value', snapshot => {
      const data = snapshot; //testing
      //each child snapshot is an entry from arduino
      
      let timestamp;
      let vol;
      let date;
      let noon_timestamp;
      let time = [1582180966000, 1582180900000,1582180466000,1582180466000,1582180666000,1582180766000,1582180866000];
      data.forEach(childSnapshot => {
        timestamp = 1582180966000; //childSnapshot.key;
        //console.log(timestamp);
        vol = childSnapshot.child('volume').val();
        //console.log(vol);
        date = new Date();
        date.setTime(timestamp);

        //Month: starting from 0 (Jan) -> ex. 4 is May
        noon_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0, 0);

        //console.log(noon_timestamp.getHours());

        if (noon_timestamp in daily_sums) {
          daily_sums[noon_timestamp] += vol;
        } else {
          daily_sums[noon_timestamp] = vol;
        }

        console.log(daily_sums[noon_timestamp]);

      })
    })

    //this.setState({daily_sums:daily_sums});
  }
  render() {
    console.log(this.state.daily_sums);
    //console.log(Object.keys(this.state.daily_sums)[0] + " - value: " + this.state[Object.keys(this.state.daily_sums)[0]]);
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
                    <img className="dropimg" src={drop}/>                 
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