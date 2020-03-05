import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./myLineGraph";
//import { dayLabels } from "./mockData";
import firebase from "../firebase"

let dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthLabels = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            // start from 2/10/20
          daily_sums: {1581336000000: 30, 1581422400000: 54, 1581508800000: 100, 1581595200000: 14, 1581681600000: 93, 1581768000000: 24, 1581854400000: 48, 1581940800000: 33, 1582027200000: 5},
          filteredData: [],
          labels: [], //dayLabels
        };
      }

      filteredData = (startDateUnix) => {
        let daily_sums = this.state.daily_sums;
         console.log(this.state.daily_sums);
        let chartData = [];
        let charDays = [];
        let dayNames = dayLabels;
        let i = 0;
        let startDate = new Date(startDateUnix);
         let checkDate = new Date(startDate);
         let checkDateUnix = checkDate.getTime()
         let endDate = new Date(startDateUnix);
         endDate.setDate(startDate.getDate()+7);
         let endDateUnix = endDate.getTime();
        while(checkDateUnix <= endDateUnix) {
            charDays[i] = dayNames[checkDate.getDay()] + " " + monthLabels[checkDate.getMonth()] + " " + checkDate.getDate() + ", " + checkDate.getFullYear();
            if (checkDateUnix in daily_sums) {
                chartData[i] = daily_sums[checkDateUnix];
            }
            else {
                chartData[i] = 0;
            }
            //console.log(checkDate.getTime());
            i++;
            // checkDate = checkDate.getDate()+1;
            checkDate.setDate(checkDate.getDate() + 1);
            checkDateUnix = checkDate.getTime();
            console.log(checkDate)
            //console.log(chartData[0])
          }
        this.setState({
            filteredData: chartData,
            labels: charDays
        })
    }

    componentDidMount = () => {
        // let db = firebase.database();
        // let dataRef = db.ref('graph_dummy');
        // let volume = [];
        // dataRef.on('value', snapshot =>{
        //   const data = snapshot;
        //   data.forEach(childSnapshot => {
        //     volume.push(childSnapshot.child('volume').val());
        //   })
        //   this.setState({ daily_sums: volume, filteredData: volume })
        // })
        console.log("hello");
        this.filteredData(1581508800000);
    }



    render() {
        // console.log(this.state.filteredData)
        const { filteredData, labels } = this.state;
        return (

            <div className={classes.container}>
              <header>
                <h2>Your Usage History</h2>
              </header>
              <LineGraph
                data={filteredData}
                labels={labels} />
            </div>
        )
    }
    }