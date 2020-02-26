import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './home.css';
import './globalstyle.css';
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

  componentDidMount = () => {
    let db = firebase.database();
    //this.getDaysData(db);
    let dataRef = db.ref('water_data');
    let daily_sums = this.state.daily_sums;

    dataRef.on('value', snapshot => {
      const data = snapshot; //testing
      //each cxhild snapshot is an entry from arduino
      
      let timestamp;
      let vol;
      let date;
      let noon_timestamp;
      let time_in_unix_ms;
      data.forEach(childSnapshot => {
        timestamp = childSnapshot.key*1000;
        //console.log(timestamp);
        vol = childSnapshot.child('volume').val();

        date = new Date();
        date.setTime(timestamp);

        //Month: starting from 0 (Jan) -> ex. 4 is May
        noon_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0, 0);

        //console.log(noon_timestamp.getHours());

        time_in_unix_ms = noon_timestamp.getTime()

        if (time_in_unix_ms in daily_sums) {
          daily_sums[time_in_unix_ms] += vol;
        } else {
          daily_sums[time_in_unix_ms] = vol;
        }

        console.log(daily_sums[time_in_unix_ms]);

      })
    })

    //this.setState({daily_sums:daily_sums});
  }
  render() {
    console.log(this.state.daily_sums);
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
                      </div>    
                    </div>         
                  </div>  
                </div> 
                <div className="body_box">
                  <div className="box_content">
                  </div>  
                </div> 
                <div className="body_box full_width double_height">
                  <div id="graph_wrap">
                    <div id="graph_htmlcontainer">
                      <Dashboard/>
                    </div>
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