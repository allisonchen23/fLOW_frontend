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

import LineGraph from "../graphdata/myLineGraph.js";
import classes from "./home.css";

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

// Random welcome message

class Welcome extends Component {

  getMsg() {
    var msg = ['Howdy!', "Welcome to Flow!", "Save Water!"];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }

  render() {
    return <h2>{this.getMsg()}</h2>;
  }
}

console.log(logo);

let dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthLabels = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

class Home extends Component {
  constructor() {
    super();

    this.state = {
      daily_sums: {}, //timestamp:sum
      volume: 0,
      filteredData: [],
      labels: [], //dayLabels
      weekly_usage: 0,
    }
  }
  
  filteredData = (startDate) => {
    let daily_sums = this.state.daily_sums;
    console.log("DATA BEING PASSED AS PROPS:")
    console.log(daily_sums);
    let chartData = [];
    let charDays = [];
    let dayNames = dayLabels;
    let i = 0;
    console.log("startDate" + startDate);
    let checkDate = new Date(startDate);
    let checkDateUnix = checkDate.getTime()
    let endDate = new Date(); 
    endDate.setUTCFullYear(startDate.getUTCFullYear());
    endDate.setUTCMonth(startDate.getUTCMonth());
    endDate.setUTCDate(startDate.getDate()+6);
    endDate.setUTCHours(12);
    endDate.setUTCMinutes(0);
    endDate.setUTCSeconds(0);
    endDate.setUTCMilliseconds(0);
    console.log("endDate" + endDate);
    let endDateUnix = endDate.getTime();
    while(checkDateUnix <= endDateUnix) {
        charDays[i] = dayNames[checkDate.getDay()] + " " + monthLabels[checkDate.getMonth()] + " " + checkDate.getDate() + ", " + checkDate.getFullYear();

        if (checkDateUnix in daily_sums) {
            chartData[i] = daily_sums[checkDateUnix];
        }
        else {
            chartData[i] = 0;
        }
        i++;
        checkDate.setDate(checkDate.getUTCDate() + 1);
        checkDateUnix = checkDate.getTime();
      }
    this.setState({
        filteredData: chartData,
        labels: charDays
    })
  }

  // getWeeklyWaterUsage = (startDate, endDate) =>
  // {
  //   let daily_sums = this.state.daily_sums;
  //   let gal_used = 0;
  //   let startDateUnix = startDate.getTime();

  //   while(startDateUnix <= endDate.getTime()) {     
  //     gal_used += daily_sums[startDateUnix];
      
  //     startDate.setDate(startDate.getUTCDate() + 1);
  //     startDateUnix = startDate.getTime();
  //   }

  //   this.setState({weekly_usage: gal_used});    
  // }

  componentDidMount = () => {
    let gal_used = 0;
    let lastDay = new Date(0);

    let db = firebase.database();
    let dataRef = db.ref('water_data');
    let daily_sums = this.state.daily_sums;

    dataRef.on('value', snapshot => {
      const data = snapshot; //testing    
      let timestamp;
      let vol;
      let date;
      let noon_timestamp;
      let time_in_unix_ms;
      //each cxhild snapshot is an entry from arduino
      data.forEach(childSnapshot => {
        timestamp = childSnapshot.key*1000; //s to ms
        vol = childSnapshot.child('volume').val();
        gal_used += vol;
        date = new Date();
        date.setTime(timestamp);

        //Month: starting from 0 (Jan) -> ex. 4 is May
        //new Date set the time to PST -> 4 am PST -> 12 pm UTC
        noon_timestamp = new Date();
        noon_timestamp.setUTCFullYear(date.getUTCFullYear());
        noon_timestamp.setUTCMonth(date.getUTCMonth());
        noon_timestamp.setUTCDate(date.getUTCDate());
        noon_timestamp.setUTCHours(12);
        noon_timestamp.setUTCMinutes(0);
        noon_timestamp.setUTCSeconds(0);
        noon_timestamp.setUTCMilliseconds(0);

        if(noon_timestamp > lastDay)
          lastDay = noon_timestamp;

        time_in_unix_ms = noon_timestamp.getTime()

        if (time_in_unix_ms in daily_sums) {
          daily_sums[time_in_unix_ms] += vol;
        } else {
          daily_sums[time_in_unix_ms] = vol;
        }
      })

      let lastSevenDays =  new Date();
      lastSevenDays.setUTCFullYear(lastDay.getUTCFullYear());
      lastSevenDays.setUTCMonth(lastDay.getUTCMonth());
      lastSevenDays.setUTCDate(lastDay.getUTCDate()-7);
      lastSevenDays.setUTCHours(12);
      lastSevenDays.setUTCMinutes(0);
      lastSevenDays.setUTCSeconds(0);
      lastSevenDays.setUTCMilliseconds(0);

      
      this.filteredData(lastSevenDays);
      
      this.setState({weekly_usage: gal_used}); 
    
      let i = 0;
      let lastWeekData = []
      while (i < 7) {
        lastWeekData.push((lastSevenDays + i).val());
        i++;
      }
      
    })

  }
  render() {
    console.log(this.state.daily_sums);
    const { filteredData, labels } = this.state;

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
                <div className="body_box regular">
                  <div className="box_content stat_box">
                    <img className="dropimg" src={drop}/> 
                    <div className="data_text">
                      <b>{this.state.weekly_usage} gal</b> 
                      <p className="data_text_bot">Total Water Usage</p>
                    </div>
                  </div>  
                </div> 
                <div className="body_box regular">
                  <div className="box_content">
                  </div>  
                </div> 
                <div className="body_box full_width double_height">
                  <div id="graph_wrap">
                    <div id="graph_htmlcontainer">
                      
                    <div className={classes.container}>
                      <header>
                        <h2>Your Usage History</h2>
                      </header>
                      <LineGraph
                        data={filteredData}
                        labels={labels} />
                    </div>

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