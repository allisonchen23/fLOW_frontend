import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./myLineGraph";
//import { dayLabels } from "./mockData";

let dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthLabels = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // start from 2/10/20
          //daily_sums: {1581336000000: 30, 1581422400000: 54, 1581508800000: 100, 1581595200000: 14, 1581681600000: 93, 1581768000000: 24, 1581854400000: 48, 1581940800000: 33, 1582027200000: 5},
          filteredData: [],
          labels: [], //dayLabels
          //daily_sums: this.props.data   
        };
      }


      filteredData = (startDateUnix) => {
        let daily_sums = this.props.data; //this.state.daily_sums;
        console.log("DATA BEING PASSED AS PROPS:")
        console.log(daily_sums);
        let chartData = [];
        let charDays = [];
        let dayNames = dayLabels;
        let i = 0;
        let startDate = new Date(startDateUnix);
        console.log("startDate" + startDate);
        let checkDate = new Date(startDate);
        let checkDateUnix = checkDate.getTime()
        let endDate = new Date(); 
        endDate.setUTCFullYear(startDate.getUTCFullYear());
        endDate.setUTCMonth(startDate.getUTCMonth());
        endDate.setUTCDate(startDate.getDate()+7);
        endDate.setUTCHours(12);
        endDate.setUTCMinutes(0);
        endDate.setUTCSeconds(0);
        endDate.setUTCMilliseconds(0);
        console.log("endDate" + endDate);
        let endDateUnix = endDate.getTime();
        while(checkDateUnix <= endDateUnix) {
            charDays[i] = dayNames[checkDate.getDay()] + " " + monthLabels[checkDate.getMonth()] + " " + checkDate.getDate() + ", " + checkDate.getFullYear();
            console.log(checkDateUnix);
            console.log(daily_sums);
            console.log(daily_sums[checkDateUnix]);
            console.log(checkDateUnix in daily_sums);
            //console.log(daily_sums[1582459200000]);

            if (checkDateUnix in daily_sums) {
                chartData[i] = daily_sums[checkDateUnix];
            }
            else {
                chartData[i] = 0;
            }
            //console.log(checkDate.getTime());
            i++;
            // checkDate = checkDate.getDate()+1;
            checkDate.setDate(checkDate.getUTCDate() + 1);
            checkDateUnix = checkDate.getTime();
            console.log(checkDate)
            //console.log(chartData[0])
          }
          console.log(chartData);
        this.setState({
            filteredData: chartData,
            labels: charDays
        })
    }

    // componentDidUpdate = (prevProps, prevState) =>{
    //   if(prevState.daily_sums !== this.state.daily_sums)
    //   {
        
    //     this.filteredData(1582459200000);
    //   }
    //   console.log("Component did update!")
    // }

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
        
        this.filteredData(1582459200000);
    }



    render() {
        // console.log(this.state.filteredData)
        console.log(this.state.filteredData)
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