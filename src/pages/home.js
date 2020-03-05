import React, { Component } from 'react';

import './home.css';
import './globalstyle.css';
import logo from '../assets/svg/flow_logo.svg';
import firebase from "../firebase"
import dbman from '../assets/svg/dashboardimg.svg';
import drop from '../assets/svg/drop.svg';
import downtrend from '../assets/svg/downtrend.svg';
import uptrend from '../assets/svg/uptrend.svg';

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import LineGraph from "../graphdata/myLineGraph.js";
import classes from "./home.css";

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

class Welcome extends Component {

  getMsg() {
    var msg = ['Howdy!', "Welcome to fLOW!", "Save Water!"];
    var i = Math.floor(Math.random() * Math.floor(3));
    return msg[i];
  }
  
  render() {
    return <h2>{this.getMsg()}</h2>;
  }
}

let dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthLabels = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

class Home extends Component {
  constructor() {
    super();

    this.state = {
      daily_sums: {}, //timestamp:sum
      filteredData: [],
      labels: [], //dayLabels
      weekly_usage: 0,
      perc_difference: 0
    }
  }

  filteredData = (startDate) => {
    let daily_sums = this.state.daily_sums;
<<<<<<< HEAD
    // console.log("DATA BEING PASSED AS PROPS:")
    // console.log(daily_sums);
=======
>>>>>>> c13f8f2e218a60a9dba0bdc1d7bb677597574d6e
    let chartData = [];
    let charDays = [];
    let dayNames = dayLabels;
    let i = 0;
<<<<<<< HEAD
    // console.log("startDate" + startDate);
=======
>>>>>>> c13f8f2e218a60a9dba0bdc1d7bb677597574d6e
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
<<<<<<< HEAD
    // console.log("endDate" + endDate);
=======
>>>>>>> c13f8f2e218a60a9dba0bdc1d7bb677597574d6e
    let endDateUnix = endDate.getTime();
    while(checkDateUnix <= endDateUnix) {
        charDays[i] = dayNames[checkDate.getDay()] + ", " + monthLabels[checkDate.getMonth()] + " " + checkDate.getDate();// + ", " + checkDate.getFullYear();

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

  getWeeklyWaterUsage = (startDate, endDate) =>
  {
    let startOfPrevWeek =  new Date();
    startOfPrevWeek.setUTCFullYear(startDate.getUTCFullYear());
    startOfPrevWeek.setUTCMonth(startDate.getUTCMonth());
    startOfPrevWeek.setUTCDate(startDate.getUTCDate()-7);
    startOfPrevWeek.setUTCHours(12);
    startOfPrevWeek.setUTCMinutes(0);
    startOfPrevWeek.setUTCSeconds(0);
    startOfPrevWeek.setUTCMilliseconds(0);

    let daily_sums = this.state.daily_sums;

    let gal_used = 0;
    let startDateUnix = startDate.getTime();
    let endDateUnix = endDate.getTime();

    while(startDateUnix <= endDateUnix) { 
      if (startDateUnix in daily_sums)
        gal_used += daily_sums[startDateUnix];
      
      startDate.setDate(startDate.getUTCDate() + 1);
      startDateUnix = startDate.getTime();
    }

    this.setState({weekly_usage: gal_used});  
    
    endDate.setDate(startOfPrevWeek.getUTCDate() + 6);

    startDateUnix = startOfPrevWeek.getTime();
    endDateUnix = endDate.getTime();

    let prev_gal_used = 0;;

    while(startDateUnix <= endDateUnix) { 
      if (startDateUnix in daily_sums)
        prev_gal_used += daily_sums[startDateUnix];      
      startOfPrevWeek.setDate(startOfPrevWeek.getUTCDate() + 1);
      startDateUnix = startOfPrevWeek.getTime();
    }
    let perc = gal_used/prev_gal_used*100;
    perc = perc.toFixed(2)
    this.setState({perc_difference: perc});
  }

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
      lastSevenDays.setUTCDate(lastDay.getUTCDate()-6);
      lastSevenDays.setUTCHours(12);
      lastSevenDays.setUTCMinutes(0);
      lastSevenDays.setUTCSeconds(0);
      lastSevenDays.setUTCMilliseconds(0);

      this.filteredData(lastSevenDays);
      this.getWeeklyWaterUsage(lastSevenDays, lastDay);    
    })
    
  }
  render() {
    const { filteredData, labels } = this.state;
    
    var trendingImage;
    if (this.state.perc_difference > 0)
      trendingImage = <img className='dropimg' src={uptrend}/>;
    else 
      trendingImage = <img className='dropimg' src={downtrend}/>;

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
                      <b>{this.state.weekly_usage} <div id="gal">gal.</div></b> 
                      <p className="data_text_bot">Water Used This Week</p>
                    </div>
                  </div>  
                </div> 
                <div className="body_box regular">
                  <div className="box_content stat_box">
                    {trendingImage}
                   {/* <img className='dropimg' src={downtrend}/>   */}

                    <div className="data_text">
                      <b>{this.state.perc_difference} <div id="gal">%</div></b> 
                      <p className="data_text_bot">From Last Week</p>
                    </div>
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