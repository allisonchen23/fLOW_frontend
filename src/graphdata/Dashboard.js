import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./myLineGraph";
import chartIcon from "../assets/svg/chart-icon.svg";
import { dayLabels } from "./mockData";
import firebase from "../firebase"


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          filteredData: [],
          labels: dayLabels
        };
      }

    componentDidMount = () => {
        let db = firebase.database();
        let dataRef = db.ref('graph_dummy');
        var volume = [];
        dataRef.on('value', snapshot =>{
          const data = snapshot;
          data.forEach(childSnapshot => {
            volume.push(childSnapshot.child('volume').val());
          })
          this.setState({ data: volume, filteredData: volume })
        })
    }

    filteredData = (dataFilter) => {
        //let filteredData = this.state.data
        filteredData = filteredData.filter((data. startDate) => {
          var i = 0;
          checkDate = startDate
          while(!endDate) {
            for (j = 0; j < data.length; j++) {
                if (checkDate == data.time)
                    filteredData[i] = data.volume
              }

          }
        })
        this.setState({
            filteredData
        })
    }

    render() {
        const { filteredData, labels } = this.state;
        return (
            <div className={classes.container}>
            <header>
                <img src={chartIcon} alt="bar chart icon" />
                <h1>Water Dashboard</h1>
            </header>
                <LineGraph
                    data={filteredData}
                    labels={labels} />
            </div>
        )
    }
    }
